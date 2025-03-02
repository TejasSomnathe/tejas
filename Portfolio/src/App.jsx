import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import MetaBalls from './components/components2/MetaBalls.jsx'
import Footer from './components/components2/Footer.jsx'
import Card1 from './cards/Card1.jsx'
import Main2 from './components/Main2.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <Header />
      <Main /> 
      <Main2 />
      <Card1 />
    
      {/* <Footer /> */}
    </>
  )
}

export default App
