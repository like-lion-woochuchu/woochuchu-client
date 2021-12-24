import styled from 'styled-components/macro'
import Icon from 'Assets/Icon/icon-paw-print20px@2x.png'

export const FamilyDiv = styled.div`
  flex-direction: column;
`

export const FamilyIcon = styled.img.attrs({
  src: Icon,
})`
  margin-top: 54.49px;
  margin-right: 10px;
  width: 24px;
  height: 20px;
  opacity: 1;
`

export const FamilyText = styled.text`
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
