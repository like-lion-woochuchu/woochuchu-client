import React, { useState } from 'react'
import styled from 'styled-components/macro'
import AnimalData from 'Data/animal.json'

export default function AnimalSelectBtn({
  multiselect,
  selectedAnimal,
  setSelectedAnimal,
}) {
  const animalArr = Object.keys(AnimalData.animalData)

  const handleAnimalSelectBtnClick = (e) => {
    if (selectedAnimal.includes(e.target.innerHTML)) {
      if (!multiselect) {
        setSelectedAnimal('')
        return
      }

      setSelectedAnimal((prev) =>
        prev.filter((anm) => anm !== e.target.innerHTML)
      )
      return
    }
    if (!multiselect) {
      setSelectedAnimal(e.target.innerHTML)
      return
    }

    setSelectedAnimal((prev) => [...prev, e.target.innerHTML])
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
