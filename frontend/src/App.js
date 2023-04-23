
import { useEffect, useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from 'react-router-dom'
import Register from './User/pages/auth/Register';
import GameIntro from './User/pages/GameIntro';
import GameProblem from './User/pages/GameProblem';
import GameResult from './User/pages/GameResult';
import Login from './User/pages/auth/login';
import Clue from './User/pages/Clue';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";        
//core
import "primereact/resources/primereact.min.css";
//icons
import "primeicons/primeicons.css";                                         
import Header from './components/Header';
import Dashboard from './Admin/pages/Dashboard';
import { ProtectedRoute } from './components/ProtectedRoutes';
import Home from './User/pages/Home';
import parseJwt from './utils/authUtils';
  
import { useDispatch } from 'react-redux'
import { setUser } from './reducer/auth.slice';


function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname
    const token = localStorage.getItem('token')
    if (token) {
      const user = parseJwt(token)
      dispatch(setUser(user))
      if(user.role=='admin'){
        navigate('/admin')
      }
      else{
      navigate(currentPath)
      }
    }
  }, [])

  return (
    <div className='App'>
        <Routes>
            <Route
              path='/'
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            >
           <Route path="/gameIntro" element={<GameIntro/>}/>
           <Route path="/gameProblem" element={<GameProblem/>}/>
           <Route path ="/gameResult" element={<GameResult/>}/>
           <Route path ="/clue" element={<Clue/>}/>
           <Route path ="/admin" element={<Dashboard/>}/> 
           </Route>
           
           <Route exact path="/register" element={<Register/>}/>
           <Route exact path="/login" element={<Login/>}/>            
        </Routes>
     </div>
  );
}

export default App;