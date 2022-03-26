import { useState } from "react"

type AuthUser = {
  name: string
  email: string
}

export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null) 
  const handleLogin = () => {
    setUser({
      name: 'Vishwas',
      email: 'vishwas@example.com'
    })
  }
  const handelLogout = () => {
    setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button> 
      <button onClick={handelLogout}>Logout</button> 
      <div> User name is {user?.name} </div>
      <div> User email is {user?.email} </div>
    </div>
  )
}