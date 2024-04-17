import { useEffect } from 'react';
import './App.css'
import Navbar from './Components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init();
  })
  return (
    <>
      <Navbar />
    </>
  )
}

export default App
