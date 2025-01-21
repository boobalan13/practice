import ClassCompEg from "./components/ClassComponent/ClassCompEG"
import About from "./components/FunctionalComponent/About"
import Home from "./components/FunctionalComponent/Contact"
import Gallery from "./components/FunctionalComponent/Gallery"
import Contact from "./components/FunctionalComponent/Home"
import Navbar from "./components/FunctionalComponent/Navbar"
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import Signup from "./components/FunctionalComponent/Signup"

function App(){
  return(
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/gallery" element={<Gallery image="SECE LOGO" page="Gallery"/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
      </Routes>
      {/*<Home/><hr/>
      <About/><hr/>
      <h2>Without Props</h2>
      <Gallery/>
      <h2>With Props</h2>
      <Gallery image="SECE LOGO" page="Gallery"/><hr/>
      <Contact/>
      <ClassCompEg /><hr/>*/}
      </BrowserRouter>
    </div>
    
  )

}
export default App;