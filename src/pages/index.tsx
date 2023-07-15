
import { useLayoutEffect, useEffect, useRef, useState } from 'react';
import ChatBox from '@/components/chatBox'
import Contacts from '@/components/contacts'
import ModalBox from '@/components/modalBox'
import Login from './Login'
import { supabase,  subscribeTopic, subscribeFriend ,subscribeMsg} from '@/components/supabase'
import { useUser } from '../components/userCtx'

export default function App() {
    const {user, setUser} = useUser()
    const [me, setMe] = useState<any>(null)
    const [coll, setColl] = useState<boolean>(false)
    const [frd, setFrd] = useState<any>(null)
    const [groups, setGps] =useState<any>([])
    const [topic, setTpc] = useState<any>()
    const refWdith = useRef(null)

    useLayoutEffect(() => {
        setColl(refWdith.current?.offsetWidth<660)
        window.addEventListener('resize', ()=>{setColl(refWdith.current?.offsetWidth<660)})
        supabase.auth.getUser().then((res:any)=>{
            if(res.error) return
            setUser(res.data.user)
            setMe(res.data.user)
        })
    }, [])

    useEffect(()=>{
        if(!user || !user.id) return
        subscribeFriend(user.id,(f:any)=>{
            setFrd(f)
            setUser({...user, friends:f.friends}) 
        })
        subscribeTopic(user.id, setGps)
        // subscribeMsg(user.id, (payload) => {console.log(payload)})
    },[user?.id])

    function createTopic(e:any, n:string){
        e.preventDefault()
        const name = n.trim()
        if(name.length<1) {
            return
        }
        supabase.from('topic').insert({name:name}).select().single()
        .then(({data,error}:any)=>{
            if(error)   return
            supabase.from('subscribe').insert({topic:data.id, follow:user.id, owner:true}).then((res:any)=>{
                if(res.error){
                    return
                }
            })            
        })
    }

    return (
    <div className="flex justify-between" ref={refWdith}>
        <ModalBox isShow={!user?.id}>
            <Login />
        </ModalBox>
        <Contacts isColl={coll} friend={frd} groups={groups} addTopic={createTopic} selected={setTpc}/>
        <ChatBox topic={topic} groups={groups}/>
    </div>)
}
