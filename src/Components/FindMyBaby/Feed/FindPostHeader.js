import React from 'react'
import styled from 'styled-components/macro'
import dateParse from 'Utils/DateParse'

export default function FindPostHeader({ name, date }) {
  return (
    <Wrapper>
      <FindState>찾는 중</FindState>
      <PostedDate>
        마지막 업데이트: {dateParse(date).date} / {dateParse(date).time}
      </PostedDate>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  background-color: #32b67a;
  border-radius: 10px 10px 0px 0px;
  padding: 10px 15px;
`

const FindState = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`

const PostedDate = styled.div`
  color: #fff;
  font-size: 16px;
`
