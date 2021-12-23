import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function InputBox({
  type,
  title,
  name,
  placeHolder,
  setInput,
  width,
}) {
  const handleInputChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  return (
    <InputContainer>
      <Title>{title}</Title>
      {type === 'datetime-local' ? (
        <Input
          width={width}
          type="datetime-local"
          placeholder={placeHolder}
          name={name}
          onChange={(e) => handleInputChange(e)}
        />
      ) : (
        <Input
          type={type}
          width={width}
          placeholder={placeHolder}
          name={name}
          onChange={(e) => handleInputChange(e)}
        />
      )}
    </InputContainer>
  )
}

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
  padding: 32px 25px;
  /* width: 100%; */
  height: 90px;
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border-radius: 45px;
`
const Title = styled.text`
  display: flex;
  white-space: pre-wrap;
  align-items: center;
  font: normal normal bold 18px/26px Noto Sans CJK KR;
  text-align: left;
  letter-spacing: 0px;
  color: #1d1e20;
  opacity: 1;
`

const Input = styled.input`
  width: ${(props) => props.width || '85%'};
  text-align: left;
  font: normal normal 300 18px/26px Noto Sans CJK KR;
  letter-spacing: 0px;
  color: #707070;
  padding-left: 20px;
  opacity: 1;
  ::placeholder {
    font: normal normal 300 18px/26px Noto Sans CJK KR;
    letter-spacing: 0px;
    color: #dedede;
  }
`
