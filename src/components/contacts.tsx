import {useState, useEffect} from 'react'
import { DoubleLeft, DoubRight, Man, Woman, Mask } from './icons'
import Preferences from './preferences'
import SearchBar from './search'
import { useUser } from './userCtx'

type Props = {
    isColl:boolean,
    friend:any
}

export default function Contacts({isColl,friend}: Props) {
    const [coll, setColl] = useState<boolean>(false)
    const {user} = useUser()
    useEffect(()=>{
        setColl(isColl)
    },[isColl])

    useEffect(()=>{
        if(!user?.id) return
    },[user])
    
    return (<>
    {coll && 
        <div className="p-3 absolute">
            <button className="" onClick={()=>setColl(false)}>
                <DoubRight css="w-5 h-5 hover:text-blue-600" />
            </button>
        </div>
    }
    <div className={coll?"hidden":"flex flex-col justify-between gap-3 h-screen w-80 p-3 border-r border-gray-400"}>
        <div className="flex justify-between">
            <button className='self-end border-b border-gray-400' onClick={()=>setColl(true)}>
                {true?<DoubleLeft css="w-5 h-5 hover:text-blue-600" />:
                <DoubRight css="w-5 h-5 hover:text-blue-600" />}
            </button>
            <div className="w-3 border-b border-gray-400 grow"></div>
            <div className='flex'>
                <div className="tab-a">联系人</div>
                <div className="w-3 border-b border-gray-400"></div>
                <div className="tab hidden">聊天群</div>
            </div>
        </div>
        <SearchBar friends={friend.newFriends}/>
        <div className="flex flex-col gap-2 overflow-y-auto grow">        
            {/* <div className="flex items-center cursor-pointer">
                {1==1 ?<Down css="w-5 h-5"/>:<Right css="w-5 h-5"/>}
                <div className="ml-2 text-sm hover:text-blue-600">最近联系</div>
            </div> */}
            {friend.friends?.map((it:any)=>
            <div className="flex items-center cursor-pointer p-1 bg-gray-200 rounded" key={it.id}>
                {it.avatar==='woman' && <Woman css="w-7 h-7 rounded bg-red-200" />}
                {it.avatar==='man' && <Man css="w-7 h-7 rounded bg-blue-300" />}
                {it.avatar!='man' && it.avatar !='woman' && <Mask css="w-7 h-7 rounded bg-gray-400" />}
                <div className="ml-3">
                    <div className={it.sdp?"text-sm text-blue-700 font-semibold":"text-sm font-semibold"}>
                        {it.nickname}
                    </div>
                    <div className={it.sdp?"text-xs text-blue-400":"text-xs text-gray-400"}>
                        {it.email}
                    </div>
                </div>
            </div>)}

        </div>
        <Preferences user={user}/>
    </div>
</>)}

