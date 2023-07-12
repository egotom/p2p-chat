import {ReactNode} from 'react'

interface propsType {
    isShow:boolean,
    children: ReactNode
}
export default function ModalBox({isShow,children} : propsType)  {
return (
    <div className={isShow?'absolute z-20 w-screen h-screen bg-gray-400/90 flex justify-center items-center':'hidden'}>
        <div className="w-[650px] h-[450px] bg-gray-200 shadow rounded">
            {children}
        </div>
    </div>
)}