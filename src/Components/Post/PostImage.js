import React from 'react'
import styled from 'styled-components/macro'
import RightBtnImgUrl from 'Assets/Icon/icon-carousel-arrow-right@2x.png'
import LeftBtnImgUrl from 'Assets/Icon/icon-carousel-arrow-left@2x.png'

export default function PostImage({ imgUrl }) {
  return (
    <Wrapper>
      <RightBtn src={RightBtnImgUrl} />
      <Img src={imgUrl} />
      <LeftBtn src={LeftBtnImgUrl} />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
  border: 2px solid #dedcdc;
  border-radius: 10px;
  min-height: 500px;
`

const Img = styled.img`
  position: relative;
  max-width: 670px;
  max-height: 500px;
  border-radius: 10px;
`
const ImgBtn = styled.img`
  top: 45%;
  z-index: 9999;
  position: absolute;
  width: 26px;
  cursor: pointer;
`
const RightBtn = styled(ImgBtn)`
  right: 2%;
`
const LeftBtn = styled(ImgBtn)`
  left: 2%;
`
