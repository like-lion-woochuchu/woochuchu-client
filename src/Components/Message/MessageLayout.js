import styled from 'styled-components/macro'
import Icon from 'Assets/Icon/icon-paw-print20px@2x.png'
import ReplyIcon from 'Assets/Icon/pngwing_com.png'

export const MessageDiv = styled.div`
  top: 203px;
  left: 610px;
  width: 700px;
  height: ${(props) => props.height || '750px'};
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
  margin: 35px 0px 0px 0px;
  border: solid 0.3px #dedede;
`

export const MessageFrame = styled.div`
  margin: 0px;
  width: 700px;
  height: 605px;
  position: relative;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
    height: 98px;
    border-radius: 20px;
    background: #dadada;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
`

export const MessageFrameInner = styled.div`
  position: absolute;
  height: 100%;
  bottom: 20px;
  right: 15px;
`

export const MessageDetailDiv = styled.div`
  width: fit-content;
  max-width: 430px;
  border-radius: 50px;
  margin: ${(props) => (props.me ? '23px 0px 0px auto' : '23px 500px 0px 0px')};
  display: flex;
  align-items: flex-end;
`
export const MessageBubble = styled.div`
  width: fit-content;
  max-width: 422px;
  background: ${(props) => (props.me ? '#f8f8f8' : '#FBF3DA')};
  text-align: left;
  border-radius: 50px;
  padding: 17px 24px;
  flex: 10;
`

export const MessageTime = styled.div`
  margin: ${(props) => (props.me ? '0px 10px 0px 0px' : '0px 0px 0px 10px')};
  color: #5b5b5b;
  text-align: center;
  font-size: 1px;
  flex: 1/2;
`
export const MessageReplyIcon = styled.img.attrs({
  src: ReplyIcon,
})`
  width: 24px;
  height: 22px;
  opacity: 1;
  float: right;
  margin: 5px 40px 0px 0px;
`
export const MessageDate = styled.div`
  text-align: center;

  background: #dadada;
  width: fit-content;
  color: #ffffff;
  border-radius: 20px;
  padding: 8px 30px;
  margin: 35px auto 20px auto;
`
