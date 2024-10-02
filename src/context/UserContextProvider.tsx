import { ReactNode, useState } from "react"
import UserContext from "./UserContext"
interface User {
  id:string;
  user_name:string;
}
const UserContextProvider: React.FC<{children: ReactNode}> =({children}) => {
  const[user,setuser] = useState<User | null>(null)
  return (
    <UserContext.Provider value={{user,setuser}}>
    {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;