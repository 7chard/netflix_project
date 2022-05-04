import './App.css';
import React from 'react';
import { Route, Routes, Switch } from 'react-router-dom';
import Home from './pages/home';
import Browse from './pages/browse';
import Signin from './pages/signin';
import Signup from './pages/signup';
import { useAuthListener } from './hooks/use-auth-listener';


function App() {

  const { user } = useAuthListener();

  return (
    <>
      <Routes>
        <Route user={user} path="/signin" element={<Signin />}></Route>
        <Route user={user} path="/signup" element={<Signup />}></Route>
        <Route user={user} path="/" element={<Home />}></Route>
        <Route user={user} path="/browse" element={<Browse />}></Route>
      </Routes>
    </>
  )


}

export default App;
