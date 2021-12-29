import React from 'react'
import styled from 'styled-components/macro'
import ScrollTop from 'Assets/Icon/button-scroll-top60px@2x.png'

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div>
      <ScrollButton src={ScrollTop} onClick={scrollToTop} />
    </div>
  )
}

export const ScrollButton = styled.img`
  width: 80px;
  height: 80px;
  position: fixed;
  bottom: 40px;
  margin-left: 20px;
  cursor: pointer;
`
