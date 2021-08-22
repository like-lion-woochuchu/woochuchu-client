import styled from 'styled-components/macro'
import KakaoLogin from 'react-kakao-login'
import { setCookie } from 'Utils/Cookie/Cookie'

const KakaoSignIn = () => {
  const { Kakao } = window
  Kakao.init('21f10b8032619c791b4ed5b6d1c204e7')
  // setCookie('samesite', 'samesite', {
  //   path: '/',
  //   secure: true,
  //   sameSite: 'none',
  // })

  const onSuccess = () => {
    Kakao.Auth.login({
      success: (res) => {
        console.log(res)
        Kakao.API.request({
          url: `/v2/user/me`,
          success: (res) => console.log(res),
        })
      },
      fail: (e) => console.log(e),
    })
  }

  return (
    <KakaoButton>
      <KakaoLogin
        id="signIn-kakao"
        token={'21f10b8032619c791b4ed5b6d1c204e7'}
        onSuccess={onSuccess}
        onFail={console.log}
      />
    </KakaoButton>
  )
}

const KakaoButton = styled.button`
  margin: 20px 140px 20px 140px;
  width: 420px;
  height: 90px;
  opacity: 1;
`

export default KakaoSignIn
