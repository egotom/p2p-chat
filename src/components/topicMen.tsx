import { useUser } from './userCtx'
import { useEffect,useState } from 'react'
import Modal from './modalBox'
import { X, DoubleLeft, DoubRight } from '@/assets/icons'
import { supabase } from './supabase'

type Props = {
    show:boolean,
    topic:any,
    groups:any
    close:Function,
}

export default function topicMen({show, topic:t, close, groups}: Props){
    const {user} = useUser()
    const [friends, setFrd] = useState<any>([])
    const [sel, setSel] = useState<any>({})
    const [selr, setSelr] = useState<any>({})
    const [topic, setTopic] = useState<any>([])

    useEffect(()=>{
        if(user && user.friends)
            setFrd(user.friends)
    },[user])

    useEffect(()=>{
        if(t && t.id && groups)
            setTopic(groups.find(it=>it.id===t.id))
    },[groups,t])

    function addMemeber(){
        if(!sel.id) return
        const f = topic.follow.find(it=>it.id===sel.id)
        if(f) return 
        supabase.from("subscribe").insert({topic:topic.id, follow:sel.id})
        .then(({error})=>{
            if(!error){
                // alert("添加成功！")
                setSel(null)
            }
        })
    }

    function rmMemeber(){
        if(!selr.id) return
        const f = topic.follow.find(it=>it.id===selr.id)
        if(!f) return 
        supabase.from("subscribe").delete().match({follow:selr.id, topic:topic.id})
        .then(({error})=>{
            if(!error){
                // alert("删除成功！")
                setSelr(null)
            }
        })
    }

    return (
    <Modal isShow={show}>
        <div className="p-6 flex flex-col justify-between h-full">
            <div className="flex justify-between  mb-3">
                <div></div>
                <div className="text-center w-full">管理群成员</div>
                <button onClick={close}>
                    <X css="h-5 w-5 hover:text-blue-600"/>
                </button>
            </div>            
            
            <div className="flex justify-between items-stretch h-full">
                <fieldset className='basis-5/12 h-full border border-blue-400'>
                    <legend className='px-1.5 ml-4 text-blue-600'>选择好友</legend>
                    <ul className='overflow-y-auto'>
                        {friends.map((it)=>
                            <li className={it.id===sel?.id?'bg-blue-400 px-2 py-1':'px-2 py-1 hover:bg-blue-300'} 
                                key={it.id} onClick={()=>setSel(it)}>                                
                                {it.nickname}
                            </li>
                        )}
                    </ul>
                </fieldset>
                <div className="basis-2/12 flex flex-col items-center justify-center">
                    <button className='btn my-2' onClick={addMemeber}>
                        <DoubRight css='w-5 h-5'/>
                    </button>
                    {topic?.owner &&
                    <button className='btn my-2' onClick={rmMemeber}>
                        <DoubleLeft css='w-5 h-5' />
                    </button>}
                </div>
                <fieldset className='basis-5/12 h-full border border-blue-400'>
                    <legend className='px-1.5 ml-4 text-blue-600'>群成员</legend>
                    <ul className='overflow-y-auto'>
                        {topic?.follow?.map((it)=>
                            <li className={it.id===selr?.id?'bg-blue-400 px-2 py-1':'px-2 py-1 hover:bg-blue-300'}
                                key={it.id} onClick={()=>setSelr(it)}>
                                {it.nickname}
                            </li>
                        )}
                    </ul>
                </fieldset>
            </div>
        </div>        
    </Modal>)
}

