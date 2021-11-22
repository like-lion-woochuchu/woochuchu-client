import styled from 'styled-components/macro'
import Icon from 'Assets/Icon/icon-paw-print20px@2x.png'

export const MessageDiv = styled.div`
  top: 203px;
  left: 610px;
  width: 700px;
  height: ${(props) => props.height || '830px'};
  border: 0.3px solid #dedede;
  border-radius: 30px;
  opacity: 1;
  margin-top: 43px;
  margin-bottom: 47px;
`
export const MessageReceiver = styled.div`
  flex-direction: row;
  margin: 45px 0px 30px 45px;
`
export const MessageReceiverName = styled.span`
  width: 670px;
  margin-left: 10px;
  font: normal normal bold 20px/29px Noto Sans KR;
`
export const MessageReceiverIcon = styled.img.attrs({
  src: Icon,
})`
  width: 24px;
  height: 20px;
  opacity: 1;
`
export const MessageTextFrame = styled.textarea`
  width: 660px;
  height: 500px;
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border-radius: 45px;
  margin: 0px 20px 15px 20px;
  border: none;
  outline: none;
  resize: none;
  padding: 32px 50px 38px 40px;
  font: normal normal 15px Noto Sans KR;
  ::placeholder {
    color: #707070;
  }
`
export const MessageLineUnderName = styled.hr`
  margin-top: 103px;
  border: solid 0.3px #dedede;
`

export const MessageFrame = styled.div`
  margin: 0px;
  width: 700px;
  height: 605px;
  position: relative;
`

export const MessageLastsent = styled.div`
  width: auto;
  height: auto;
  max-width: 422px;
  background: #f8f8f8;
  text-align: left;
  border-radius: 50px;

  margin-top: 30px;
  margin-right: 20px;
  padding: 17px 24px;
  position: absolute;
  bottom: 20px;
  right: 15px;
`
