import React from "react"
import Navbar from "./actcomp/Navbar"
import Body from "./actcomp/Body"
import Input from "./actcomp/Input"
import { useState } from "react"
import axios from "axios"

 function App() {
  const [text, settext] = useState([]);
  async function handleText(txt){
    settext((prev)=>{
      return [...prev,txt]
    })
    console.log(text)
    await axios.post("http://localhost:3000/posts/", {text:text}).then((response) => {
      console.log(response.status, response.data);
    });
  }
  function handledel(index){
    settext((prev)=>{
      return prev.filter((txt,ind)=>{
        return index!==ind;
      })
    })
    
  }


  return (
    <div>
      <Navbar />
      <Input onsubmit={handleText} />
      {text.map((notes,id)=>[
        <Body key={id} text={notes} handledelete={handledel}  id={id} />
      ])}
    </div>
  )
}

export default App


// import { createBrowserRouter,RouterProvider } from "react-router-dom"
// import Home from "./components/Home"
// import About from './components/About'
// import Contact from "./components/Contact"
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Home />
//   },
//   {
//     path: '/home',
//     element: <Home />,
//   },
//   {
//     path: '/contact',
//     element: <Contact />,
//   },
//   {
//     path: '/about',
//     element: <About />
//   }
// ]);