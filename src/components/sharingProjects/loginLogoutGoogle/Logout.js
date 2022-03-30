import React from 'react'
import { GoogleLogout } from 'react-google-login'
const clientId = "395004521750-i7ei201q1tln3kue2vmqec6f98ohi7vm.apps.googleusercontent.com"


export default function Logout() {
    
    const onSucces = () => {
        console.log("Log out succesfull!!")
    }

  return (
    <div id="signOutButton">
        <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSucces}/>
    </div>
  )
}
