import React from 'react'
import styled from 'styled-components/macro'
import Write from 'Assets/Icon/button-scroll-top60px@2x.png'
import { ScrollButton } from './ScrollTopBtn'

export default function WriteBtn() {
  return (
    <div>
      <WriteButton src={Write} />
    </div>
  )
}

const WriteButton = styled(ScrollButton)`
  bottom: 110px;
`
