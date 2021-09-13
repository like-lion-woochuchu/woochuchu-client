import React from 'react'
import GoogleLogin from 'react-google-login'
import styled from 'styled-components/macro'
import axios from 'axios'

const GoogleSignIn = () => {
  return (
    <GoogleButton>
      <GoogleLogin
        clientId="333301147396-7im6b138mmott3ied2t7c23t1jo9gcdh.apps.googleusercontent.com"
        onSuccess={(data) => {
          console.log(data)
          // axios
          //   .post(
          //     '/accounts/auth/signin/',
          //     {
          //       email: 'meanaccto@naver.com',
          //       provider: 'google',
          //     },
          //     {
          //       headers: {
          //         'Content-type': 'application/json',
          //         Accept: 'application/json',
          //       },
          //     }
          //   )
          //   .then((response) => {
          //     console.log(response.data)
          //     console.log(response.data.results.access_token)
          //     const token = response.data.results.access_token
          //     localStorage.setItem('token', token)
          //     console.log(localStorage.getItem('token'))
          //   })
          //   .catch((response) => {
          //     console.log(response)
          //   })
        }}
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
