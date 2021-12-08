import React from 'react'
import GoogleLogin from 'react-google-login'
import styled from 'styled-components/macro'
import axios from 'axios'
import { useHistory } from 'react-router'

const GoogleSignIn = () => {
  const history = useHistory()
  return (
    <GoogleButton>
      <GoogleLogin
        clientId="333301147396-7im6b138mmott3ied2t7c23t1jo9gcdh.apps.googleusercontent.com"
        onSuccess={(data) => {
          console.log(data)
          axios
            .post(
              `${process.env.REACT_APP_API_URL}/accounts/auth/signin/`,
              {
                email: data.profileObj.email,
                provider: 'google',
              },
              {
                headers: {
                  'Content-type': 'application/json',
                  Accept: 'application/json',
                },
              }
            )
            .then((response) => {
              if (response.status === 200) {
                console.log(response.data)
                console.log(response.data.results.access_token)
                const token = response.data.results.access_token
                localStorage.setItem('token', token)
                console.log(localStorage.getItem('token'))
                history.push('/')
              }
            })
            .catch((error) => {
              console.log(error.response.request.status)
              if (error.response.request.status === 401) {
                history.push('/signup', {
                  email: data.profileObj.email,
                  provider: 'google',
                  profile_image: data.profileObj.imageUrl,
                })
              }
            })
        }}
        onFailure={(e) => console.log(e)}
        render={(renderProps) => (
          <button
            onClick={renderProps.onClick}
            style={{
              background: '#F8F8F8',
              display: 'inline-flex',
              color: 'black',
              padding: '14px 90px',
              borderRadius: '30px',
              border: '1px solid transparent',
              fontSize: '14px',
              fontWeight: '400',
              fontFamily: 'Noto Sans KR',
              textAlign: 'center',
            }}
          >
            구글로 로그인하기
          </button>
        )}
      ></GoogleLogin>
    </GoogleButton>
  )
}

const GoogleButton = styled.button`
  margin: 50px 140px 0px 140px;
  width: 420px;
  height: 90px;
  opacity: 1;
  border: '1px solid black';
`

export default GoogleSignIn
