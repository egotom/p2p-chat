import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import {UserProvider} from './components/userCtx'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
<React.StrictMode>
    <UserProvider>
        <App />
    </UserProvider>
</React.StrictMode>)
