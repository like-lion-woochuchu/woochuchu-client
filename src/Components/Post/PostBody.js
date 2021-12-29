import React, { useState } from 'react'
import { useHistory } from 'react-router'

import styled from 'styled-components/macro'

export default function PostBody({ body, type, postId, data }) {
  const [openFullText, setOpenFullText] = useState(false)
  const history = useHistory()

  const handleOpenFullText = () => {
    setOpenFullText((prev) => !prev)
  }

  const handleMoveToDetail = () => {
    history.push('/findmybaby/' + postId)
  }
  return (
    <Wrapper>
      {type === 'findmybaby' ? (
        <>
          {body.length > 10 ? (
            <TextContainer>
              {body.slice(0, 10)}
              <MoreBtn onClick={handleMoveToDetail}>...더보기</MoreBtn>
            </TextContainer>
          ) : (
            <TextContainer>
              {body} <MoreBtn onClick={handleMoveToDetail}>...더보기</MoreBtn>
            </TextContainer>
          )}
        </>
      ) : (
        <>
          {body.length > 10 ? (
            <TextContainer>
              {body.slice(0, 10)}
              {openFullText ? (
                <>{body.slice(10)}</>
              ) : (
                <MoreBtn onClick={handleOpenFullText}>...더보기</MoreBtn>
              )}
            </TextContainer>
          ) : (
            <TextContainer>{body}</TextContainer>
          )}
        </>
      )}
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-top: 30px;
`
const TextContainer = styled.span`
  word-break: break-all;
  font-size: 18px;
  text-align: left;
  color: #000;
  width: 700px;
`
const MoreBtn = styled.span`
  cursor: pointer;
  color: #32b67a;
`
