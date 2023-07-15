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
            const me = res.data.user
            setUser(me)
            subscribeFriend(me.id,(f:any)=>{
                setFrd(f)
                setUser({...me, friends:f.friends}) 
            })
            subscribeTopic(me.id, setGps)
            // subscribeMsg(user.id, (payload) => {console.log(payload)})
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

    return (
    <div className="flex justify-between" ref={refWdith}>
        <ModalBox isShow={!user?.id}>
            <Login />
        </ModalBox>
        <Contacts isColl={coll} friend={frd} groups={groups} addTopic={createTopic} selected={setTpc}/>
        <ChatBox topic={topic} groups={groups}/>
    </div>)
}
