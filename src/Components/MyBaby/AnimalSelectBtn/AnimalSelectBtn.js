import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function AnimalSelectBtn({ animalArr }) {
  const [animal, setAnimal] = useState('')

  const handleVersionBtnClick = (e) => {
    setAnimal(e.target.value)
    console.log(animal)
  }

  return (
    <BtnContainer>
      {animalArr.map((animal, idx) => {
        return (
          <AnimalBtnLabel id="animal" key={idx}>
            <AnimalRadio
              type="radio"
              name="animal"
              id="animal"
              value={animal}
              onChange={handleVersionBtnClick}
            ></AnimalRadio>
            <AnimalRadioBtn>{animal}</AnimalRadioBtn>
          </AnimalBtnLabel>
        )
      })}
    </BtnContainer>
  )
}

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
`
const AnimalBtnLabel = styled.label`
  margin: 0 10px;
`
const AnimalRadio = styled.input`
  visibility: hidden;
  appearance: none;
`
const AnimalRadioBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  border: solid 0.2px #707070;
  border-radius: 20px;
  padding: 13px 19.96px;
  transition: all 0.5s ease 0s;
  cursor: pointer;
  ${AnimalRadio}:checked + && {
    background-color: #fbf3da;
    border: none;
  }
  &:hover {
    box-shadow: 0px 3px 15px -5px rgba(0, 0, 0, 0.3);
  }
`