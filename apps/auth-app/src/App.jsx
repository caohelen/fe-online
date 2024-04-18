import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { login } from "./api";

function App() {
  const [count, setCount] = useState(0)
	
 
	const handleLogin = () => {
		login({username: 'aaa',password: '123456'}).then(res => {
			window.$wujie.bus.$emit("sendToken", res);
		})
	}

  return (
    <>
			<button onClick={() => handleLogin()}>
				登录
			</button>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
