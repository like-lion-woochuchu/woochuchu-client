import { useState } from 'react'
import styled from 'styled-components/macro'
import { SubjectText, SignUpInput } from './SignUpLayout'

const Age = () => {
  const [age, setAge] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const toggle = () => {
    setIsVisible(!isVisible)
  }
  const selectAge = (value) => {
    setAge(value)
    toggle()
  }
  return (
    <>
      <AgeDiv>
        <SubjectText>연령대</SubjectText>
        <SignUpInput
          width={'100px'}
          readOnly={true}
          placeholder={'선택'}
          value={age}
          onClick={toggle}
        />
        <SelectTriangle onClick={toggle} />
        {isVisible ? (
          <DropDownDiv>
            <SelectAge margin={'20px'} onClick={(e) => selectAge('10대 이하')}>
              10대 이하
            </SelectAge>
            <StyledHr />
          </DropDownDiv>
        ) : null}
      </AgeDiv>
    </>
  )
}

const AgeDiv = styled.div`
  margin-top: 260px;
  padding: 32px 50px;
  width: 310px;
  height: 90px;
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border-radius: 45px;
  opacity: 1;
  z-index: 3;
`

const DropDownDiv = styled.div`
  width: 226px;
  height: 324px;
  padding: 29px 0px 0px 0px;
  background: #efefef 0% 0% no-repeat padding-box;
  border: 0px;
  border-radius: 0px 0px 45px 45px;
  opacity: 1;
  z-index: 1;

  background-clip: content-box;
`

const SelectTriangle = styled.button`
  margin-left: 13px;
  width: 0px;
  height: 0px;
  border-top: 8px solid #707070;
  border-bottom: 6px solid none;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  opacity: 1;
`

const SelectAge = styled.div`
  margin-top: ${(props) => props.margin || '9px'};
  width: 224px;
  height: 40px;
  padding-left: 30px;
  text-align: left;
  font: normal normal normal 18px/26px Noto Sans CJK KR;
  letter-spacing: 0px;
  color: #1d1e20;
  opacity: 1;
`

const StyledHr = styled.hr`
  color: #e2e2e2;
`
export default Age
