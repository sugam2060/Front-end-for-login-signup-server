
import { useState } from "react"
import './style.css'
import axios from 'axios'


export function Loginsignup(){

    const [action,setaction] = useState("Sign Up")

    const [fname,setfname] = useState("");
    const [lname,setlname] = useState("");
    const [username,setusername] = useState("");
    const [password,setpassword] = useState("");
    const [response,setResponse] = useState("");


    function set(e){
        const value = e.target.value
        console.log(value)
    }


    function clear(){
        setResponse("");
    }




    function loginAction(){
        setaction('login');
    }

    async function signupAction(){
        setaction('Sign Up')
    }

    async function userlogin(){
        const res = await axios.post('http://localhost:3000/login',{
            username:username,
            password:password
        })
        setResponse(res.data.msg);
        setTimeout(clear,5000);
    }

    async function newuser(){
        const res = await axios.post('http://localhost:3000/signup',{
            first_name:fname,
            last_name:lname,
            username:username,
            password:password
        })
        setResponse(res.data.msg);
        setTimeout(clear,5000);
    }


    return(
        <div className="main">
            <header>
                <div className="title">{action}</div>
            </header>
            <div className="res">
               {response}
            </div>
            <div className="inputs">

                {action == 'login'?<div></div>:<div className="input">
                    <input type="text" placeholder="first name" onChange={(e)=>{setfname(e.target.value)}}></input>
                </div>}
                {action == 'login'?<div></div>:<div className="input">
                    <input type="text" placeholder="last name" onChange={(e)=>{setlname(e.target.value)}}></input>
                </div>}

                <div className="input">
                    <input type="email" placeholder="email" onChange={(e)=>{setusername(e.target.value)}}></input>
                </div>
                <div className="input">
                    <input type="password" placeholder="password" onChange={(e)=>{setpassword(e.target.value)}}></input>
                </div>
                <div className="submitbtn">
                    <button type="button" onClick={action == 'login'?userlogin:newuser}>{action}</button>
                </div>
            </div>
            <div className="action">
                <button className={action == 'login'?'gray':'white'} onClick={signupAction}>Sign up</button>
                <button className={action == 'Sign Up'?'gray':'white'}  onClick={loginAction}>Login</button>
            </div>
        </div>
    )
}