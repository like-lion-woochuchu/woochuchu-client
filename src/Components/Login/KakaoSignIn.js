import styled from 'styled-components/macro'
import KakaoLogin from 'react-kakao-login'
import axios from 'axios'
import { useHistory } from 'react-router'

const KakaoSignIn = () => {
  const history = useHistory()
  const { Kakao } = window
  Kakao.init(`${process.env.REACT_APP_KAKAO_APP_KEY}`)

  const onSuccess = () => {
    Kakao.Auth.login({
      success: (res) => {
        Kakao.API.request({
          url: `/v2/user/me`,
          success: (res) => {
            console.log(res)
            axios
              .post(`${process.env.REACT_APP_API_URL}/accounts/auth/signin/`, {
                email: res.kakao_account.email,
                provider: 'kakao',
              })
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
                if (error.response.request.status === 401) {
                  history.push('/signup', {
                    email: res.kakao_account.email,
                    provider: 'kakao',
                    profile_image: null,
                  })
                }
              })
          },
        })
      },
      fail: (e) => console.log(e),
    })
  }

  return (
    <KakaoButton>
      <KakaoLogin
        id="signIn-kakao"
        token={`${process.env.REACT_APP_KAKAO_APP_KEY}`}
        onSuccess={onSuccess}
        onFail={console.log}
        style={{
          display: 'inline-block',
          padding: '0',
          margin: '0',
          width: '300px',
          height: '45px',
          lineHeight: '44px',
          color: 'black',
          backgroundColor: '#ffeb00',
          border: '1px solid transparent',
          borderRadius: '3px',
          fontSize: '14px',
          textAlign: 'center',
          cursor: 'pointer',
          borderRadius: '30px',
          font: 'Noto Sans KR',
        }}
      >
        카카오로 로그인하기
      </KakaoLogin>
    </KakaoButton>
  )
}

const KakaoButton = styled.button`
  margin: 0px 140px 20px 140px;
  width: 420px;
  height: 90px;
  opacity: 1;
`

export default KakaoSignIn
