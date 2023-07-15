import { useState,useEffect,useRef } from "react";
import { Attachment,Send, Video, DVideo, Sound, DSound, Face, Power} from '../assets/icons';
import {Emojis}  from '../assets/emoji'
import {supabase} from './supabase'
import {useUser} from './userCtx'
import TopicMen from "./topicMen"

type Props = {
  topic:any,
  groups:any,
}
export default function chatBox({topic,groups}: Props) {
  const {user, setUser} = useUser()
  const inRef = useRef<any>(null)
  const [status, setStatus] = useState<any>({conn:false, video:false, audio:false, ready:false})
  const [message, setMessage] = useState<string>("")
  const [msg, setMsg] = useState<any>([])
  const [emj, setEmj] = useState<boolean>(false)
  const [channel, setChl] = useState<any>()
  const [menu, setMenu] = useState<boolean>(false) 
  const [bmb, setBmb] = useState<boolean>(false) 

  useEffect(()=>{
    if(!topic?.id) return
    const ch = supabase.channel('chatRoom', {
      config: {
        broadcast: {self: true},
      },
    })
    .on('broadcast', { event: topic.id }, ({payload}) => {
        setMsg((m:any)=>[...m, {id:Date.now(),author:payload.author, msg:payload.msg}])
    })
    .subscribe((s) => {
        if (s === 'SUBSCRIBED') {
            // console.log("SUBSCRIBED on room ", topic.id)
            setChl(ch)
            setStatus({...status, conn:true})
        }
    })

    return (()=>{
      supabase.removeChannel(ch)
      setChl(null)
    })

  },[topic])

  async function dismissTopic(){
    const {error} = await supabase.from('subscribe').delete().eq('topic', user.id)
    if(error) return false 
    const {error:e2} = await supabase.from('topic').delete().eq('id',user.id)
    if(e2) return false 
    return true
  }

  function sendMessage(e:any) {
    e.preventDefault()
    if(message === "" && !status.conn) return
    const id = Date.now()
    channel.send({type: 'broadcast',event: topic.id, payload: {id:id, author:user.id, msg:message,}})
    setMessage("")
    inRef.current.focus()
  }
  
  async function logout(){
    await supabase.auth.signOut()
    setUser(null)
  }
  return (
  <div className="flex flex-col justify-between px-3 h-screen w-full">
    <div className="flex justify-between border-b border-gray-400 w-full px-3 py-1.5">
      <div></div>
      <div className="flex justify-end items-end cursor-pointer relative" onClick={()=>setMenu(!menu)}>
        <div className="mr-1 hover:text-blue-600">{topic?.name}</div>   
        <div className="dot2 text-green-700">...</div>
        <div className={menu?"menu":"hidden"}>
          <ul className="">
            {topic?.owner && <li className="item border-b" onClick={dismissTopic}>
              解散该群
            </li>}
            <li className="item" onClick={()=>setBmb(!bmb)}>
              管理成员
            </li>
          </ul>
        </div>
      </div>
      <TopicMen show={bmb} topic={topic} groups={groups} close={()=>setBmb(false)}/>
      <button className="h-full pl-4" onClick={logout}>
        <Power css="w-5 h-5 hover:text-blue-600"/>
      </button>
    </div>
    
    <div className="w-full h-full rounded flex flex-col gap-3 p-3 grow overflow-y-auto">
      {msg.map((it:any)=>
      <div className={it.author===user.id?"msg-me":"msg" } key={it.id}>
        {it.msg}
      </div>
      )}
    </div>
    <form className="flex flex-col" onSubmit={sendMessage}>
      <div className="w-full px-3">        
        {/* <textarea className="w-full border border-blue-600 grow rounded p-2 " 
          ref={inRef} 
          value={message} 
          onChange={(e:any)=>setMessage(e.target.value)}>
        </textarea> */}
        <input type="text" className="w-full border border-blue-600 grow rounded p-2 outline-none"
          ref={inRef} 
          value={message} 
          onChange={(e:any)=>setMessage(e.target.value)}/>
      </div>
      <div className="flex justify-between gap-3 w-full p-3 relative">
        <div className="flex gap-3">
          {status.audio?
            <button className={status.conn?"btn":"btn-disabled"}><DSound css={"w-5 h-5 text-white"}/></button>:
            <button className={status.conn?"btn":"btn-disabled"}><Sound css={"w-5 h-5 text-white"}/></button>
          }
          {status.video?
            <button className={status.conn?"btn":"btn-disabled"}><DVideo css={"w-5 h-5 text-white"}/></button>:
            <button className={status.conn?"btn":"btn-disabled"}><Video css={"w-5 h-5 text-white"}/></button>
          }
          <button className={status.conn?"btn":"btn-disabled"}><Attachment css={"w-5 h-5 text-white"}/></button>
        </div>
        <div className="flex gap-3">
          <button className="btn" onClick={()=>setEmj(!emj)}>
            <Face css={"w-5 h-5 text-white"} />
          </button>
          <button type="submit" className={status.conn?"btn":"btn-disabled"}>
            <Send css={"w-5 h-5 text-white -rotate-45"}/>
          </button>          
          {emj && <Emojis />}
          {/* <Emoji name="270b" css="" /> */}
        </div>
      </div>
    </form>
  </div>
)}