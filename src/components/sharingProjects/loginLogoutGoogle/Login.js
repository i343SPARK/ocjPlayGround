import React from 'react'
import { GoogleLogin } from 'react-google-login'

const clientId = "395004521750-i7ei201q1tln3kue2vmqec6f98ohi7vm.apps.googleusercontent.com"


export default function Login() {

    const onSuccess = (res) =>{
        console.log("Login Succesfull!! current user: ", res.profileObj)
    }
    
    const onFailure = (res) =>{
        console.log("Login failed, res: ", res)
    }
    
  return (
    <div id='signInButton'>
        <GoogleLogin
        clientId={clientId}
        buttonText={"Login"}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        />
    </div>
  )
}
