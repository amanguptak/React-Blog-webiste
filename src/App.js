import React, { useContext } from 'react'
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import TopBar from './components/TopBar/TopBar'
import Home from './Pages/home/Home'
import Register from './Pages/register/Register'
import Login from './Pages/login/Login'
import Settings from './Pages/settings/Setting'
import Single from './Pages/single/Single'
import Write from './Pages/write/Write'
import { Context } from './context/Context';



function App() {
  const {user}= useContext(Context)
  return (
    <div className="App">
      <BrowserRouter>
      <TopBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={user ? <Home/> :<Register/>}></Route>
        <Route path="/login" element={user ? <Home/> :<Login/>}></Route>
        <Route path="/settings" element={user ? <Settings/> : <Register/>}></Route>
        {/* dont enter path with space */}
        <Route path="/post/:postId" element={<Single/>}></Route>
        <Route path="/write" element={user ? <Write/> : <Register/>}></Route>
      </Routes>
      </BrowserRouter>

     
    
    </div>
  );
}

export default App;
