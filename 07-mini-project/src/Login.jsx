import Layout from "./Layout"
import { useContext } from "react"
import { Context } from "./UserContext"
import { useState } from "react"

const Login = () => {
    // You have to pass data to signup() function to successful login.
    const { login } = useContext(Context)
    const [Username,setUserName] = useState('')
    const [Password,setPassWord] = useState('')
    // example of login with button onClick event listerner.
    // <button onClick={() => signup({
    //     username: 'mock',
    //     password: 'mock',
    // })}>Text</button>

    return (
        <Layout>
            <div>
                <input type="text" placeholder="Username" onChange={(event) => setUserName(event.target.value)} />Username
                <input type="text" placeholder="Password" onChange={(event) => setPassWord(event.target.value)} />Password
                <button onClick={() => login({ username: Username , password: Password })}>Login</button>
            </div>
        </Layout>
    )
}

export default Login