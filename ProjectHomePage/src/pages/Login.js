import React from "react";
import Layout from "../components/Layout/Layout";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setcredentials] = useState({
    "Email": "",
    "Password": ""
   });
   
const navigate = useNavigate();
const OnTextChange = (args)=>{
var copyOfCredentials = {...credentials};
copyOfCredentials[args.target.name] = args.target.value;
setcredentials(copyOfCredentials);
}

const DoLogin = ()=>
{
  var copyOfCredentials = {...credentials};
  //copyOfCredentials.Password = window.btoa(copyOfCredentials.Password);
 
  axios.post('http://127.0.0.1:9898/login',copyOfCredentials)
       .then((result)=>
       {
         console.log(result.data);
         console.log(result.data.Email);
         console.log(result.data.U_Id);
         if(result.data.Token!==undefined)
         {
             sessionStorage.setItem('Email', credentials.Email);
             sessionStorage.setItem('Token', result.data.Token);
             console.log("login successfuly");
             navigate('/');
         }
         else
         {
             alert('something went wrong!');
         }
       })
}
  return (
    <Layout>
            <center>
                Email : <input type="text"
                                  value={credentials.Email}
                                  name="Email"
                                  onChange={OnTextChange}/>
                <br/>
                Password : <input type="password"
                                  value={credentials.Password}
                                  name="Password"
                                  onChange={OnTextChange}/>
                <br/>
                <button onClick={DoLogin}>Login</button>

            </center>

    </Layout>
  );
};

export default Login;
