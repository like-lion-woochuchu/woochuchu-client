import styled from 'styled-components/macro'
import Icon from 'Assets/Icon/icon-paw-print20px@2x.png'

export const MessageListDiv = styled.div`
  flex-direction: column;
  background-color: transparent;
`

export const MessageListIcon = styled.img.attrs({
  src: Icon,
})`
  margin-top: 54.49px;
  margin-right: 10px;
  width: 24px;
  height: 20px;
  opacity: 1;
`
export const MessageListText = styled.text`
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

export const MessageListFrame = styled.div`
  margin-top: 30px;
  margin-bottom: 150px;
  left: 610px;
  width: 700px;
  height: 870px;
  border: 0.3px solid #dedede;
  border-radius: 30px;
  background-color: transparent;
`
