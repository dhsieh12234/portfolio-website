import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/Nav-bar'
import Projects from './components/Projects';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <ResponsiveAppBar></ResponsiveAppBar>
    <Routes> 
      <Route path="/Projects" element={<Projects/>}></Route>
    </Routes>
    </>
  )
}

export default App;
