import {supabase} from '@/components/supabase'
import { useState } from 'react'
import {Spin} from '@/assets/icons'
import {useUser} from '@/components/userCtx'

type Props = {}

export default function Login({}:Props){
    const {setUser} = useUser()
    const [lg, setLg] = useState<any>({email:'', password:'', hidden:false, loadding:false })
    const [rg, setRg] = useState<any>({email:'', password:'', repass:'', nickname:'', loadding:false})
    const [nt, setNt] = useState<any>({})
    function signin(){
        const ers:any ={}
        if(lg.email?.trim().length < 6)
            ers.lemail='请输入正确的邮箱地址！'
        
        if(lg.password?.trim().length < 8)
            ers.lpass='请输入正确的密码！'
        
        if(Object.keys(ers).length>0){
            setNt(ers)
            return
        }
        // console.log('-------------------------',lg)
        setLg({...lg, loadding:true})
        supabase.auth.signInWithPassword({email: lg.email.trim(), password: lg.password.trim()})
            .then((res:any)=>{
                if(res.error){
                    setNt({...nt, lres:res.error.message})
                    return
                }
                // console.log(res.data)
                setUser(res.data.user)

            }).catch((e:any)=>{
                // console.log(e.error.message)
                setNt({...nt, lres:e.error.message})
            }).finally(()=>{
                setLg({...lg, email:'', password:'',loadding:false })
            })
    }
    function signUp(){
        const ers:any ={}
        if(rg.password.trim() != rg.repass.trim())
            ers.rrepass='两次输入的密码不一致！'
        
        if(rg.password?.trim().length < 8)
            ers.rpass='密码长度至少8位!'
        
        if(rg.email?.trim().length < 6)
            ers.remail='请输入正确的邮箱地址！'
        
        if(rg.nickname?.trim().length < 1)
            ers.rnick='请输入昵称！'
        
        if(Object.keys(ers).length>0){
            setNt(ers)
            return
        }
        // console.log('-------------------------',rg)
        setRg({...rg, loadding:true})
        supabase.auth.signUp({
            email: rg.email.trim(),
            password: rg.password.trim(),
            options: {
                data: {nickname: rg.nickname.trim()}
            }
        }).then(({error}:any)=>{
            if(!error)
                setNt({rsuccess:"注册成功！请登录邮箱，激活账号。"})
        }).catch((e:any)=>{
            console.log(e)
                setNt({rsuccess:"网络错误，请稍后再试。"})
        }).finally(()=>{
            setRg({email:'', password:'', repass:'', nickname:'', loadding:false})
        })
    }

    function hChangeRg(e:any){
        setRg({...rg, [e.target.name]:e.target.value})
    }

    function hChangeLg(e:any){
        setLg({...lg, [e.target.name]:e.target.value})
    }
return (
<div className='h-full flex rounded'>
    <div className='basis-1/2 h-full flex flex-col bg-local rounded-l' style={{backgroundImage: "url(/bg-register.jpg)"}}>
        <div className="my-6 text-lg self-end px-3 text-white">登录</div>
        <div className="text-red-600 text-sm h-8 self-center w-64 mb-3">{nt.lres}</div>
        <div className="flex itemts-center gap-3 my-2">
            <div className='text-white text-sm w-10 ml-10'>账号</div>
            <input type="text" className="border border-gray-400 outline-none text-sm p-1"
                name="email" value={lg.email} onChange={hChangeLg}/>
        </div>
        <div className="flex itemts-center gap-3">
            <div className='text-white text-sm w-10 ml-10'></div>
            <div className="text-red-600 text-sm h-7 self-start ">{nt.lemail}</div>
        </div>
        <div className="flex itemts-center gap-3 my-2">
            <div className='text-white text-sm w-10 ml-10'>密码</div>
            <input type="password" className="border border-gray-400 outline-none text-sm p-1"
                name="password" value={lg.password} onChange={hChangeLg}/>
        </div>
        <div className="flex itemts-center gap-3">
            <div className='text-white text-sm w-10 ml-10'></div>
            <div className="text-red-600 text-sm h-7 self-start ">{nt.lpass}</div>
        </div>
        <div className="flex itemts-center justify-center gap-3 my-2">
            <div className='text-white text-sm'>隐身</div>
            <input type="checkbox" className="border border-gray-400 text-sm p-1"
                name="hidden" value={lg.hidden} onChange={hChangeLg}/>
        </div>
        <div className="flex itemts-center justify-center gap-3 my-2">
            <button className='btn' onClick={signin}>
                {lg.loadding?<Spin css="w-5 h-5 animate-spin"/>:"登录"}
            </button>
        </div>
    </div>
    <div className='basis-1/2 h-full flex flex-col items-center'>
        <div className="my-6 text-lg self-start px-3 ">注册新用户</div>
        <div className="flex flex-col">
            <div className="text-red-700 text-sm h-8">{nt.rres}</div>
            <div className="flex items-center">
                <div className="text-sm mr-3 w-14 flex justify-end">邮箱</div>
                <input type="text" className="border border-gray-400 text-sm p-1" 
                    name="email" value={rg.email} onChange={hChangeRg} />
            </div>
            <div className="flex items-center">
                <div className="text-sm mr-3 w-14 flex justify-end"></div>
                <div className="text-red-700 text-sm h-7 self-start ">{nt.remail}</div>
            </div>

            <div className="flex items-center">
                <div className="text-sm mr-3 w-14 flex justify-end">昵称</div>
                <input type="text" className="border border-gray-400 text-sm p-1" 
                    name="nickname" value={rg.nickname} onChange={hChangeRg}/>
            </div>
            <div className="flex items-center">
                <div className="text-sm mr-3 w-14 flex justify-end"></div>
                <div className="text-red-700 text-sm h-7 flex justify-start">{nt.rnick}</div>
            </div>

            <div className="flex items-center">
                <div className="text-sm mr-3 w-14 flex justify-end">密码</div>
                <input type="password" className="border border-gray-400 text-sm p-1" 
                    name="password" value={rg.password} onChange={hChangeRg}/>
            </div>
            <div className="flex items-center">
                <div className="text-sm mr-3 w-14 flex justify-end"></div>
                <div className="text-red-700 text-sm h-7 flex justify-start">{nt.rpass}</div>
            </div>

            <div className="flex items-center">
                <div className="text-sm mr-3 w-14 flex justify-end">确认密码</div>
                <input type="password" className="border border-gray-400 text-sm p-1" 
                    name="repass" value={rg.repass} onChange={hChangeRg}/>
            </div>
            <div className="flex items-center">
                <div className="text-sm mr-3 w-14 flex justify-end"></div>
                <div className="text-red-700 text-sm h-7 flex justify-start">{nt.rrepass}</div>
            </div>
            <div className="flex items-center">
                <div className="text-sm mr-3 w-5 flex justify-end"></div>
                <div className="text-green-700 text-sm h-7 flex justify-start">{nt.rsuccess}</div>
            </div>
        </div>
        <button className='btn'onClick={signUp}>
            {rg.loadding?<Spin css="w-5 h-5 animate-spin"/>:"注册"}
        </button>
    </div>
</div>    
)}





