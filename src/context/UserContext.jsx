 import { createContext, useContext, useState } from "react"
// import { handlerLoginUser } from '../middleware/userHandlers'


export const UserContext = createContext()

const UserProvider = ({children}) =>{

    const [user, setUser] = useState(false)

    // const checkUser = async () => {

    //     const storedToken = localStorage.getItem("authToken")

    //     if (storedToken) {
    //         const userData = await handlerLoginUser.checkUser(storedToken);
    //         setUser(userData);
    //     }

    return(
        <UserContext.Provider value = {{user, setUser}}>
        {children}
        </UserContext.Provider>
    )
}


export default UserProvider

export const useUserContext = () => useContext(UserContext);