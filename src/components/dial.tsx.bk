import { supabase } from './supabase'

export function onConnection( id:string, uid:string ) {
    let messageCallback

    const pc :any = new RTCPeerConnection()
    let dataChannel:any=null

    function onChannelStatusChange(e:any) {
        if (dataChannel) {
            const state = dataChannel.readyState;
            if (state === "open") {
                console.log('✅ dataChannel open ')
            } else {
                console.log('❌ dataChannel', e );
            }
        }
    }

    function on(event, callback) {
        if (messageCallback) {
            throw Error('Cannot add the handler twice.');
        }
        if (event !== 'message') {
            throw Error('Only "message" event is supported.');
        }
        messageCallback = callback;
    }

    function accept(){
        pc.ondatachannel = (e:any)=> {
            dataChannel = e.channel
            dataChannel.onmessage = on
            dataChannel.onopen = onChannelStatusChange
            dataChannel.onclose = onChannelStatusChange
        }
        pc.onicecandidate = (e:any) =>{
            supabase.from('profiles').update('ice',e.candidate).eq('id',uid)  
        }
        supabase.from('profiles').select('sdp').eq('id',id).then((offer:any)=>{
            pc.setRemoteDescription(offer);
            pc.createAnswer().then((answer:any) => {
                pc.setLocalDescription(answer)
                supabase.from('profiles').update('sdp', answer).eq('id',id) 
            }).catch((error:any)=> {
                console.log("Unable to create an offer: " + error.toString());
            })
        })
    }

    return {
        connect() {

            console.log('✅ Connecting to "' + id + '...')
            dataChannel = pc.createDataChannel("textChannel")
            dataChannel.onopen = onChannelStatusChange
            dataChannel.onclose = onChannelStatusChange
            dataChannel.onmessage = on
            
            pc.onicecandidate = (e:any) =>{
                supabase.from('profiles').update('ice',e.candidate).eq('id',id) 
            }
            pc.createOffer().then((offer:any) => {
                pc.setLocalDescription(offer); 
                supabase.from('profiles').update('sdp', offer).eq('id',id) 
            }).catch((error:any)=> {
                console.log("❌ Unable to create an offer: " + error.toString())
            })
        },
        disconnect() {
            messageCallback = null;
            console.log('❌ Disconnected from "' + id );
        },
        on
    };
}
  