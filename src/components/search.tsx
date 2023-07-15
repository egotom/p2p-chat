import { useState } from 'react'
import { Search} from '../assets/icons'
import { supabase } from './supabase'
import { Plus, Deny } from '../assets/icons'
import { useUser } from './userCtx'

type Props = {
    friends:any
}

export default function SearchBar({friends}: Props){
    const {user} = useUser()
    const [kw, setKw] = useState<string>('')
    const [rts, setRts] = useState<any>([])
    const [msg, setMsg] = useState<string>('')

    const doSearch =(e:any) =>{
        e.preventDefault()
        setMsg('')
        if(kw.trim().length<1) return
        supabase.from('profiles').select().eq('email',kw).neq('email', user.email.trim())
            .then((res:any)=>{
                if(res.error || res.data.length<1){
                    setMsg("未搜索到该用户！")
                    return
                }
                setRts(res.data)
            })
    }

    const propuse = (uid:string)=>{
        supabase.from('friends').insert({user:user.id, user2:uid})
            .then((res:any)=>{
                // console.log(res)
                if(res.error){
                    setMsg("发送邀请失败！")
                    return
                }
                setMsg("发送邀请成功！")
                setRts([])
            })
    }

    const confirm = (id:string)=>{
        supabase.from('friends').update({stats:true}).eq('id',id)
            .then((res:any)=>{
                // console.log(res)
                if(res.error){
                    setMsg("添加好友失败！")
                    return
                }
                // setMsg("添加好友成功！")
            })
    }

    const decline = (id:string)=>{
        supabase.from('friends').delete().eq('id',id)
            .then((res:any)=>{
                // console.log(res)
                if(res.error){
                    setMsg("操作失败！")
                    return
                }
                setMsg("已拒绝该要求！")
            })
    }
    return (<>
    <form className="flex justify-between bg-white p-1 rounded-sm my-2">
        <input type="text" className='grow outline-none' value={kw} placeholder='搜索好友'
            onChange={(e:any)=>setKw(e.target.value)}/>
        <button onClick={doSearch}><Search css={"w-5 h-5 text-green-700"}/></button> 
    </form>
    {friends?.length>0 && <div className="text-blue-600">有新的好友邀请：</div> }
    {friends?.map((it:any)=>
    <div className="flex justify-between w-full items-center p-2 border border-gray-400" key={it.id}>        
        <div className="flex items-center gap-3 text-sm">
            {it.email}
        </div>
        <div>
            <button onClick={()=>decline(it.fid)} className='p-1'><Deny css="w-5 h-5 text-red-700"/></button>
            <button onClick={()=>confirm(it.fid)} className='p-1'><Plus css="w-5 h-5 text-blue-600"/></button>
        </div>
    </div>
    )}
    {rts.map((it:any)=>
    <div className="flex justify-between w-full items-center p-2 border border-gray-400" key={it.id}>        
        <div className="flex items-center gap-3 text-sm">
            {it.email}
        </div>
        <button onClick={()=>propuse(it.id)} className='p-1'><Plus css="w-5 h-5"/></button>
    </div>
    )}
    <div className='text-blue-600 text-sm self-center'>{msg}</div>
    </>)
}

