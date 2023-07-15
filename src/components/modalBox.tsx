import {ReactNode, useEffect,useState} from 'react'
import { useUser } from './userCtx'

interface propsType {
    isShow:boolean,
    children: ReactNode
}
export default function ModalBox({isShow,children} : propsType)  {
    const {user} = useUser()
    const [coll, setColl] = useState(false)
    useEffect(()=>{
        if(!user?.coll) return 
        setColl(user.coll)
    },[user])
return (
    <div className={isShow?'fixed inset-0 z-20 w-screen h-screen bg-gray-400/90 flex justify-center items-center':'hidden'}>
        <div className={coll?"w-screen h-screen bg-gray-200":"w-[650px] h-[450px] bg-gray-200 shadow rounded"}>
            {children}
        </div>
    </div>
)}