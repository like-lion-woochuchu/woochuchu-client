import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Layout from 'Layout/Layout'
import {
  FamilyIcon,
  FamilyText,
  FamilyDiv,
} from 'Components/Family/FamilyLayout'
import Grid from 'Components/Family/Grid'
import Toggle from 'Components/Family/Toggle'

const Family = () => {
  const [animal, setAnimal] = useState([])

  return (
    <>
      <Layout>
        <FamilyDiv>
          <FamilyIcon />
          <FamilyText>가족이 되어주세요</FamilyText>
          <Toggle
            animalList={[
              '강아지',
              '고양이',
              '물고기',
              '새',
              '곤충',
              '파충류 / 양서류',
              '기타',
            ]}
            animal={animal}
            setAnimal={setAnimal}
          />
          {/* <Toggle /> */}
          <Grid />
        </FamilyDiv>
      </Layout>
    </>
  )
}

export default Family
