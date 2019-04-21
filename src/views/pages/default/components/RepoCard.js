import React from 'react'
import styled from 'styled-components'
import Card from 'components/card'
import { H3, P } from 'components/global'
import { Link } from 'react-router-dom'

const StyledContainer = styled(Card)`
  padding: 10px;
`

const RepoCard = props => {
  const { name, createdAt, html_url, updated_at, language, stargazers_count, description } = props

  return (
    <StyledContainer>
      <H3 as="a" href={html_url}>
        {name}
      </H3>
      {description && <P>{description}</P>}
      <P>{createdAt}</P>
    </StyledContainer>
  )
}

export default RepoCard
