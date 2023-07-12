import {useState,useEffect} from 'react'
import{Setting, DoubleUp, DoubleDown} from './icons'

type Props = {
    user:any
}

export default function Preferences  ({user}: Props) {
    const [coll, setColl] = useState<boolean>(true)
    const [acc, setAcc] = useState<any>(null)
    const [chg, setChg] = useState<boolean>(false)

    useEffect(()=>{
        if(user?.id){
            // console.log(user,'---------------------------------')
            setAcc({nickname:user.user_metadata.nickname, password:'********'})
        }
    },[user])

    const hdSubmit = (e:any) =>{
        e.preventDefault()
        if(chg && acc.password.length>7 && acc.password !=='********'){

        }
        setChg(!chg)
    }
    return (
    <div className="flex flex-col">        
        {coll || <form className='py-3'>
            <fieldset className='border border-gray-400 p-2 flex flex-col gap-2'>
                <legend className='bg-gray-300 z-10'>账号</legend>
                <div>账号： {user.email}</div>
                <div className='flex'>昵称：  
                    <input type="text" className={chg?'bg-transparent w-36 border border-gray-400':'bg-transparent w-36'} value={acc.nickname} 
                        disabled={!chg} onChange={(e:any)=>setAcc({...acc, [e.target.name]:e.target.value})} name="nickname"/> 
                </div>
                <div className='flex'>密码：  
                    <input type="password" className={chg?'bg-transparent w-36 border border-gray-400':'bg-transparent w-36'} value={acc.password} 
                        disabled={!chg} onChange={(e:any)=>setAcc({...acc, [e.target.name]:e.target.value})} name="password"/> 
                </div>
                <div className='flex'>隐身： <input type="checkbox" /></div>

                <div className='flex'>
                    <button className='btn text-xs' onClick={hdSubmit}>
                        {chg?"保 存":"修 改"}
                    </button>   
                </div>
            </fieldset>
        </form>}

        <button className='w-full flex justify-between' onClick={()=>setColl(!coll)}>
        <Setting css="w-5 w-5" />
        {coll?  <DoubleUp css="w-5 w-5"/>: <DoubleDown css="w-5 w-5"/>}
        </button>
    </div>)
}

