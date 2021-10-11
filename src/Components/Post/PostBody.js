import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function PostBody({ body }) {
  const [openFullText, setOpenFullText] = useState(false)

  const handleOpenFullText = () => {
    setOpenFullText((prev) => !prev)
  }
  return (
    <Wrapper>
      {body.length > 10 ? (
        <TextContainer>
          {body.slice(0, 10)}
          {openFullText ? (
            <>{body.slice(10)}</>
          ) : (
            <>
              ...
              <MoreBtn onClick={handleOpenFullText}>더보기</MoreBtn>
            </>
          )}
        </TextContainer>
      ) : (
        <TextContainer>{body}</TextContainer>
      )}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-top: 30px;
`
const TextContainer = styled.span`
  font-size: 18px;
  text-align: left;
  color: #000;
`
const MoreBtn = styled.span`
  cursor: pointer;
  color: #32b67a;
`
