// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Videos from "./Components/Videos/Video";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import BlogDetails from "./Components/BlogDetails/BlogDetails";
import { createContext, useState } from "react";
import Signup from './Components/Signup/Signup';

export const BlogContext = createContext();

function App() {
  const [blogs, setBlogs] = useState([]);

  return (

    <BlogContext.Provider value={[blogs, setBlogs]} className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/videos' element={<Videos />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/blog/:id' element={<BlogDetails />} />
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </BlogContext.Provider>
  );
}

export default App;
