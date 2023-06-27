import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Card from './components/Card'

import katieImg from './assets/katie-zeferes.png'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Card  img={katieImg} rating={5.0} reviewCount={6} country='New Zealand' title='Life lessons with Katie Zaferes' price={136}/>
    </>
  )
}

export default App
