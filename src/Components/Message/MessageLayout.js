import styled from 'styled-components/macro'
import buttonIcon from 'Assets/Icon/icon-paw-print20px@2x.png'

export const MessageDiv = styled.div`
  top: 203px;
  left: 610px;
  width: 700px;
  height: 830px;
  border: 0.3px solid #dedede;
  border-radius: 30px;
  opacity: 1;
  margin-top: 43px;
  margin-bottom: 47px;
`
export const MessageLineUnderName = styled.hr`
  margin-top: 103px;
  border: solid 0.3px #dedede;
`

export const MessageFrame = styled.div`
  margin: 0px;
  width: 700px;
  height: 605px;
`

export const MessageInputDiv = styled.div`
  flex-direction: column;
  padding-top: 20px;
  padding-left: 24px;
  height: 90px;
  border-top: solid 0.3px #dedede;
`
export const MessageInput = styled.textarea`
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
  width: 550px;
  border: none;
  outline: none;
  resize: none;
  margin-right: 30px;
`

export const MessageSendButton = styled.button`
  width: 65px;
  height: 45px;
  margin-top: -20px;
  background: #fbf3da;
  border: 0.3px solid #dedede;
  box-sizing: border-box;
  border-radius: 50px;
  padding: 9px 14px 10px 14px;
`
