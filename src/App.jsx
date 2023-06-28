import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Card from './components/Card'
import data from './data.js'


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <div className='cardContainer'>
        {data.map(exp => 
          <Card
            key={exp.id}
            {...exp}
          />)}
        </div>
    </>
  )
}

export default App
