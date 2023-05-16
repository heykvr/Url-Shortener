import Input from './In/Input'
import './App.css';
import Redirect from './Redirect'
import {Route, BrowserRouter as Router , Routes} from 'react-router-dom'
import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
      
      <Router>
      <Routes> 
        <Route path="/" element={<Input/>}/>
        <Route path="/:slug" element={<Redirect/>}/>

        

      </Routes>
      </Router>
      </div>
    
  )
}

export default App

