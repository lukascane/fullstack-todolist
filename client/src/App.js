import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import MainRouter from './hoc/MainRouter';
import Navigation from './components/navigation';
import { BrowserRouter, Route , Routes } from 'react-router-dom';


export default function App() {
  return (
    <div>
    <Navigation />
  
    
    <MainRouter />
   
  
    
    </div>
  )
}
