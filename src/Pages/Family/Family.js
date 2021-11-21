import React from 'react'
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
  return (
    <>
      <Layout>
        <FamilyDiv>
          <FamilyIcon />
          <FamilyText>가족이 되어주세요</FamilyText>
          <Toggle />
          <Grid />
        </FamilyDiv>
      </Layout>
    </>
  )
}

export default Family
