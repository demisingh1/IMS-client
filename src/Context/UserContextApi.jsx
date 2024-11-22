import { createContext, useContext, useReducer } from "react";
import {reducer} from '../Reducer'

const UserContext = createContext()

const getuser = ()=>{
    let user = localStorage.getItem('user')
    if(user){
    return JSON.stringify(localStorage.get('user'))
}
else{
    return []
}
 }
 
let initialState = {
    user: getuser(),
    loading:false 
}


export const UserProvider = ({children})=>{
    const[state, dispatch] = useReducer(reducer, initialState)
    const {user, loading} = state;

    // const getloginFormValues = (e)=>{
    //     const value = e.target.value;
    //     const name = e.target.name;
    //     console.log(value, name);   
    // }

    return (
        <UserContext.Provider value= {{user,loading, dispatch}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = ()=>{
    return useContext(UserContext);
}