import {useState, useEffect} from 'react'
import { DoubleLeft, DoubRight, Man, Woman, Mask, Plus, Check } from '../assets/icons'
import Preferences from './preferences'
import SearchBar from './search'
import { useUser } from './userCtx'
import { supabase } from './supabase'

type Props = {
    isColl:boolean,
    friend:any,
    groups:any,
    addTopic:Function,
    selected:Function,
}

export default function Contacts({isColl, friend, groups ,addTopic, selected}: Props) {
    const [coll, setColl] = useState<boolean>(isColl)
    const [friends, setFrds] =useState<any>([])
    
    const [tab, setTab] = useState<string>('p2p')
    const [gnm, setGnm] = useState<string>('')
    const {user} = useUser()
    useEffect(()=>{
        setColl(isColl)
    },[isColl])

    useEffect(()=>{
        if(!user?.id || !friend) return
        const channel = supabase.channel('online-users', {
            config: {
                presence: {
                    key: user.id,
                },
            },
        })
        channel.on('presence', { event: 'join' }, ({ key }) => {
            // console.log('join', key)
            const rts =[]
            for(const f of friend.friends){
                if(f.id===key)
                    f['online']=true
                rts.push(f)
            }
            setFrds(rts)
        }).on('presence', { event: 'leave' }, ({ key  }) => {
            // console.log('leave', key, leftPresences)
            const rts =[]
            for(const f of friend.friends){
                if(f.id===key)
                    f['online']=false
                rts.push(f)
            }
            setFrds(rts)
        }).subscribe(async (status) => {
            if (status === 'SUBSCRIBED') {
                await channel.track({ online_at: new Date().toISOString() })
            }
        })

        return ()=>{
            supabase.removeChannel(channel)
        }
    },[user, friend])
    

    return (<>
    {coll && 
        <div className="p-3 absolute">
            <button className="self-end pt-1" onClick={()=>setColl(false)}>
                <DoubRight css="w-5 h-5 hover:text-blue-600" />
            </button>
        </div>
    }
    <div className={coll?"hidden":isColl?"coll-is":"coll"}>
        <div className="flex justify-between mb-6">
            <button className='self-end border-b border-gray-400' onClick={()=>setColl(true)}>
                <DoubleLeft css="w-5 h-5 hover:text-blue-600" />
            </button>
            <div className="w-3 border-b border-gray-400 grow"></div>
            <div className='flex'>
                <div className={tab==="p2p"?"tab-a":"tab"} onClick={()=>setTab('p2p')}>联系人</div>
                <div className="w-3 border-b border-gray-400"></div>
                <div className={tab==="group"?"tab-a":"tab"} onClick={()=>setTab('group')}>聊天群</div>
            </div>
        </div>
        
        <div className={tab==="p2p"?"flex flex-col gap-2 overflow-y-auto grow":"hidden"}>        
            {/* <div className="flex items-center cursor-pointer">
                {1==1 ?<Down css="w-5 h-5"/>:<Right css="w-5 h-5"/>}
                <div className="ml-2 text-sm hover:text-blue-600">最近联系</div>
            </div> */}
            <SearchBar friends={friend?.newFriends}/>
            {friends?.map((it:any)=>
            <div className="flex items-center cursor-pointer p-1 bg-gray-200 rounded" key={it.id} >
                {it.avatar==='woman' && 
                    <Woman css={it.online?"w-9 h-9 rounded bg-red-200":"w-9 h-9 rounded bg-gray-400"} />
                }
                {it.avatar==='man' && 
                    <Man css={it.online?"w-9 h-9 rounded bg-blue-300":"w-9 h-9 rounded bg-gray-400"} />
                }
                {it.avatar!='man' && it.avatar !='woman' && 
                    <Mask css={it.online?"w-9 h-9 rounded bg-purple-400":"w-9 h-9 rounded bg-gray-400"} />
                }
                <div className="ml-3">
                    <div className={it.online?"text-sm text-blue-700":"text-sm"}>
                        {it.nickname}
                    </div>
                    <div className={it.online?"text-xs text-blue-400":"text-xs text-gray-400"}>
                        {it.email}
                    </div>
                </div>
            </div>)}
        </div>

        <div className={tab==="group"?"flex flex-col gap-2 overflow-y-auto grow":"hidden"}>        
            <form className="flex justify-between bg-white p-1 rounded-sm mt-2 mb-4" 
                onSubmit={(e)=>{addTopic(e,gnm); setGnm("")}}>
                <input type="text"  className='grow outline-none' value={gnm} placeholder='创建新群聊'
                    onChange={(e)=>setGnm(e.target.value)}/>
                <button type="submit"><Plus css="w-5 h-5 text-green-700"/></button>
            </form>
            {groups.map((it:any)=>
            <div className="flex items-center cursor-pointer p-1 bg-gray-200 rounded" key={it.id} 
                onClick={()=>selected(it)}>
                <Mask css="w-9 h-9 rounded bg-purple-400"/>
                <div className="ml-3">
                    <div className="text-sm text-blue-700 ">{it.name}</div>
                    <div className="text-xs text-blue-400">{it.owner?"我的群":""}</div>
                </div>
            </div>)}
        </div>
        <Preferences user={user}/>
    </div>
</>)}

