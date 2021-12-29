import React, { useState } from 'react'
import { useHistory } from 'react-router'
import Layout from 'Layout/Layout'
import {
  FamilyIcon,
  FamilyText,
  FamilyDiv,
} from 'Components/BeMyBaby/BeMyBabyLayout'
import Grid from 'Components/BeMyBaby/Grid'
import Toggle from 'Components/BeMyBaby/Toggle'
import ScrollTopBtn from 'Components/SideBtn/ScrollTopBtn'
import WriteBtn from 'Components/SideBtn/WriteBtn'

export default function Family() {
  const [animal, setAnimal] = useState([])

  const history = useHistory()

  return (
    <>
      <Layout>
        <FamilyDiv>
          <FamilyIcon />
          <FamilyText>가족이 되어주세요</FamilyText>
          <Toggle multiselect={true} animal={animal} setAnimal={setAnimal} />
          <Grid type={'bemybaby'} animal={animal} />
        </FamilyDiv>
        <WriteBtn
          handleClick={() => {
            history.push('/bemybaby_write')
          }}
        />
        <ScrollTopBtn />
      </Layout>
    </>
  )
}
