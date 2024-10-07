import react, { useState } from 'react'
import Counter from './Counter'
import './App.css'
import Footer from './Footer'

function App() {

  return (
    <>
      <div>
        <h1>Counter App!</h1><br/>
        <Counter />
      </div>
      <Footer />
    </>
  )
}

export default App
