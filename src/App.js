import './App.css';
import{io} from 'socket.io-client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
function App() {
// const socket = io('http://localhost:8000');
const router = createBrowserRouter([
  {path:'/', element:<LoginPage />},
  {path:'/signUp', element:<SignupPage />}
])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
