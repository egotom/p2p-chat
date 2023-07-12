import { useState,useEffect,useRef } from "react";
import { Attachment,Send, Video, DVideo, Sound, DSound, Face, Power} from './icons';
import {Emojis}  from './emoji'
import {supabase} from './supabase'
import {useUser} from './userCtx'

type Props = {
  
}
const pc :any = new RTCPeerConnection()
let textChannel:any=null

export default function chatBox({}: Props) {
  const {user, setUser} = useUser()
  const inRef = useRef<any>(null)
  const [status, setStatus] = useState<any>({conn:false, video:false, audio:false, ready:false})
  const [message, setMessage] = useState<string>("")
  const [msg, setMsg] = useState<any>([])
  const [emj, setEmj] = useState<boolean>(false)

  useEffect(()=>{

  },[user])

  function sendMessage() {
    if(message === "") return
    const text = {id: Date.now(), msg:message, author:1}
    setMsg([...msg, text])
    textChannel.send(JSON.stringify(text))
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
      <div className="flex justify-end items-end cursor-pointer ">
        <div className="mr-1" >华盛顿</div>   
        <div className="dot2 text-green-700">...</div>
      </div>
      <button className="h-full pl-4" onClick={logout}>
        <Power css="w-5 h-5 "/>
      </button>
    </div>
    
    <div className="w-full h-full rounded flex flex-col gap-3 p-3 grow overflow-y-auto">
      {msg.map((it:any)=>
      <div className={it.author===user.id?"msg-me":"msg" } key={it.id}>
        {it.msg}
      </div>
      )}
    </div>
    <div className="flex flex-col">
      <div className="w-full px-3">        
        <textarea className="w-full border border-blue-600 grow rounded px-2 " 
          ref={inRef} 
          value={message} 
          onChange={(e:any)=>setMessage(e.target.value)}>
        </textarea>
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
          <button className={status.conn?"btn":"btn-disabled"} onClick={sendMessage}>
            <Send css={"w-5 h-5 text-white -rotate-45"}/>
          </button>          
          {emj && <Emojis />}
          {/* <Emoji name="270b" css="" /> */}
        </div>
      </div>
    </div>
  </div>
)}