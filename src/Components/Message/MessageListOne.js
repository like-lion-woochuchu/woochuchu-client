import styled from 'styled-components/macro'
import { MessageDiv } from './MessageLayout'
import { useHistory } from 'react-router'
import jwtDecode from 'jwt-decode'

const MessageListOne = ({ message }) => {
  const history = useHistory()
  const token = localStorage.getItem('token')
  const decoded = jwtDecode(token)
  const userId = parseInt(decoded.subject.split(':')[1])
  const receiver =
    message.sender.id === userId ? message.receiver.id : message.sender.id
  const nickname =
    message.sender.id === userId
      ? message.receiver.nickname
      : message.sender.nickname
  return (
    <>
      <MessageListOneDiv
        onClick={() =>
          history.push('/message-detail', {
            receiver: receiver,
            nickname: nickname,
          })
        }
      >
        <MessageListNickname>{nickname}</MessageListNickname>
        <MessageTimeDiv>
          {message.created_at.split('T')[0]} {message.created_at.split('T')[1]}
        </MessageTimeDiv>
        <br />
        <MessageBody>
          <MessageSpan> {message.body.substr(0, 35)} </MessageSpan>

          {!message.seen_flag ? <MessageNew>N</MessageNew> : null}
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

const MessageTimeDiv = styled.span`
  float: right;
  color: #a2a2a2;
`
export default MessageListOne
