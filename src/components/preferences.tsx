import {useState,useEffect} from 'react'
import{Setting, DoubleUp, DoubleDown, Man, Woman, Mask} from '../assets/icons'
import {supabase} from './supabase'

type Props = {
    user:any
}

export default function Preferences  ({user}: Props) {
    const [coll, setColl] = useState<boolean>(true)
    const [acc, setAcc] = useState<any>(null)
    const [oac, setOac] = useState<any>(null)
    const [chg, setChg] = useState<boolean>(false)
    const [icn, setIcn] = useState<boolean>(false)

    const avatars = [
        {name:"man",icon:<Man css="w-14 h-14 rounded bg-blue-300" />},
        {name:"woman",icon:<Woman css="w-14 h-14 rounded bg-red-200" />},
        {name:"mask",icon:<Mask css="w-14 h-14 rounded bg-purple-400" />},
    ]

    useEffect(()=>{
        if(user?.id){
            supabase.from('profiles').select().eq('id',user.id).single()
            .then((res:any)=>{
                if(res.error) return
                setAcc({
                    email:res.data.email,
                    nickname:res.data.nickname, 
                    password:'********', 
                    avatar:res.data.avatar,
                })
                setOac({
                    email:res.data.email,
                    nickname:res.data.nickname, 
                    password:'********', 
                    avatar:res.data.avatar,
                })
            })
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
                <legend className='bg-gray-300 z-10 px-2'>账号</legend>
                <div className='flex items-center'>头像： 
                    <div className="relative w-14 h-14 rounded cursor-pointer" onClick={()=>setIcn(!icn)}>
                        {acc.avatar==='woman' && 
                        <Woman css="w-14 h-14 rounded bg-red-200" />
                        }
                        {acc.avatar==='man' && 
                            <Man css="w-14 h-14 rounded bg-blue-300" />
                        }
                        {acc.avatar!='man' && acc.avatar !='woman' && 
                            <Mask css="w-14 h-14 rounded bg-purple-400" />
                        }
                        <div className="absolute triangle bottom-0 right-0"></div>
                    </div>
                </div>
                <div className="relative">
                    <div className={icn? "flex px-2 py-4 absolute bg-white w-full -top-1 rounded":"hidden"}>
                        {avatars.filter(it=>it.name!=acc.avatar).map((it,id)=>
                        <div className="relative w-14 h-14 rounded mr-3 cursor-pointer"  key={id}
                            onClick={()=>{setAcc({...acc, avatar:it.name});setIcn(false)}}>
                            {it.icon}
                        </div>
                        )}
                    </div>
                </div>
                

                <div>账号： {acc.email}</div>
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

        <button className='w-full flex justify-between ' onClick={()=>setColl(!coll)}>
        <Setting css="w-5 w-5 hover:text-blue-600" />
        {coll?  <DoubleUp css="w-5 w-5 hover:text-blue-600"/>: <DoubleDown css="w-5 w-5"/>}
        </button>
    </div>)
}

