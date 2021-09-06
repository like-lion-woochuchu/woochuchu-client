import React from 'react'
import styled from 'styled-components/macro'
import RightBtnImgUrl from 'Assets/Icon/icon-carousel-arrow-right@2x.png'
import LeftBtnImgUrl from 'Assets/Icon/icon-carousel-arrow-left@2x.png'

export default function PostImage({ imgUrl }) {
  return (
    <Wrapper>
      <RightBtn src={RightBtnImgUrl} />
      <Img src="https://ifh.cc/g/s1AhKt.jpg" />
      <LeftBtn src={LeftBtnImgUrl} />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  position: relative;
`

const Img = styled.img`
  position: relative;
  max-width: 670px;
  max-height: 500px;
  border-radius: 10px;
`
const ImgBtn = styled.img`
  top: 225px;
  z-index: 9999;
  position: absolute;
  width: 26px;
`
const RightBtn = styled(ImgBtn)`
  right: 10px;
`
const LeftBtn = styled(ImgBtn)`
  left: 10px;
`
