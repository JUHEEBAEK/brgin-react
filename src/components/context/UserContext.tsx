import React, { useState, createContext } from 'react'

type AuthUser = {
  name: string
  email: string
}

type UserContextProviderProps = {
  children: React.ReactNode
}

type userType = AuthUser | null // useState 와 동일하게 타입을 맞춰준다

type UserContextType = {
  user: userType 
  setUser: React.Dispatch<React.SetStateAction<userType>> 
}


// props -> react context
// component에서 interface로 변환된다 (useContext를 사용해서)
export const UserContext = createContext({} as UserContextType);

// App.tsx에서 Outer Tag로 활용된다
export const UserContextProvider = ({children}:UserContextProviderProps) => {
  const [user, setUser] = useState<userType>(null)
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}
