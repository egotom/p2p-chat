import { useLayoutEffect, useEffect, useRef, useState } from 'react';
import ChatBox from './components/chatBox'
import Contacts from './components/contacts'
import ModalBox from './components/modalBox'
import Login from './Login'
import { supabase,  subscribeTopic, subscribeFriend ,subscribeMsg} from './components/supabase'
import { useUser } from './components/userCtx'

export default function App() {
    const {user, setUser} = useUser()
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
        })

    }, [])

    function createTopic(e:any, n:string){
        e.preventDefault()
        const name = n.trim()
        if(name.length<1) {
            return
        }
        supabase.from('topic').insert({name:name}).select().single()
        .then(res=>{
            if(res.error)   return
            supabase.from('subscribe').insert({topic:res.data.id, follow:user.id, owner:true}).then(res2=>{
                if(res2.error){
                    return
                }
            })            
        })
    }

    useEffect(()=>{
        if(!user) return
        const channel = subscribeFriend(user.id,(f:any)=>{
            setFrd(f)
            setUser({...user, friends:f.friends}) 
        })
        const subChannel = subscribeTopic(user.id, setGps)
        // subscribeMsg(user.id, (payload) => {console.log(payload)})

        return()=>{
            supabase.removeChannel(channel)
            supabase.removeChannel(subChannel)
        }
    },[user])

    return (
    <div className="flex justify-between" ref={refWdith}>
        <ModalBox isShow={!user?.id}>
            <Login />
        </ModalBox>
        <Contacts isColl={coll} friend={frd} groups={groups} addTopic={createTopic} selected={setTpc}/>
        <ChatBox topic={topic}/>
    </div>)
}
