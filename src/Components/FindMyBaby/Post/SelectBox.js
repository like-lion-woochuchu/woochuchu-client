import styled from 'styled-components/macro'

export default function SelectBox({
  listArr,
  handleChange,
  value,
  name,
  placeholder,
  title,
  width,
}) {
  return (
    <SelectWrapper>
      <Title>{title}</Title>
      <Select
        onChange={(e) => handleChange(e)}
        value={value}
        name={name}
        width={width}
      >
        <Option value="" disabled selected hidden>
          {placeholder}
        </Option>
        {listArr &&
          listArr.map((item, index) => (
            <Option key={index} value={item}>
              {item}
            </Option>
          ))}
      </Select>
    </SelectWrapper>
  )
}

const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding: 32px 25px;
  width: 100%;
  height: 90px;
  background: #f8f8f8 0% 0% no-repeat padding-box;
  border-radius: 45px;
`
const Title = styled.div`
  display: flex;
  white-space: pre-wrap;
  align-items: center;
  font: normal normal bold 18px/26px Noto Sans CJK KR;
  text-align: left;
  letter-spacing: 0px;
  color: #1d1e20;
  opacity: 1;
`

const Select = styled.select`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || '85%'};
  font: normal normal 300 18px/26px Noto Sans CJK KR;
  border: none;
  outline: none;
  background-image: url('https://ifh.cc/g/LHB1YF.png');
  background-size: 17px;
  background-repeat: no-repeat;
  background-color: #f8f8f8;
  appearance: none;
  -webkit-appearance: none;
  background-position-x: 96%;
  background-position-y: 50%;
`
const Option = styled.option`
  padding: 30px;
`
