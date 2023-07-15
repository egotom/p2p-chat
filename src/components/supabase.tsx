
import { createClient } from '@supabase/supabase-js'
const url = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const key = process.env.NEXT_PUBLIC_SUPABASE_KEY as string
const supabase = createClient(url, key)

async function getFriend(id:string){
    const rts =[], nfrd=[]
    const{data,error} = await supabase.from('friends')
        .select(`id,p:profiles!friends_user_fkey(id,email,nickname,avatar,sdp,ice), p2:profiles!friends_user2_fkey(id,email,nickname,avatar,sdp,ice) , user_g, user2_g, stats`)
        .or(`user.eq.${id}, user2.eq.${id}`)
            
    if(error){
        return {friends:rts,newFriends:nfrd}
    }
    for(const u of data){
        if(u.p.id==id){
            if(u.stats){
                rts.push({fid:u.id,email:u.p2.email, id:u.p2.id, group:u.user2_g, nickname:u.p2.nickname,avatar:u.p2.avatar})
            }else{
                nfrd.push({fid:u.id,email:u.p2.email, id:u.p2.id, group:u.user2_g, nickname:u.p2.nickname,avatar:u.p2.avatar})
            }
        }else{
            if(u.stats){
                rts.push({fid:u.id,email:u.p.email, id:u.p.id, group:u.user_g, nickname:u.p.nickname,avatar:u.p.avatar})
            }
        }
    }
    return {friends:rts,newFriends:nfrd}
}


async function getTopic(id:string){
    const rts =[]
    const{data:topics,error} = await supabase.from('subscribe').select('topic(id, name), owner').eq('follow', id)
    if(error)   return rts
    
    for(const t of topics){
        const{data:follows, error:error2} = await supabase.from('subscribe').select('follow(id, nickname, email)').eq('topic',t.topic.id)
        if(error2)   return rts
        const tfs=[]
        for(const d of follows){
            tfs.push({id:d.follow.id, nickname:d.follow.nickname, email:d.follow.email})
        }
        rts.push({id:t.topic.id, name:t.topic.name, follow:tfs,owner:t.owner})
    }
    return rts
}



function subscribeFriend(id:string , callback:Function){
    const channel = supabase.channel('new-friend-channel')
        .on('postgres_changes', { event: 'insert', schema: 'public', table: 'friends', filter: `user2=eq.${id}` },
            (payload:any) => {
                console.log('Change received!',JSON.stringify(payload.new))
                getFriend(id).then((res:any)=>{callback(res)})
            }
        )
        .on('postgres_changes', { event: 'update', schema: 'public', table: 'friends', filter: `user=eq.${id}` },
            (payload:any) => {
                console.log('Change received!',JSON.stringify(payload.new))
                getFriend(id).then((res:any)=>{callback(res)})
            }
        )
        .on('postgres_changes', { event: 'delete', schema: 'public', table: 'friends', filter: `user=eq.${id}` },
            (payload:any) => {
                console.log('Change received!',JSON.stringify(payload.new))
                getFriend(id).then((res:any)=>{callback(res)})
            }
        )
        .on('postgres_changes', { event: 'update', schema: 'public', table: 'friends', filter: `user2=eq.${id}` },
            (payload:any) => {
                console.log('Change received!',JSON.stringify(payload.new))
                getFriend(id).then((res:any)=>{callback(res)})
            }
        ).subscribe()
        getFriend(id).then((res:any)=>{callback(res)})
    return channel
}

function subscribeTopic(id:string , callback:Function){
    const subChannel = supabase.channel('new-subscribe')
        .on('postgres_changes', { event: 'insert', schema: 'public', table: 'subscribe' },
            (payload:any) => {
                console.log('subscribe insert received!',JSON.stringify(payload.new))
                getTopic(id).then(res=>{callback(res)})
            }
        ).on('postgres_changes', { event: 'delete', schema: 'public', table: 'subscribe' },
            (payload:any) => {
                console.log('subscribe delete received!',JSON.stringify(payload.new))
                getTopic(id).then(res=>{callback(res)})
            }
        ).subscribe()
        getTopic(id).then(res=>{callback(res)})

    return subChannel
}

function subscribeMsg(id:string , onReceive:Function){
    const channel = supabase.channel('chatRoom')
    supabase.from('subscribe').select('topic(id)').eq('follow', id)
    .then(({data,error}:any)=>{
        if(error)   return null
        for(const s of data){
            channel.on('broadcast', { event: s.topic.id }, onReceive )
        }
        channel.subscribe((status:string) => {
            if (status === 'SUBSCRIBED') {
                console.log("Room msg SUBSCRIBED")
            }
        })
    })
    
}

export {supabase, subscribeFriend, subscribeMsg, subscribeTopic}