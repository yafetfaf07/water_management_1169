import React from "react";
interface User {
    id:string;
    user_name:string;
}

interface UserContext {
    user:User | null;
    setuser:(user: User | null) => void
}
const userContext = React.createContext<UserContext | undefined>(undefined);

export default userContext