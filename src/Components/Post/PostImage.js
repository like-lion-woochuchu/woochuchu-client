import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components/macro'
import RightBtnImgUrl from 'Assets/Icon/icon-carousel-arrow-right@2x.png'
import LeftBtnImgUrl from 'Assets/Icon/icon-carousel-arrow-left@2x.png'

export default function PostImage({ imgUrl }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slideRef = useRef(null)
  const IMAGE_WIDTH = 665
  const TOTAL_SLIDES = imgUrl.split('|').length * IMAGE_WIDTH

  const nextSlide = () => {
    if (TOTAL_SLIDES === IMAGE_WIDTH) return
    if (currentSlide >= TOTAL_SLIDES - IMAGE_WIDTH) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(currentSlide + IMAGE_WIDTH)
    }
  }

  const prevSlide = () => {
    if (TOTAL_SLIDES === IMAGE_WIDTH || currentSlide === 0) return
    setCurrentSlide(currentSlide - IMAGE_WIDTH)
  }

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out'
    slideRef.current.style.transform = `translateX(-${currentSlide}px)`
  }, [currentSlide])

  return (
    <>
      <Wrapper>
        <SliderContainer ref={slideRef}>
          {imgUrl.split('|').map((img, idx) => (
            <Img key={idx} src={img} width={`${IMAGE_WIDTH}px`} />
          ))}
        </SliderContainer>
        <RightBtn src={RightBtnImgUrl} onClick={nextSlide} />
        <LeftBtn src={LeftBtnImgUrl} onClick={prevSlide} />
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  position: relative;
  border: 2px solid #dedcdc;
  border-radius: 10px;
  min-height: 500px;
  overflow: hidden;
  display: flex;
`
const SliderContainer = styled.div`
  display: flex;
`

const Img = styled.img`
  width: calc(700px - 35px);
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
