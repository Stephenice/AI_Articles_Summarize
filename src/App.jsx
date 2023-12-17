import Hero from "./components/Hero";
import Article from "./components/Article";
import './App.css';
// import { useState } from 'react'

function App() {

  return (
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Article />
      </div>
    </main>
  )
}

export default App
