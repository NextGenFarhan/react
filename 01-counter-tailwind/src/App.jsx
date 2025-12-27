import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <h1 className='color-white size-bold p-5 m:20 round:xl'>Again with Farhan</h1>

      <Cards />
      <Cards feature={2} solution={2} views='357k'/>
      <Cards feature={3} solution={3} views='767k'/>
    </>
  )
}

export default App