import React from 'react'
import { StyledIconLink } from '../../../styles/buttons'
import { StyledTitle } from '../../../styles/typography'
import { MdArrowForward } from 'react-icons/md'
import { StyledMyGameListHeader } from './style'

function MyGameListHeader() {
  return (
    <StyledMyGameListHeader>
      <StyledTitle tag="h1" fontSize='slg' fontWeight={700}>
        Os mais jogados
      </StyledTitle>
      <StyledIconLink>
        <MdArrowForward size={30} />
      </StyledIconLink>
    </StyledMyGameListHeader>
  )
}

export default MyGameListHeader
