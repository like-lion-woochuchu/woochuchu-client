import React from 'react'
import styled from 'styled-components/macro'
import dateParse from 'Utils/DateParse'

export default function FindPostHeader({ findState, date }) {
  return (
    <Wrapper findState={findState}>
      {findState ? <FindState>찾음</FindState> : <FindState>찾는 중</FindState>}
      <PostedDate>
        {`마지막 업데이트: ${dateParse(date).date} \t ${dateParse(date).time}`}
      </PostedDate>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  ${({ findState }) =>
    findState === 1 &&
    `      background-color: #E9E9E9 !important;
    color: #707070 !important;
`}
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  background-color: #32b67a;
  border-radius: 10px 10px 0px 0px;
  padding: 10px 15px;
`

const FindState = styled.div`
  font-size: 20px;
  font-weight: 600;
`

const PostedDate = styled.div`
  font-size: 16px;
  white-space: pre-wrap;
`
