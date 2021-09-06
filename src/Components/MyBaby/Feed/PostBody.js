import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function PostBody({ body }) {
  const [openFullText, setOpenFullText] = useState(false)

  const handleOpenFullText = () => {
    setOpenFullText((prev) => !prev)
  }
  return (
    <Wrapper>
      <TextContainer>{body}</TextContainer>
      <MoreBtnContainer>
        {openFullText ? (
          <MoreBtn onClick={handleOpenFullText}>접기</MoreBtn>
        ) : (
          <MoreBtn onClick={handleOpenFullText}>더보기</MoreBtn>
        )}
      </MoreBtnContainer>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-top: 30px;
`
const TextContainer = styled.p`
  font-size: 18px;
  text-align: left;
`
const MoreBtnContainer = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 16px;
  color: #32b67a;
`
const MoreBtn = styled.div`
  cursor: pointer;
`
