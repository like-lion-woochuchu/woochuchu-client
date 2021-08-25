import styled from 'styled-components/macro'
import Icon from 'Assets/Icon/icon-paw-print20px@2x.png'

export const SignupDiv = styled.div`
  flex-direction: column;
`

export const SignUpIcon = styled.img.attrs({
  src: Icon,
})`
  margin-top: 54.49px;
  margin-right: 10px;
  width: 24px;
  height: 20px;
  opacity: 1;
`

export const SignUpText = styled.text`
  margin-top: 50px;
  margin-right: 587px;
  width: 90px;
  height: 29px;
  text-align: left;
  font: normal normal bold 20px/29px Noto Sans CJK KR;
  letter-spacing: 0px;
  color: #1d1e20;
  opacity: 1;
`

export const SignUpFrame = styled.div`
  margin-top: 30px;
  margin-bottom: 150px;
  left: 610px;
  width: 700px;
  height: 950px;
  background: transparent url('https://ifh.cc/v-WsGEdJ.png') 0% 0% no-repeat
    padding-box;
  border: 0.3px solid #dedede;
  border-radius: 30px;
  opacity: 1;
`

export const SignUpInputArea = styled.div`
  margin-top: 40px;
  margin-left: 30px;
  width: 640px;
  height: 742px;
`
