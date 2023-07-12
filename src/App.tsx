import { useLayoutEffect, useEffect, useRef, useState } from 'react';
import ChatBox from './components/chatBox'
import Contacts from './components/contacts'
import ModalBox from './components/modalBox'
import Login from './Login'
import { supabase } from './components/supabase'
import { useUser } from './components/userCtx'
import fetchFrd from './components/getFriend'

export default function App() {
    const {user, setUser} = useUser()
    const [coll, setColl] = useState<boolean>(false);
    const [frd, setFrd] = useState<any>([]);
    const refWdith = useRef(null);

    useLayoutEffect(() => {
        setColl(refWdith.current.offsetWidth<650);
    }, []);

    useEffect(()=>{
        supabase.auth.getUser().then((res:any)=>{
            if(res.error) return
            const user = res.data.user
            setUser(user)
            supabase.channel('new-friend-channel')
                .on('postgres_changes',{ event: 'insert', schema: 'public', table: 'friends', filter: `user2=eq.${user.id}` },
                    (payload) => {
                        console.log('Change received!',JSON.stringify(payload.new))
                        fetchFrd(user.id).then((res:any)=>{
                            setFrd(res)
                        })
                    }
                )
                .on('postgres_changes',{ event: 'update', schema: 'public', table: 'friends', filter: `user=eq.${user.id}` },
                    (payload) => {
                        console.log('Change received!',JSON.stringify(payload.new))
                        fetchFrd(user.id).then((res:any)=>{
                            setFrd(res)
                        })
                    }
                )
                .on('postgres_changes',{ event: 'delete', schema: 'public', table: 'friends', filter: `user=eq.${user.id}` },
                    (payload) => {
                        console.log('Change received!',JSON.stringify(payload.new))
                        fetchFrd(user.id).then((res:any)=>{
                            setFrd(res)
                        })
                    }
                )
                .on('postgres_changes',{ event: 'update', schema: 'public', table: 'friends', filter: `user2=eq.${user.id}` },
                    (payload) => {
                        console.log('Change received!',JSON.stringify(payload.new))
                        fetchFrd(user.id).then((res:any)=>{
                            setFrd(res)
                        })
                    }
                ).subscribe()

            fetchFrd(user.id).then((res:any)=>{
                setFrd(res)
            })
        })
    },[])

    return (
    <div className="flex justify-between" ref={refWdith}>
        <ModalBox isShow={!user?.id}>
            <Login />
        </ModalBox>
        <Contacts isColl={coll} friend={frd}/>
        <ChatBox />
    </div>)
}
