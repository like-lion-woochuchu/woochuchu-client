import styled from 'styled-components/macro'
import { AnimalDivText, AnimalSelect, ErrorMessage } from './SignUpLayout'

const Animal = (props) => {
  const set = (id) => {
    props.animal.has(id)
      ? props.setAnimal(
          new Set(Array.from(props.animal).filter((a) => a !== id))
        )
      : props.setAnimal(new Set([...props.animal, id]))
  }
  return (
    <>
      <AnimalText>관심 동물</AnimalText>
      <SelectText>(선택)</SelectText>
      {props.error ? (
        <ErrorMessage margin={'3px 0px 3px 30px'}>{props.error}</ErrorMessage>
      ) : null}
      <SelectArea>
        <AnimalSelect
          width={'150px'}
          background={props.animal.has(1) ? '#FBF3DA' : null}
          onClick={() => set(1)}
        >
          <AnimalDivText>강아지</AnimalDivText>
        </AnimalSelect>
        <AnimalSelect
          width={'150px'}
          background={props.animal.has(2) ? '#FBF3DA' : null}
          onClick={() => set(2)}
        >
          <AnimalDivText>고양이</AnimalDivText>
        </AnimalSelect>
        <AnimalSelect
          width={'150px'}
          background={props.animal.has(3) ? '#FBF3DA' : null}
          onClick={() => set(3)}
        >
          <AnimalDivText>물고기</AnimalDivText>
        </AnimalSelect>
        <AnimalSelect
          background={props.animal.has(4) ? '#FBF3DA' : null}
          onClick={() => set(4)}
        >
          <AnimalDivText>새</AnimalDivText>
        </AnimalSelect>
      </SelectArea>
      <SelectArea>
        <AnimalSelect
          margin={'20px 10px 0px 0px'}
          width={'134px'}
          background={props.animal.has(5) ? '#FBF3DA' : null}
          onClick={() => set(5)}
        >
          <AnimalDivText>곤충</AnimalDivText>
        </AnimalSelect>
        <AnimalSelect
          width={'215px'}
          margin={'20px 10px 0px 0px'}
          background={props.animal.has(6) ? '#FBF3DA' : null}
          onClick={() => set(6)}
        >
          <AnimalDivText>파충류/양서류</AnimalDivText>
        </AnimalSelect>
        <AnimalSelect
          width={'134px'}
          margin={'20px 10px 0px 0px'}
          background={props.animal.has(7) ? '#FBF3DA' : null}
          onClick={() => set(7)}
        >
          <AnimalDivText>기타</AnimalDivText>
        </AnimalSelect>
      </SelectArea>
    </>
  )
}

const AnimalText = styled.text`
  margin: 70px 8px 30px 30px;
  width: 70px;
  height: 26px;
  text-align: left;
  font: normal normal bold 18px/26px Noto Sans KR;
  letter-spacing: 0px;
  color: #1d1e20;
  opacity: 1;
`
const SelectText = styled.text`
  margin-top: 74px;
  width: 35px;
  height: 20px;
  text-align: left;
  font: normal normal normal 14px/20px Noto Sans KR;
  letter-spacing: 0px;
  color: #1d1e20;
  opacity: 1;
`
const SelectArea = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: row;
`

export default Animal
