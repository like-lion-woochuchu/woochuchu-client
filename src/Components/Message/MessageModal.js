import React, { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components/macro'
import axios from 'axios'
import getDataFromLocalStorage from 'Utils/Storage/GetDataFromLocalStorage'

export default function MessageModal({
  receiver,
  openMsgModal,
  setOpenMsgModal,
}) {
  const [msgBody, setMsgBody] = useState('')
  const history = useHistory()
  const token = getDataFromLocalStorage('token')

  const handleModalClose = () => {
    setOpenMsgModal(false)
  }

  const handleMessageChange = (e) => {
    setMsgBody(e.target.value)
  }

  const handleCancelClick = () => {
    setOpenMsgModal((prev) => !prev)
  }

  const handleSendClick = async () => {
    setOpenMsgModal((prev) => !prev)
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}/note/`,
        { receiver: receiver, body: msgBody },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(history.push('/message-list'))
      .catch((err) => console.log(err))
  }

  return (
    <Dimmer onClick={handleModalClose}>
      <MsgModal onClick={(e) => e.stopPropagation()}>
        <ContentBox>
          <ContentArea
            placeholder={'내용을 입력해주세요.'}
            onChange={(e) => handleMessageChange(e)}
          />
        </ContentBox>
        <ButtonContainer>
          <CancelButton disabled={false} onClick={handleCancelClick}>
            취소
          </CancelButton>
          <MessageButton disabled={!msgBody} onClick={handleSendClick}>
            전송
          </MessageButton>
        </ButtonContainer>
      </MsgModal>
    </Dimmer>
  )
}
const Dimmer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0%;
  bottom: 0;
  z-index: 10000;
  background-color: rgba(60, 60, 60, 40%);
`

const MsgModal = styled.div`
  padding: 20px 20px 30px;
  position: absolute;
  left: 25%;
  top: 15%;
  width: 50%;
  height: 70%;
  background-color: #fff;
`
const ContentBox = styled.div`
  padding: 20px 40px;
  width: 100%;
  height: 85%;
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border-radius: 45px;
  opacity: 1;
`

const ContentArea = styled.textarea`
  width: 100%;
  height: 100%;
  outline: none;
  background: none;
  border: none;
  margin: ${(props) => props.margin || '0px'};
  text-align: left;
  font: normal normal 300 18px/26px Noto Sans CJK KR;
  letter-spacing: 0px;
  color: #707070;
  opacity: 1;
  ::placeholder {
    font: normal normal 300 18px/26px Noto Sans CJK KR;
    letter-spacing: 0px;
    color: #dedede;
  }
  ::-webkit-scrollbar {
    width: 5.2px;
  }

  ::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-button {
    display: none;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const MessageButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 15px 25px;
  width: 25%;
  margin-top: 25px;
  border-radius: 30px;
  background-color: #fcf8e9;
  color: #000;

  &:disabled {
    background: #e9e9e9 0% 0% no-repeat padding-box;
    cursor: auto;
    color: #6f6e6f;
  }
`
const CancelButton = styled(MessageButton)`
  background-color: #e9e9e9;
  margin-right: 10px;
`
