import React, {useState} from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import EmailContext from '../context/emailcontext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const {setUser} = useContext(UserContext)
    const {setEm} = useContext(EmailContext)
    const handleSubmit = (e) =>{
        // Prevent the page from refreshing
        e.preventDefault()
        setUser({username,password});
        setEm({email});
    }
  return (
    <div>
        <h2>Login</h2>
        <input
        type='text'
        value={username}
        placeholder='username'
        onChange={(e)=>setUsername(e.target.value)}
        />
        {" "}
        <input
        type='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='password'
        />
        <input
        type='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder='email'
        
        
        />
        <button
        onClick={handleSubmit}
        >Submit</button>
    </div>
  )
}

export default Login