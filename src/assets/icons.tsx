
type Props = {
    css:string
}

export function Sound({css}: Props){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
    </svg>)
}

export function DSound({css}: Props){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z" />
    </svg>)
}

export function Video({css}: Props){
    return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
        <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
    </svg>)
}

export function DVideo({css}: Props){
    return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409" />
    </svg>)
}

export function Conn({css}: Props){
    return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
    </svg>)
}

export function DConn({css}: Props){
    return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 3.75L18 6m0 0l2.25 2.25M18 6l2.25-2.25M18 6l-2.25 2.25m1.5 13.5c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
    </svg>)
}

export function Send({css}: Props){
    return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>)
}

export function Face({css}: Props){
    return(
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
    </svg>)
}

export function Right({css}: Props){
    return(
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>)
}

export function Down({css}: Props){
    return(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>)
}
export function DoubleLeft({css}: Props){
    return(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
    </svg>)
}
export function DoubRight({css}: Props){
    return(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
    </svg>)
}

export function Search({css}: Props){
    return(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>)
}

export function Setting({css}: Props){
    return(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>)
}

export function DoubleUp({css}: Props){
    return(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
    </svg>)
}

export function DoubleDown({css}: Props){
    return(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
    </svg>)
}

export function Attachment({css}: Props){
    return(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
    </svg>)
}

export function Ellipsis({css}: Props){
    return(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>)
}

export function Spin({css}: Props){
    return(<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={css}>
    <path d="M12 4.75V6.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M17.1266 6.87347L16.0659 7.93413" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M19.25 12L17.75 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M17.1266 17.1265L16.0659 16.0659" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M12 17.75V19.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M7.9342 16.0659L6.87354 17.1265" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M6.25 12L4.75 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    <path d="M7.9342 7.93413L6.87354 6.87347" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>)
}

export function Power({css}: Props){
    return(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
    </svg>)
}

export function Plus({css}: Props){
    return(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>)
}

export function Deny({css}: Props){
    return(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>)
}


export function Man({css}: Props){
    return(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="324.963 35.129 1355.092 1596.917"  stroke="currentColor" className={css}>
        <path fill="#603813" stroke="#603813" d="M947.98 126.83c7.26-.64 13.5-5.24 20.86-5.48 9.11-1.13 18.52 2.42 24.3 9.62 6.06-.89 12.17-.14 18.22.57 6.3-8.46 17.37-12.24 27.63-10.47 6.04.63 11.11 4.54 17.15 5.15 7.12.96 13.96 3.31 20.56 6.1 4.01 1.69 7.86 4.22 12.39 4.13 11.01.45 22.06 1.62 32.61 4.98 20.23 6.28 39.17 17.63 53.16 33.68 2.02 2.2 4.97 3.09 7.54 4.48 9.12 4.75 17.47 10.99 24.66 18.34 11.85 12.62 21.36 27.18 32.88 40.07 3.02 3.62 6.76 6.59 9.55 10.4 4.63 6.71 4.35 15.74.8 22.86 6.52 5.69 12.38 12.13 17.38 19.19 3.91 5.14 6.47 11.25 11.19 15.78 14.97 17.25 21.04 40.34 22.87 62.67.44 12.43 4.26 24.59 3.51 37.09-.86 5.28-1.68 10.57-2.02 15.91-1.57 16.23-3.46 32.43-4.77 48.68-1.8 18.46-.66 37.54-6.86 55.31-2.66 8.01-7.43 15.47-14.44 20.33-11.29 1.64-22.27 4.86-33.37 7.33-5.72-1.09-11.22-3.28-17-4.2 1.36-3.02 1.11-6.43 1.92-9.59.56-3.23 2.13-6.47 1.24-9.78-1.3-5.95-1.11-12.09-2.14-18.08-1-6.25-.31-12.58-.44-18.87-.13-8.74.52-17.51 2.32-26.07-4.68-3.8-7.9-9.67-7.05-15.83 2.34-20.84 5.58-41.69 11.87-61.74.8-2.78 2.11-5.43 2.42-8.33-.47-20.45-4.67-41.48-16.26-58.69-6.49-9.42-15.27-17.21-25.33-22.63-1.26 5.45-4.02 10.74-8.73 13.94-4.49 3.22-10.38 4.04-15.68 2.71-7.4-1.87-14.88-3.54-22.5-4.14-6.8-.72-13.65-1.07-20.48-.93-2.48-.24-4.24 1.64-5.99 3.03-6.65 5.12-14.49 8.95-22.93 9.68-9.93 1.27-19.9-1.13-29-5.03-3.18-1.62-6.71-.28-10.01.08-13.59 1.97-27.24 3.73-40.97 4.14-8.07.27-14.87-5.58-17.89-12.71-1.48 0-2.95-.01-4.41-.02.02 3.33 0 6.66-.05 10-3.28 1.83-6.87 3.34-10.69 3.23-15.46-.43-30.8-2.64-46.09-4.87-2.33-.54-4.41.84-6.48 1.63-9.37 4.04-19.99 6.61-30.1 4.06-5.77-1.75-11.26-4.38-16.38-7.54-6.3-4.57-14.53-4.35-21.95-4.29-10.51-.74-20.87 1.7-31 4.19-6.56 1.71-13.98-.22-18.63-5.21-2.98-3.01-4.55-7.03-5.72-11.01-11.04 6.09-20.87 14.67-27.54 25.43-4.18 8.12-8.66 16.28-10.4 25.35-2.01 9.37-3.05 18.94-3.48 28.51-.25 3.94 1.57 7.56 2.63 11.25 6.02 19.78 9.27 40.3 11.45 60.82.7 5.98-2.39 11.66-6.99 15.3 2.48 11.04 2.6 22.38 2.43 33.63.37 8.8-1.82 17.4-2.4 26.14-1.8 7.68 2.09 15.1 2.14 22.81-4.69.95-9.27 2.31-13.85 3.67-2.81 1-5.66-.25-8.38-.87-9.04-2.32-18.12-4.56-27.34-5.98-5.04-3.53-9.22-8.24-11.91-13.78-6.5-13.31-7.7-28.4-8.28-42.98-.31-16.42-1.91-32.78-3.78-49.08-1.49-11.31-2.12-22.74-4.22-33.96-.72-10.74 1.95-21.29 3.08-31.9 1.2-21.61 5.79-43.85 18.3-61.93 3.23-5.05 8.03-8.93 10.77-14.32 5.81-10.35 13.96-19.16 22.98-26.8-4.48-8.21-3.88-19.36 3.07-26.04 15.76-15.44 26.72-35.06 42.89-50.13 8.11-7.9 17.87-13.82 27.89-18.95 19.98-22.68 49.01-37.21 79.17-39.48 4.51-.47 9.33.14 13.52-1.96 8.46-3.92 17.29-7.33 26.58-8.6z"/><path fill="#FCB040" stroke="#FCB040" d="M1195.33 299.74c10.06 5.42 18.84 13.21 25.33 22.63 11.59 17.21 15.79 38.24 16.26 58.69-.31 2.9-1.62 5.55-2.42 8.33-6.29 20.05-9.53 40.9-11.87 61.74-.85 6.16 2.37 12.03 7.05 15.83-1.8 8.56-2.45 17.33-2.32 26.07.13 6.29-.56 12.62.44 18.87 1.03 5.99.84 12.13 2.14 18.08.89 3.31-.68 6.55-1.24 9.78-.81 3.16-.56 6.57-1.92 9.59-10.79-2.53-21.82-3.66-32.81-4.87-45.66-8.95-92.74-9.04-138.81-3.32-8.43 1.18-16.93 2.14-25.17 4.34-6.61 1.47-13.38 2-20.08 2.83-4.3.39-8.61 1.35-12.93.75-7-.85-14.03-1.49-20.95-2.84-10.15-2.63-20.6-3.83-30.99-5.15-44.54-5.12-89.97-4.76-134.07 3.89-11.22 1.21-22.46 2.46-33.48 4.94-.05-7.71-3.94-15.13-2.14-22.81.58-8.74 2.77-17.34 2.4-26.14.17-11.25.05-22.59-2.43-33.63 4.6-3.64 7.69-9.32 6.99-15.3-2.18-20.52-5.43-41.04-11.45-60.82-1.06-3.69-2.88-7.31-2.63-11.25.43-9.57 1.47-19.14 3.48-28.51 1.74-9.07 6.22-17.23 10.4-25.35 6.67-10.76 16.5-19.34 27.54-25.43 1.17 3.98 2.74 8 5.72 11.01 4.65 4.99 12.07 6.92 18.63 5.21 10.13-2.49 20.49-4.93 31-4.19 7.42-.06 15.65-.28 21.95 4.29 5.12 3.16 10.61 5.79 16.38 7.54 10.11 2.55 20.73-.02 30.1-4.06 2.07-.79 4.15-2.17 6.48-1.63 15.29 2.23 30.63 4.44 46.09 4.87 3.82.11 7.41-1.4 10.69-3.23.05-3.34.07-6.67.05-10 1.46.01 2.93.02 4.41.02 3.02 7.13 9.82 12.98 17.89 12.71 13.73-.41 27.38-2.17 40.97-4.14 3.3-.36 6.83-1.7 10.01-.08 9.1 3.9 19.07 6.3 29 5.03 8.44-.73 16.28-4.56 22.93-9.68 8.85-.2 17.68-1.03 26.47-2.1 7.62.6 15.1 2.27 22.5 4.14 5.3 1.33 11.19.51 15.68-2.71 4.71-3.2 7.47-8.49 8.73-13.94z"/><path fill="#39B54A" stroke="#39B54A" d="M1121.95 314.35c1.75-1.39 3.51-3.27 5.99-3.03 6.83-.14 13.68.21 20.48.93-8.79 1.07-17.62 1.9-26.47 2.1z"/><path stroke="#000" d="M1055.16 541.16c46.07-5.72 93.15-5.63 138.81 3.32 10.99 1.21 22.02 2.34 32.81 4.87 5.78.92 11.28 3.11 17 4.2 11.1-2.47 22.08-5.69 33.37-7.33.71 0 2.15-.02 2.86-.03-.01 1.82.01 3.65-.05 5.48-.42 3.26-1.4 6.41-2.65 9.44-4.85 9.69-14.23 16.28-24.18 19.97-4.05 1.58-8.53 2.24-12.13 4.81-4.68 3.22-8.35 8.28-8.91 14.04-.35 2.94-.6 5.91-1.4 8.78-4.78 16.67-10.51 33.75-21.73 47.31-3.35 4.22-7.97 7.21-13.09 8.81-22.54 8.56-46.68 13.22-70.83 12.68-25.94-.22-51.95-7.52-73.72-21.75-3.34-2.28-7.18-4.25-9.2-7.92-5.57-9.05-11.17-18.34-13.82-28.72-1.48-4.65.19-9.47-.69-14.17-1.25-7.85-3.52-15.78-8.28-22.26-3.37-4.69-8.5-8.35-14.29-9.14-9-.53-17.43 5.07-21.56 12.87-4 7.53-6.54 16.09-6.38 24.65 1.1 9.96-4.12 19.04-8.5 27.58-2.76 4.47-4.98 9.43-8.66 13.23-19.1 14.18-42.14 22.77-65.76 25.29-27.37 2.88-55.24-1.16-81.12-10.35-5.06-1.94-10.59-3.45-14.42-7.53-8.44-8.31-13.54-19.29-17.88-30.13-2.57-6.52-4.64-13.22-6.52-19.97-1.2-3.82-1.1-7.87-1.96-11.74-2.1-7.05-8.33-12.36-15.34-14.18-11.83-3.33-23.38-10.21-29.21-21.4-1.37-3.28-2.4-6.71-2.82-10.24-.11-1.64-.14-3.28-.16-4.91.79.01 2.37.02 3.17.02 9.22 1.42 18.3 3.66 27.34 5.98 2.72.62 5.57 1.87 8.38.87 4.58-1.36 9.16-2.72 13.85-3.67 11.02-2.48 22.26-3.73 33.48-4.94 44.1-8.65 89.53-9.01 134.07-3.89 10.39 1.32 20.84 2.52 30.99 5.15 6.92 1.35 13.95 1.99 20.95 2.84 4.32.6 8.63-.36 12.93-.75 6.7-.83 13.47-1.36 20.08-2.83 8.24-2.2 16.74-3.16 25.17-4.34m17.34 8.57c-10.42 2.48-19.17 10.43-23.07 20.35-3.02 7.22-2.59 15.18-3.36 22.82-.47 8.68-1.7 17.33-1.56 26.02.67 12.67 8.93 24.83 20.89 29.4 5.93 2.39 12.41 2.14 18.67 2.74 25.27 1.87 50.54 3.77 75.8 5.64 10.29.95 20.75-3.69 27.22-11.68 4.75-5.65 7.51-12.86 8.05-20.2.84-11.28 1.67-22.56 2.53-33.83.58-10.43-3.77-21.06-11.68-27.91-5.26-4.58-12.04-7.38-19.01-7.74-27.78-2.06-55.55-4.13-83.33-6.2-3.73-.26-7.51-.34-11.15.59m-166.92 1.09c-23.19 1.76-46.4 3.39-69.58 5.22-16.94 1.56-29.74 18.31-28.73 34.94.95 12.37 1.68 24.77 2.85 37.12 1.93 15.94 16.46 29.83 32.86 29.18 29.05-1.97 58.1-4.3 87.15-6.4 9.07-.52 17.75-5.25 23.2-12.5 5.32-6.82 7.81-15.69 7.09-24.29-.9-11.39-1.64-22.8-2.59-34.18-1.22-12.4-9.59-23.92-21.29-28.4-9.92-3.98-20.69-.92-30.96-.69z"/><path fill="#FCB040" stroke="#FCB040" d="M1072.5 549.73c3.64-.93 7.42-.85 11.15-.59 27.78 2.07 55.55 4.14 83.33 6.2 6.97.36 13.75 3.16 19.01 7.74 7.91 6.85 12.26 17.48 11.68 27.91-.86 11.27-1.69 22.55-2.53 33.83-.54 7.34-3.3 14.55-8.05 20.2-6.47 7.99-16.93 12.63-27.22 11.68-25.26-1.87-50.53-3.77-75.8-5.64-6.26-.6-12.74-.35-18.67-2.74-11.96-4.57-20.22-16.73-20.89-29.4-.14-8.69 1.09-17.34 1.56-26.02.77-7.64.34-15.6 3.36-22.82 3.9-9.92 12.65-17.87 23.07-20.35zM905.58 550.82c10.27-.23 21.04-3.29 30.96.69 11.7 4.48 20.07 16 21.29 28.4.95 11.38 1.69 22.79 2.59 34.18.72 8.6-1.77 17.47-7.09 24.29-5.45 7.25-14.13 11.98-23.2 12.5-29.05 2.1-58.1 4.43-87.15 6.4-16.4.65-30.93-13.24-32.86-29.18-1.17-12.35-1.9-24.75-2.85-37.12-1.01-16.63 11.79-33.38 28.73-34.94 23.18-1.83 46.39-3.46 69.58-5.22z"/><path fill="#FCB040" stroke="#FCB040" d="M705.92 560.88c4.16-6.2 11.59-9.61 18.99-9.25.42 3.53 1.45 6.96 2.82 10.24-4.86 9.01-2.67 21.54 5.57 27.86 2.29 1.84 5.25 2.6 7.5 4.49 3.52 4.35 4.13 10.63 8.76 14.19 6.87 5.87 17.18 4.94 24.68.78 1.88 6.75 3.95 13.45 6.52 19.97 4.34 10.84 9.44 21.82 17.88 30.13 3.83 4.08 9.36 5.59 14.42 7.53 25.88 9.19 53.75 13.23 81.12 10.35 23.62-2.52 46.66-11.11 65.76-25.29 3.68-3.8 5.9-8.76 8.66-13.23 4.38-8.54 9.6-17.62 8.5-27.58-.16-8.56 2.38-17.12 6.38-24.65 4.13-7.8 12.56-13.4 21.56-12.87 5.79.79 10.92 4.45 14.29 9.14 4.76 6.48 7.03 14.41 8.28 22.26.88 4.7-.79 9.52.69 14.17 2.65 10.38 8.25 19.67 13.82 28.72 2.02 3.67 5.86 5.64 9.2 7.92 21.77 14.23 47.78 21.53 73.72 21.75 24.15.54 48.29-4.12 70.83-12.68 5.12-1.6 9.74-4.59 13.09-8.81 11.22-13.56 16.95-30.64 21.73-47.31 4.44 2.21 9.34 3.78 14.37 3.27 5.76-.3 11.42-3.54 14.1-8.73 1.83-3.23 2.62-7.12 5.3-9.8 2.99-2.02 6.6-3.17 9.11-5.89 6.84-6.8 7.87-17.95 3.74-26.45 1.25-3.03 2.23-6.18 2.65-9.44 4.58-.05 9.35.57 13.23 3.21 7.35 4.53 10.63 13.2 12.32 21.28 1.45 6.53.41 13.19.23 19.78.39 21.48-2.66 43.24-10.66 63.26-1.72 4.55-4.52 8.66-5.64 13.43-2.21 8.9-7.74 16.47-13.51 23.4-5.1 6.21-11.45 11.45-15.46 18.53-4.32 6.84-6.46 14.93-11.66 21.24-6.27 7.61-14.99 13.05-24.35 16-6.82 24.23-14.56 48.23-24.11 71.54-1.24 3.11-2.95 6.17-3 9.62-1.33 44.7-2.88 89.4-4.2 134.1-6.96 37.39-20.09 73.32-34.81 108.27-15.69 36.9-33.87 72.69-53.44 107.66-1.24 2.33-2.94 4.51-3.37 7.18-2.9 3.5-6.69 6.18-9.28 9.95-1.61 2.39-3.87 4.22-5.93 6.2-12.06 11.97-24.26 23.94-34.44 37.59-3.43 4.99-7.6 10.24-7.21 16.66-1.76.81-3.82 1.49-4.66 3.42-2.62 4.51-1.48 9.87-1.72 14.83-3.59 9.08-10.85 16.43-19.21 21.3-5.31 3.22-11.49 4.45-17.05 7.1-6.46-2.52-13.32-4.29-19.04-8.38-6.93-4.68-12.79-11.18-16.14-18.86-.68-4.97.87-10.39-1.71-15.02-.85-2.13-2.96-3.1-4.86-4.03.31-5.95-3.33-10.96-6.55-15.6-9.4-12.77-20.58-24.09-31.78-35.26-3.41-3.55-7.44-6.52-10.21-10.63-2.28-3.41-6.13-5.42-8.21-8.96-3.14-7.23-7.54-13.82-11.13-20.83-20.29-37.38-39.05-75.66-54.58-115.27-10.3-26.73-19.63-53.99-25.08-82.16-.98-43.29-2.88-86.56-3.87-129.85 2.93 7.34 4.33 15.18 7.21 22.55 11.88 33.65 33.39 63.28 59.32 87.53 34.88 32.27 76.76 56.54 121.2 73.05 2.63 1.08 5.59 1.74 8.3.5 35.08-12.7 68.36-30.48 98.19-52.91 25.58-19.23 48.4-42.49 65.39-69.71 13.48-21.83 23.17-46.14 27.18-71.53-3.5 5.32-5.86 11.26-9.1 16.73-18.3 32.29-41.25 62.31-69.78 86.22-25.72 21.66-57.03 37.62-90.68 41.66-9.64 1.42-19.4.72-29.09 1.26-21.76.12-43.52-4.39-63.41-13.19-30.26-13.16-56-34.91-77.56-59.59-16.21-18.65-30.16-39.22-41.97-60.92-2.12-3.65-4-7.44-5.37-11.44-10.38-25.31-19.61-51.12-26.77-77.53-.56-1.22-.39-3.19-2-3.51-9.43-3.37-18.41-8.93-24.4-17.1-3.75-4.99-5.7-11-8.66-16.43-2.55-4.86-5.72-9.4-9.56-13.33-7.37-7.78-14.71-15.92-19.2-25.75-1.72-3.61-2.18-7.65-3.9-11.25-11.58-23-15.11-49.22-14.62-74.72-1.51-10.97.13-22.74 6.33-32.08m554.3 67.02c2.57 4.37 7.37-1.5 10.38 1.44 1.55 3.48.55 7.41-.1 11-1.95 7.82-3.65 16.05-8.65 22.61-3.69 5.49-9.36 9-14.32 13.19 1.47 2.08 4.41 2.05 6.48.91 9.88-6.03 17.81-15.34 21.47-26.4 2.03-6.42 4.58-12.87 4.78-19.68.45-4.48-3.8-8.54-8.24-8-4.26.34-8.9 1.61-11.8 4.93m-528.95-3.51c-4.61 1.69-6.26 7.15-5.97 11.64 1.31 14.56 7.64 29.19 19.32 38.37 2.45 1.82 5.06 4.74 8.45 3.63 1.57-.51 4.06-.82 3.98-2.98-3.3-3.08-7.3-5.35-10.34-8.72-5.86-5.66-9.03-13.42-10.86-21.22-1.04-4.66-2.99-9.28-2.69-14.12.33-2.54 3.23-1.15 4.85-1.18 2.4.42 6.56-.49 6.66-3.43-3.97-2.31-8.94-3.46-13.4-1.99m225.95 160.89c-16.37 5.97-32.16 13.45-47.4 21.87 3.25 4.4 7.79 7.6 11.94 11.1 21.06 16.4 47.03 28.34 74.19 27.48 8.99-.56 18.03.72 26.98-.56 13.06-1.57 25.72-5.8 37.41-11.79 13.04-6.91 25.61-15.32 35.68-26.17-9.17-5.08-18.59-9.71-28.12-14.07-15.36-6.57-31.15-13.25-48-14.53-6.14-.6-12.5.92-16.98 5.33-3.14-2.61-6.75-4.86-10.93-5.11-11.95-1.16-23.6 2.7-34.77 6.45z"/><path fill="#603813" stroke="#603813" d="M1277.31 561.11c4.13 8.5 3.1 19.65-3.74 26.45-2.51 2.72-6.12 3.87-9.11 5.89-2.68 2.68-3.47 6.57-5.3 9.8-2.68 5.19-8.34 8.43-14.1 8.73-5.03.51-9.93-1.06-14.37-3.27.8-2.87 1.05-5.84 1.4-8.78.56-5.76 4.23-10.82 8.91-14.04 3.6-2.57 8.08-3.23 12.13-4.81 9.95-3.69 19.33-10.28 24.18-19.97zM733.3 589.73c-8.24-6.32-10.43-18.85-5.57-27.86 5.83 11.19 17.38 18.07 29.21 21.4 7.01 1.82 13.24 7.13 15.34 14.18.86 3.87.76 7.92 1.96 11.74-7.5 4.16-17.81 5.09-24.68-.78-4.63-3.56-5.24-9.84-8.76-14.19-2.25-1.89-5.21-2.65-7.5-4.49z"/><path fill="#F7941E" stroke="#F7941E" d="M1260.22 627.9c2.9-3.32 7.54-4.59 11.8-4.93 4.44-.54 8.69 3.52 8.24 8-.2 6.81-2.75 13.26-4.78 19.68-3.66 11.06-11.59 20.37-21.47 26.4-2.07 1.14-5.01 1.17-6.48-.91 4.96-4.19 10.63-7.7 14.32-13.19 5-6.56 6.7-14.79 8.65-22.61.65-3.59 1.65-7.52.1-11-3.01-2.94-7.81 2.93-10.38-1.44zM731.27 624.39c4.46-1.47 9.43-.32 13.4 1.99-.1 2.94-4.26 3.85-6.66 3.43-1.62.03-4.52-1.36-4.85 1.18-.3 4.84 1.65 9.46 2.69 14.12 1.83 7.8 5 15.56 10.86 21.22 3.04 3.37 7.04 5.64 10.34 8.72.08 2.16-2.41 2.47-3.98 2.98-3.39 1.11-6-1.81-8.45-3.63-11.68-9.18-18.01-23.81-19.32-38.37-.29-4.49 1.36-9.95 5.97-11.64zM957.22 785.28c11.17-3.75 22.82-7.61 34.77-6.45 4.18.25 7.79 2.5 10.93 5.11 4.48-4.41 10.84-5.93 16.98-5.33 16.85 1.28 32.64 7.96 48 14.53 9.53 4.36 18.95 8.99 28.12 14.07-10.07 10.85-22.64 19.26-35.68 26.17-11.69 5.99-24.35 10.22-37.41 11.79-8.95 1.28-17.99 0-26.98.56-27.16.86-53.13-11.08-74.19-27.48-4.15-3.5-8.69-6.7-11.94-11.1 15.24-8.42 31.03-15.9 47.4-21.87z"/><path fill="#F7941E" stroke="#F7941E" d="M1186.56 848.58c3.24-5.47 5.6-11.41 9.1-16.73-4.01 25.39-13.7 49.7-27.18 71.53-16.99 27.22-39.81 50.48-65.39 69.71-29.83 22.43-63.11 40.21-98.19 52.91-2.71 1.24-5.67.58-8.3-.5-44.44-16.51-86.32-40.78-121.2-73.05-25.93-24.25-47.44-53.88-59.32-87.53-2.88-7.37-4.28-15.21-7.21-22.55-.13-3.51-.75-6.98-1.4-10.41l1.23.62c1.37 4 3.25 7.79 5.37 11.44 11.81 21.7 25.76 42.27 41.97 60.92 21.56 24.68 47.3 46.43 77.56 59.59 19.89 8.8 41.65 13.31 63.41 13.19 9.69-.54 19.45.16 29.09-1.26 33.65-4.04 64.96-20 90.68-41.66 28.53-23.91 51.48-53.93 69.78-86.22z"/><path fill="#25AAE1" stroke="#25AAE1" d="M753.49 1053.94c17.68-37.83 36.36-75.19 55.37-112.36.28 10.31 1.71 20.56 3.88 30.64 5.45 28.17 14.78 55.43 25.08 82.16 15.53 39.61 34.29 77.89 54.58 115.27 3.59 7.01 7.99 13.6 11.13 20.83-13.95 11.67-27.27 24.11-40.88 36.18-28.72 26.04-57.62 51.92-85.15 79.22-6.97 6.91-14.08 13.76-19.81 21.77-6.42-19.71-11.26-39.9-16.33-59.99-7.46-31.25-14.41-62.73-17.89-94.72-1.04-12.01-2.31-24.29.18-36.21 1.44-5.45.53-11.26 2.57-16.59 7.18-22.81 17.44-44.46 27.27-66.2zM1196.14 941.38c19.17 37.09 37.65 74.54 55.49 112.29 8.27 18.48 16.85 36.86 23.76 55.91 2.04 6.08 4.63 12.16 4.91 18.67 0 6.01 2.27 11.74 2.27 17.77.66 18.8-2.26 37.49-5.24 56-3.85 22.52-8.82 44.83-14.2 67.03-4.86 19.46-9.78 38.93-15.77 58.08-6.02-7.83-12.85-14.97-19.92-21.84-29.04-28.58-59.35-55.82-89.59-83.12-12.13-10.64-23.79-21.84-36.32-32 .43-2.67 2.13-4.85 3.37-7.18 19.57-34.97 37.75-70.76 53.44-107.66 14.72-34.95 27.85-70.88 34.81-108.27 1.59-8.48 2.65-17.06 2.99-25.68z"/><path fill="#0F75BC" stroke="#0F75BC" d="M553.02 1169.11c66.08-39.66 132.95-78.01 200.47-115.17-9.83 21.74-20.09 43.39-27.27 66.2-2.04 5.33-1.13 11.14-2.57 16.59-2.49 11.92-1.22 24.2-.18 36.21 3.48 31.99 10.43 63.47 17.89 94.72 5.07 20.09 9.91 40.28 16.33 59.99 5.73-8.01 12.84-14.86 19.81-21.77 15.38 22.44 30.61 45 46.22 67.28 26.69-60.86 53.36-121.72 79.81-182.68 2.08 3.54 5.93 5.55 8.21 8.96 2.77 4.11 6.8 7.08 10.21 10.63 11.2 11.17 22.38 22.49 31.78 35.26 3.22 4.64 6.86 9.65 6.55 15.6 1.9.93 4.01 1.9 4.86 4.03 2.58 4.63 1.03 10.05 1.71 15.02 3.35 7.68 9.21 14.18 16.14 18.86 5.72 4.09 12.58 5.86 19.04 8.38 5.56-2.65 11.74-3.88 17.05-7.1 8.36-4.87 15.62-12.22 19.21-21.3.24-4.96-.9-10.32 1.72-14.83.84-1.93 2.9-2.61 4.66-3.42-.39-6.42 3.78-11.67 7.21-16.66 10.18-13.65 22.38-25.62 34.44-37.59 2.06-1.98 4.32-3.81 5.93-6.2 2.59-3.77 6.38-6.45 9.28-9.95 24.2 56.08 48.89 111.95 73.27 167.95 2.23 4.78 3.93 9.82 6.67 14.37 15.34-22.39 30.79-44.71 45.97-67.2 7.07 6.87 13.9 14.01 19.92 21.84 5.99-19.15 10.91-38.62 15.77-58.08 5.38-22.2 10.35-44.51 14.2-67.03 2.98-18.51 5.9-37.2 5.24-56 0-6.03-2.27-11.76-2.27-17.77-.28-6.51-2.87-12.59-4.91-18.67-6.91-19.05-15.49-37.43-23.76-55.91a97.5 97.5 0 0 1 6.43 3.3c70.37 39.13 140.3 79.07 209.12 120.89 30.05 18.36 59.95 37.01 89.02 56.9 16.03 11.13 32.1 22.35 46.58 35.48 5.08 5.04 11.12 10.06 12.79 17.37 1.66 7.59 2.3 15.35 2.99 23.07 2.71 35.01 3.33 70.14 4.11 105.24.86 52.68 1.19 105.37 1.08 158.07-.15 19.33.34 38.68-.31 58.01H381.25c.03-88.68-.49-177.37 2.29-266.01.84-22.36 1.56-44.76 4.05-67.01.97-6.41 1.22-13.51 5.59-18.71 5.49-6.83 12.19-12.55 18.93-18.1 13.2-10.64 27.08-20.41 41.09-29.95 32.61-22.05 66.13-42.74 99.82-63.11z"/><path fill="#283891" stroke="#283891" d="M862.65 1226.66c13.61-12.07 26.93-24.51 40.88-36.18-26.45 60.96-53.12 121.82-79.81 182.68-15.61-22.28-30.84-44.84-46.22-67.28 27.53-27.3 56.43-53.18 85.15-79.22zM1101.53 1190.17c12.53 10.16 24.19 21.36 36.32 32 30.24 27.3 60.55 54.54 89.59 83.12-15.18 22.49-30.63 44.81-45.97 67.2-2.74-4.55-4.44-9.59-6.67-14.37-24.38-56-49.07-111.87-73.27-167.95z"/></svg>)
}


export function Woman({css}: Props){
    return(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1268.079 1646.727"  stroke="currentColor" className={css}>
        <path fill="#0F0F0E" stroke="#0F0F0E" d="M469.773 107.349c31.63-46.791 85.349-77.447 141.349-83.026 66.122-6.824 135.314 23.168 174.473 77.032-7.902-1.576-15.701-3.547-23.292-6.181-32.605-10.018-66.454-15.846-100.49-17.962-25.47-2.696-51.002 0-76.389 2.116-33.082 4.48-66.06 11.304-97.337 23.188-5.911 2.261-12.071 3.775-18.314 4.833z"/><path fill="#020202" stroke="#020202" d="M585.424 79.328c25.387-2.116 50.919-4.812 76.389-2.116 34.036 2.116 67.885 7.944 100.49 17.962 7.591 2.634 15.39 4.604 23.292 6.181 6.098 4.708 13.606 6.907 20.596 9.935 53.449 22.711 102.087 56.498 142.324 98.353 49.28 51.209 85.764 114.718 104.742 183.246 24.578 87.796 20.533 183.308-11.345 268.74-3.256-4.708-6.907-9.105-10.702-13.357-2.053 11.242-2.551 23.665-9.52 33.227-3.464 4.625-10.122 2.904-13.896-.311-7.757-6.388-12.693-15.452-17.153-24.288-6.782-14.539-12.175-29.888-14.353-45.837-1.721-15.431.892-30.883 1.576-46.294-27.461 6.409-54.673 13.917-82.383 19.227-99.556 20.202-201.415 28.415-302.921 25.262-106.36-3.319-212.823-16.821-315.346-45.858 3.028 14.436 7.529 28.975 5.994 43.888-1.39 15.597-10.412 28.871-17.215 42.54-6.098 10.848-11.345 22.587-20.243 31.485-2.945 3.36-9.105 4.21-11.428-.311-5.87-9.292-6.16-20.699-8.483-31.153-5.704-20.637-12.154-41.129-15.618-62.306-19.87-107.708 2.738-222.716 63.094-314.266 44.987-69.15 110.113-125.068 185.465-158.668 4.024-1.804 8.151-3.754 10.993-7.259 6.243-1.058 12.403-2.572 18.314-4.833 31.277-11.886 64.255-18.709 97.337-23.189z"/><path fill="#D8AA8B" stroke="#D8AA8B" d="M277.214 563.4c102.522 29.037 208.985 42.54 315.345 45.858 101.506 3.153 203.365-5.061 302.921-25.262 27.71-5.31 54.922-12.818 82.383-19.227-.684 15.411-3.298 30.862-1.576 46.294 2.178 15.95 7.57 31.298 14.353 45.837 4.459 8.836 9.396 17.899 17.153 24.288 3.775 3.215 10.433 4.936 13.896.311 6.969-9.562 7.467-21.985 9.52-33.227 3.796 4.252 7.446 8.649 10.702 13.357 6.886 15.348 10.495 32.252 9.375 49.114-1.556 31.692-16.427 60.937-34.14 86.573-16.033 22.255-36.794 45.008-65.479 48.866-10.868 35.26-16.987 72.593-35.882 104.824-15.493 28.27-39.014 51.209-64.878 70.063-30.966 23.251-65.562 41.191-101.029 56.478-36.525 15.307-74.356 27.44-112.934 36.421-9.271 2.219-18.542-.913-27.44-3.236-9.105-2.593-18.48-4.231-27.523-7.073-11.968-5.538-24.848-8.628-37.188-13.191-42.892-15.328-84.602-34.637-122.392-60.231-7.861-5.227-15.058-11.511-23.416-15.991-8.649-7.197-17.07-14.705-25.055-22.628-21.446-21.633-37.334-48.534-46.916-77.384-7.073-22.4-12.984-45.132-19.268-67.761-14.602-2.447-28.311-9.002-39.138-19.123-23.956-21.55-41.482-49.674-53.076-79.562-11.325-31.692-11.988-70.727 10.308-97.939 2.323 10.453 2.613 21.861 8.483 31.153 2.323 4.521 8.483 3.671 11.428.311 8.898-8.898 14.145-20.637 20.243-31.485 6.803-13.668 15.825-26.942 17.215-42.54 1.534-14.913-2.967-29.453-5.995-43.888z"/><path fill="#020202" stroke="#020202" d="M398.984 1014.245c8.359 4.48 15.556 10.765 23.416 15.991 37.79 25.594 79.5 44.904 122.392 60.231 12.341 4.563 25.221 7.653 37.188 13.191-.311 12.839 1.908 25.573 2.427 38.391 1.348 26.279 1.493 52.744-1.95 78.898-3.194 29.473-18.293 55.876-34.139 80.33-37.106 54.88-93.687 96.549-157.652 114.303-43.183 12.901-89.559 18.853-128.365 43.286-24.723 16.074-45.609 40.134-53.159 69.109-3.464 12.486-1.97 25.511-.083 38.122-42.519-38.433-68.86-93.376-76.14-149.915-1.12-9.79-1.514-19.621-1.452-29.452 0-70.021 31.796-139.462 84.996-185.009 29.971-26.092 64.546-45.983 96.507-69.42 22.877-16.842 44.821-35.757 60.978-59.34 11.326-18.147 17.839-38.722 25.036-58.716z"/><path fill="#C1977A" stroke="#C1977A" d="M636.945 1113.967c38.578-8.981 76.409-21.114 112.934-36.421.166 15.929 1.141 31.837 1.079 47.787-6.969 1.473-13.855 3.277-20.679 5.289-47.269 13.461-97.109 16.551-145.871 11.428-.518-12.818-2.738-25.553-2.427-38.391 9.043 2.841 18.418 4.48 27.523 7.073 8.898 2.322 18.169 5.454 27.441 3.235z"/><path fill="#D8AA8B" stroke="#D8AA8B" d="M730.279 1130.622c6.824-2.012 13.71-3.816 20.679-5.289 1.473 32.688 2.302 65.521 7.073 97.938 2.157 13.959 7.529 28.353 18.791 37.52 9.25 7.487 21.259 9.707 32.314 13.233 79.604 24.848 159.207 49.695 238.832 74.46 30.199 9.043 59.92 21.965 84.229 42.415-12.133-.145-24.64.913-35.633 6.492-14.747 7.363-27.565 17.879-40.549 27.896-49.612 40.611-106.442 72.967-168.146 91.053-47.393 14.29-96.777 20.202-145.912 24.744-39.014 4.065-78.38 5.04-117.539 2.551-82.362-5.33-162.733-25.823-241.798-48.451-40.258-11.594-80.329-23.79-120.318-36.317 38.806-24.433 85.183-30.385 128.365-43.286 63.965-17.754 120.546-59.423 157.652-114.303 15.846-24.454 30.945-50.857 34.139-80.33 3.443-26.154 3.298-52.62 1.95-78.898 48.762 5.123 98.602 2.033 145.871-11.428zM107.782 1407.285c7.467-7.322 15.369-14.208 23.686-20.554-.062 9.831.332 19.662 1.452 29.452-8.836-1.514-17.298-4.584-25.138-8.898z"/><path fill="#CE57B5" stroke="#CE57B5" d="M1096.563 1397.391c10.993-5.579 23.499-6.637 35.633-6.492 8.483 3.07 17.319 5.289 25.304 9.562 16.676 8.815 30.531 22.047 42.602 36.359 24.184 29.971 40.486 66.143 47.372 104.016 5.019 27.606 3.07 56.789-8.69 82.528H19.446c-5.766-40.258 6.699-80.371 22.628-116.896 16.178-36.4 37.168-71.121 65.707-99.183 7.84 4.314 16.302 7.384 25.138 8.898 7.28 56.54 33.621 111.482 76.14 149.915-1.887-12.61-3.381-25.636.083-38.122 7.55-28.975 28.436-53.034 53.159-69.109 39.988 12.527 80.06 24.723 120.318 36.317 79.064 22.628 159.435 43.12 241.798 48.451 39.159 2.489 78.525 1.514 117.539-2.551 49.135-4.542 98.519-10.453 145.912-24.744 61.704-18.086 118.534-50.442 168.146-91.053 12.984-10.017 25.802-20.533 40.549-27.896z"/></svg>)
}

export function Mask({css}: Props){
    return(<svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297.991 297.991"  className={css}>
    <g>
      <path d="m297.553,74.917c0,0-26.938,7.798-88.522,7.798-24.04,0-45.555,9.563-60.035,24.627-14.481-15.064-35.995-24.627-60.035-24.627-61.584,0-88.522-7.798-88.522-7.798s-4.253,57.773 13.746,100.557c11.491,27.314 40.059,47.6 74.776,47.6 24.04,0 45.555-9.563 60.035-24.627 14.48,15.064 35.995,24.627 60.035,24.627 34.718,0 63.285-20.285 74.776-47.6 17.999-42.783 13.746-100.557 13.746-100.557zm-214.807,90.775c-18.133,0-32.833-16.833-32.833-16.833s14.7-15.833 32.833-15.833c18.133,0 32.833,15.833 32.833,15.833s-14.701,16.833-32.833,16.833zm132.5,0c-18.133,0-32.833-16.833-32.833-16.833s14.7-15.833 32.833-15.833c18.133,0 32.833,15.833 32.833,15.833s-14.701,16.833-32.833,16.833z"/>
    </g>
  </svg>)
}


export function Check({css}: Props){
    return(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>)
}

export function X({css}: Props){
    return(<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={css}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>)
}
