import { createContext, useContext, useState } from 'react'

export type userContext = {
    user: any
    setUser:Function
}
export const UserCtx = createContext<userContext>({
    user: null,
    setUser: () => {},
})

export function UserProvider({children}:any) {
    const [user, setUser] = useState<any>(null)
    return (
      <UserCtx.Provider value={{ user, setUser }}>
        {children}
      </UserCtx.Provider>
    )
}

export const useUser = ():userContext => useContext(UserCtx)