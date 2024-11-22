import React, { useEffect } from 'react'
import { useUser } from '../Context/UserContextApi'
import axios from 'axios'
import LoadingPage from '../Components/LoadingPage'
import { useLoaderData } from 'react-router-dom'

// add loader function. OR use the use effect with loading

// export const loader = async ()=>{
//   console.log("loader function hit");
  
//   try {
//     const res = await axios.get('http://localhost:8000/dashboard')
//     console.log(res); 
//     return res;
//   } catch (error) {
//     console.log(error);
//     return error
//   }
// }

function DashboardPage() {
  const{user, loading} = useUser()
  // const{res} = useLoaderData()
  // console.log(res);
  const fetchUser = async()=>{
    try {
          const res = await axios.get('http://localhost:8000/dashboard', { withCredentials : true }) // wih credentials properties is crucial
          console.log(res);                                                                         // withCredentials : true to save the cookies in browser
          // return res;
        } catch (error) {
          console.log(error);
          return error
        }
  }
  useEffect(()=>{
    fetchUser()
  },[])
  
  if(loading === true){
    return<LoadingPage />
  }
  else{
    return (
      <div>DashboardPage</div>
    )
  }
  
}

export default DashboardPage