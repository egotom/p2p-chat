import {ReactNode} from 'react'

interface propsType {
    isShow:boolean,
    coll:boolean,
    children: ReactNode
}
export default function ModalBox({isShow, children, coll} : propsType)  {
return (
    <div className={isShow?'fixed inset-0 z-20 w-screen h-screen bg-gray-400/90 flex justify-center items-center':'hidden'}>
        <div className={coll?"w-screen h-screen bg-gray-200":"w-[650px] h-[450px] bg-gray-200 shadow rounded"}>
            {children}
        </div>
    </div>
)}