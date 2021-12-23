import styled from 'styled-components/macro'

export default function Button({
  type,
  text,
  disabled,
  margin,
  fontSize,
  handleClick,
}) {
  return (
    <ButtonElement
      type={type}
      disabled={disabled}
      margin={margin}
      fontSize={fontSize}
      onClick={handleClick}
    >
      {text}
    </ButtonElement>
  )
}

const ButtonElement = styled.button`
  margin-top: 15px;
  padding: 32px 40px 32px 40px;
  width: 180px;
  height: 90px;
  background: #f6efe5 0% 0% no-repeat padding-box;
  border-radius: 45px;
  text-align: center;
  font: normal normal bold 18px/26px Noto Sans CJK KR;
  letter-spacing: 0px;
  color: #6f6e6f;
  opacity: 1;
  &:disabled {
    background: #e9e9e9 0% 0% no-repeat padding-box;
    cursor: auto;
  }
`
