import { useContext } from "react"
import { UserContext } from "./UserContext"


export const UserWithContext = () => {
  const userContext = useContext(UserContext)

  const handleLogin = () => {
    userContext.setUser({
      name: 'Vishwas',
      email:'vishwas@example.com'
    })
  }
  const handleLogout = () => {
    userContext.setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}> Login </button>
      <button onClick={handleLogout}> Logout </button>
      <div> User name is {userContext.user?.name}</div>
      <div> User email is {userContext.user?.email}</div>
    </div>
  )
}