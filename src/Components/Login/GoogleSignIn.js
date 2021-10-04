import React from 'react'
import GoogleLogin from 'react-google-login'
import styled from 'styled-components/macro'

const GoogleSignIn = () => {
  return (
    <GoogleButton>
      <GoogleLogin
        clientId="333301147396-7im6b138mmott3ied2t7c23t1jo9gcdh.apps.googleusercontent.com"
        onSuccess={(data) => console.log(data)}
        onFailure={(e) => console.log(e)}
      ></GoogleLogin>
    </GoogleButton>
  )
}

const GoogleButton = styled.button`
  margin: 50px 140px 20px 140px;
  width: 420px;
  height: 90px;
  opacity: 1;
`

export default GoogleSignIn
