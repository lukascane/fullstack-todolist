import React, {createContext, useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import TodoProvider from '../context/TodoProvider';
import Category from '../views/Category/Category';
import Landing from '../views/Landing/Landing';
import NotFound from '../views/NotFound/NotFound';
import TodoView from '../views/TodoView/TodoView';
import Register from '../components/register';
import Login from '../components/login';
import About from '../components/about';
import Footer from '../components/Footer';
export const AppContext = createContext({
  username: "",
  loggedIn: false,
  handleLogin: () => {},
});

export default function MainRouter() {
const [username, setUsername ]= useState("")
  const handleLogin = (user) => {
    
    if (user) {
      setUsername(user);
    } else {
      setUsername("");
    }
  };
  return (
    <AppContext.Provider value={{username,handleLogin}}>
    <BrowserRouter>
      <TodoProvider>
        <main className="mainContainer container" >
          <Routes>
            <Route path="/landing" element={<Landing />} />
            <Route path="/" element={<Register />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/category/:category" element={<Category />} />
            <Route path="/category/:category/:todoid" element={<TodoView />} />
            {/* url = /category/daily/1 -> in this case:
                category = daily
                todoid = 1
            */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </TodoProvider>  
      <Footer />
    </BrowserRouter>
    </AppContext.Provider>
  )
}
