import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import rg4js from 'raygun4js';



function App() {
  const [count, setCount] = useState(0)

  rg4js('apiKey', 'ofvz8BV6EnCAPASEHEWSA')
  rg4js('enableCrashReporting', true)
  rg4js('setUser', {
    identifier: '662607004',
    isAnonymous: false,
    email: 'fabian.pernia@endava.com',
    firstName: 'Fabian',
    fullName: 'Fabian Pernia',
  })

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

        <h1>This is a test that's gonna fail: Click the button below</h1>
        <button onClick={() => methodDoesNotExist()}>Break the world</button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
