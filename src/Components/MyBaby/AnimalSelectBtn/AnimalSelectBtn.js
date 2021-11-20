import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function AnimalSelectBtn({
  animalArr,
  selectedAnimal,
  setSelectedAnimal,
}) {
  const handleAnimalSelectBtnClick = (e) => {
    console.log(e.target.innerHTML)
    if (selectedAnimal.includes(e.target.innerHTML)) {
      setSelectedAnimal((prev) =>
        prev.filter((anm) => anm !== e.target.innerHTML)
      )
      return
    }
    setSelectedAnimal((prev) => [...prev, e.target.innerHTML])
    console.log(selectedAnimal)
  }

  return (
    <BtnContainer>
      {animalArr.map((animal, idx) => {
        return (
          <AnimalBtn
            key={idx}
            selected={selectedAnimal.includes(animal)}
            onClick={(e) => handleAnimalSelectBtnClick(e)}
          >
            {animal}
          </AnimalBtn>
        )
      })}
    </BtnContainer>
  )
}

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const AnimalBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px #dbdbdb;
  border-radius: 20px;
  padding: 14px 22px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  ${({ selected }) =>
    selected === true &&
    `    background-color: #fbf3da;

`}
`
