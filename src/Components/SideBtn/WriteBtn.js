import React from 'react'
import styled from 'styled-components/macro'
import Write from 'Assets/Icon/button-scroll-top60px@2x.png'
import { ScrollButton } from './ScrollTopBtn'

export default function WriteBtn({ handleClick }) {
  return (
    <div>
      <WriteButton src={Write} onClick={handleClick} />
    </div>
  )
}

const WriteButton = styled(ScrollButton)`
  bottom: 110px;
`
