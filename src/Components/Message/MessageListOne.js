import styled from 'styled-components/macro'
import { MessageDiv } from './MessageLayout'

const MessageListOne = ({ message }) => {
  return (
    <>
      <MessageListOneDiv>
        <MessageListNickname>{message.nickname}</MessageListNickname>
        <br />
        <MessageBody>
          <MessageSpan> {message.body.substr(0, 35)} </MessageSpan>
          {message.new ? <MessageNew>N</MessageNew> : null}
        </MessageBody>
      </MessageListOneDiv>
    </>
  )
}

const MessageListOneDiv = styled.div`
  flex-direction: column;
  margin: 35px 37px 0px 37px;
  padding: 35px 25px 10px 25px;
  border: 1px solid #dedede;
  border-radius: 20px;
  width: 625px;
  height: 137px;
`
const MessageListNickname = styled.span`
  font: normal normal bold 20px Noto Sans KR;
  margin-bottom: 10px;
`
const MessageBody = styled.div`
  display: flex;
  flex-direction: row;
  font: normal normal 18px Noto Sans KR;
  width: 600px;
  margin-top: 10px;
`
const MessageSpan = styled.div`
  width: 477px;
`
const MessageNew = styled.button`
  margin-left: 74px;
  vertical-align: middle;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #fbf3da;
  border: 1px solid #000000;
  text-align: center;
  font: normal normal bold 5px Noto Sans KR;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export default MessageListOne
