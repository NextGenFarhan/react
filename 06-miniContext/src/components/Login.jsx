import { useState, useContext } from 'react'
import UserContext from '../context/UserContext';
import "./Login.css"

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

    return (
    <div className='container'>
      <h2>Login</h2>
      <input 
      type="text" placeholder='username' 
      className="box1"
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      />
      <input 
      type="password" placeholder='password' 
      className="box2"
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
      />
      <button 
      type='submit' 
      style={{padding:"10px",color:'black'}}
      onClick={handleSubmit}
      >Submit</button>
    </div>
  )
}

export default Login;