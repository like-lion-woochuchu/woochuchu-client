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
  font: normal normal bold 20px/29px Noto Sans KR;
  letter-spacing: 0px;
  color: #1d1e20;
  opacity: 1;
`

export const SignUpFrame = styled.div`
  margin-top: 30px;
  margin-bottom: 150px;
  left: 610px;
  width: 700px;
  height: 870px;
  border: 0.3px solid #dedede;
  border-radius: 30px;
  opacity: 1;
`

export const SubjectText = styled.text`
  margin-right: ${(props) => props.margin || '30px'};
  font: normal normal bold 18px/26px Noto Sans KR;
  text-align: left;
  letter-spacing: 0px;
  color: #1d1e20;
  opacity: 1;
`

export const SignUpInput = styled.input`
  width: ${(props) => props.width || '250px'};
  margin: ${(props) => props.margin || '0px'};
  text-align: left;
  font: normal normal 300 18px/26px Noto Sans KR;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  ::placeholder {
    font: normal normal 300 18px/26px Noto Sans KR;
    letter-spacing: 0px;
    color: #dedede;
  }
`
export const AnimalSelect = styled.div`
  padding: 32px 48px;
  margin: ${(props) => props.margin || '30px 10px 0px 0px'};
  width: ${(props) => props.width || '116px'};
  text-align: center;
  height: 90px;
  background: ${(props) => props.background || '#f8f8f8'};
  border-radius: 45px;
  opacity: 1;
`

export const AnimalDivText = styled.text`
  font: normal normal bold 18px/26px Noto Sans KR;
  letter-spacing: 0px;
  color: #1d1e20;
  opacity: 1;
`

export const ErrorMessage = styled.div`
  width: 400px;
  color: #c4525e;
  font: Noto Sans KR;
  letter-spacing: 0px;
  margin: ${(props) => props.margin || '3px 3px 3px 63px'};
`
