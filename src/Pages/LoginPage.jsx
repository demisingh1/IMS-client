import React from 'react'
import login from '../images/login.jpg'
import '../App.css'
import{io} from 'socket.io-client'
import {Box, Button, Grid2, Link, TextField} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import MailIcon from '@mui/icons-material/Mail';
function LoginPage() {
    const socket = io('http://localhost:8000');
  return (
    <Box sx={{width:"100%", flex:1}}>
    <Grid2 container spacing={2} sx={{width:"80%" , margin:"auto"}} >
      <Grid2 size = {6}>
        <Box sx={{display:'flex', flexDirection:'column', width:'100%', height:'100vh', alignItems:'center', justifyContent:'center', gap:4}} >
          <h2>Login Form</h2>
          <Box sx={{display:"flex", alignItems:'center', justifyContent:'center'}}>
            <MailIcon fontSize ='large'  />
          <TextField label = "Email" type = "email" variant='outlined' size='small'/>
          </Box>
          <Box sx={{display:"flex", alignItems:'center', justifyContent:'center'}} >
            <LockIcon fontSize='large' />
          <TextField label = "Password" type='password' variant='outlined' size='small' />  
          </Box>
          <Button variant='contained'>Login</Button>
          <Box sx={{display:'flex', flexDirection:'row' ,gap:2 ,alignItems:'center', justifyContent:'center'}}>
            <h4>Do not have account</h4>
            <span> <Link href = "#">Sign Up</Link> here</span>
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