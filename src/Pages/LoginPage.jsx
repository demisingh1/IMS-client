import React, { useState } from 'react'
import login from '../images/login.jpg'
import {Link, useNavigate} from 'react-router-dom'
import '../App.css'
import{io} from 'socket.io-client'
import {Box, Button, Grid2,TextField} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
import { useUser } from '../Context/UserContextApi'
import axios from 'axios'
// import { Navigate } from 'react-router-dom'
import { LOGIN } from '../actions'
function LoginPage() {
 const{dispatch} = useUser()
    // const socket = io('http://localhost:8000');
    const navigate = useNavigate();
    const[vals , setvals] = useState({email:'', password:''})

    const getloginFormValues = (e)=>{
      const value = e.target.value;
      const name = e.target.name;
      console.log(value, name);   
      setvals({...vals , [name]:value})
  }
  const loginHandler = async(e)=>{
    console.log(vals);
    e.preventDefault();
    
    try {
      await axios.post(`http://localhost:8000/login`,vals,{withCredentials: true})
      .then((res)=> {
        console.log(res.data.message);
        
        dispatch({type:LOGIN })
      navigate('/dashboard')
    }
      )
      .catch((error)=> console.log(error))  
      
    } catch (error) {
      
    }
 
  }
  return (
    <Box sx={{width:"100%", flex:1}}>
    <Grid2 container spacing={2} sx={{width:"80%" , margin:"auto"}} >
      <Grid2 size = {6}>
        <Box sx={{display:'flex', flexDirection:'column', width:'100%', height:'100vh', alignItems:'center', justifyContent:'center', gap:4}} >
          <h2>Login Form</h2>
          <Box sx={{display:"flex", alignItems:'center', justifyContent:'center'}}>
            <MailIcon fontSize ='large'  />
          <TextField label = "Email" name='email' value={vals.email} type = "email" variant='outlined' size='small' onChange={getloginFormValues}/>
          </Box>
          <Box sx={{display:"flex", alignItems:'center', justifyContent:'center'}} >
            <LockIcon fontSize='large' />
          <TextField label = "Password" name='password' value={vals.password} type='password' variant='outlined' size='small'onChange={getloginFormValues} />  
          </Box>
          <Button variant='contained' onClick={ loginHandler} >Login</Button>
          <Box sx={{display:'flex', flexDirection:'row' ,gap:2 ,alignItems:'center', justifyContent:'center'}}>
            <h4>Do not have account</h4>
            <Link to='/signUp' >Sign Up</Link> <span>  here</span>
          </Box>
        </Box>
      </Grid2>
      <Grid2 size = {6} sx={{display:"flex", alignItems:'center', justifyContent:'center'}} >
        <img src= {login} style={{height:'500px', width:'500px'}}/>
      </Grid2>
    </Grid2>
    </Box>
  )
}

export default LoginPage