import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedPage({children}) {
    // const user = null || undefined
    const user = true
if(!user){
    return <Navigate to="/" />
}else{
    return <Outlet />
}
}

export default ProtectedPage