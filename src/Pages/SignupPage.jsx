import { Box, Button, Grid2, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import login from '../images/login.jpg'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

function SignupPage() {
  const[values, setvalue] = useState( {username:'', password:'', email:'', role:""})
  const FormHandler = (e)=>{
    let val = e.target.value
    let name = e.target.name
    console.log(val, name, "from signup page");
    setvalue({ ...values, [name]:val })
    // console.log(values); 
  }
  const SubmitHandler = async()=>{
    console.log(values);
       await axios.post(`http://localhost:8000/signup`,values)
        .then(()=> toast("Registered") )
        .catch((error)=> toast(error))
  }

  return (
    <Box sx={{width:'100%'}}>
      <ToastContainer />
      {/* <FormControl> */}
      <Grid2 container spacing={2} >
        <Grid2 size = {6} sx={{height:'100vh', display:'flex', justifyContent:'center',alignItems:'center'}}>
        <Box sx={{display:'flex', gap:'15px' ,flexDirection:'column', alignItems:'center', justifyContent:'center' ,
          width:"400px", height:"550px" , padding:'10px 0px 10px 0px' ,
          boxShadow:'0px 2px 15px 3px rgba(0,0,0,2)'}}>
        <h2 style={{textTransform:'uppercase'}}>Create User</h2>
        <Box sx={{display:'flex', width:'80%', gap:2}}>
          <TextField label ='First Name' variant='outlined' size='small' sx={{width:'100%'}}  />
          <TextField label ='Last Name' variant='outlined' size='small' sx={{width:'100%'}}  />
        </Box>
        <Box>
        <TextField label ="username" value={values.username} type='Text' name='username' variant='outlined' size='small' onChange={FormHandler} />
        </Box>
        <Box>
          <TextField label ="Password" type='Password' name='password' variant='outlined' size='small' onChange={FormHandler} />
        </Box>
        <Box>
          <TextField label = 'Email' type='Email' name='email' variant='outlined' size='small' onChange={FormHandler} />
        </Box>
        <Box sx={{width:'150px'}}>
        <TextField  value={values.role} label='role' name='role' variant='outlined' onChange={FormHandler} style={{width:'100%'}} select >
          {/* <Select label = 'Role' labelId='small-label' value= {values.role} name='role' size='small'onChange={FormHandler} > */}
            <MenuItem value = {'admin'} >Admin</MenuItem>
            <MenuItem value = {'user'} >User</MenuItem>
            <MenuItem value = {'manager'} >Manager</MenuItem>
          {/* </Select> */}
          </TextField>
        </Box>
        <Box>
          <Button variant='contained' onClick={SubmitHandler} >Create Account</Button>
          <h3>Already Has Account</h3><span><Link to='/' >Click Here</Link></span>
        </Box>
        
        </Box>
        </Grid2>
        <Grid2 size = {6} sx={{display:"flex", justifyContent:'center', alignItems:'center'}}>
          <img src={login} alt="Sign up Image" width={600} height={600}/>
        </Grid2>
      </Grid2>
      {/* </FormControl> */}
    </Box>
  )
}

export default SignupPage