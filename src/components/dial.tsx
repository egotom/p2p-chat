type Props = {
    id:string
}
export function onConnection({ id }:Props) {
    let messageCallback;
    return {
        connect() {
            console.log('✅ Connecting to "' + id + '...');
        },
        disconnect() {
            messageCallback = null;
            console.log('❌ Disconnected from "' + id );
        },
        on(event, callback) {
            if (messageCallback) {
                throw Error('Cannot add the handler twice.');
            }
            if (event !== 'message') {
                throw Error('Only "message" event is supported.');
            }
            messageCallback = callback;
        },
    };
}
  