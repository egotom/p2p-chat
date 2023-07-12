import{ supabase } from './supabase'

export default async function getFriend(id:string){
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
            }else{
                nfrd.push({fid:u.id,email:u.p.email, id:u.p.id, group:u.user_g, nickname:u.p.nickname,avatar:u.p.avatar})
            }
        }
    }
    return {friends:rts,newFriends:nfrd}
}

