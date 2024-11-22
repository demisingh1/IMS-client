import './App.css';
import{io} from 'socket.io-client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import DashboardPage from './Pages/DashboardPage';
import ProtectedPage from './Pages/ProtectedPage';
import { loader as dashLoader } from './Pages/DashboardPage';
function App() {
// const socket = io('http://localhost:8000');
const router = createBrowserRouter([
  {path:'/', element:<LoginPage />},
  {path:'/signUp', element:<SignupPage />},
  // {path:'/dashboard', element: <ProtectedPage><DashboardPage /></ProtectedPage>}
  {element:<ProtectedPage />,
    children:[
      {
        path:'dashboard',
        element:<DashboardPage />,
        // loader:dashLoader
      }
    ]
  }
])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
