import React from 'react'
import theme from 'styles/theme'
import styled from 'styled-components'
import { FlexCol } from 'components/global'

const StyledCard = styled(FlexCol)`
  background: ${theme.bg.default};
  width: 100%;
  border: 1px solid ${theme.bg.border};
`

export default props => <StyledCard {...props}>{props.children}</StyledCard>
