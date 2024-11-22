import { LOGIN, USER } from "./actions"

export  const reducer = (state, action)=>{
    if(action.type === LOGIN){
        console.log("Login R hit");
        
        return{...state,  loading:true }
    }
    if(action.type === USER){
        return {...state , user: localStorage.setItem('user' , JSON.parse(action.payload))}
    }
}