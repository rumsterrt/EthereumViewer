import React from 'react'
import styled, { css } from 'styled-components'
import defaultImage from 'styles/images/default-user-avatar.png'
import Image from './image'

const StyledCommon = styled.div`
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${props =>
      props.rounded &&
      css`
        border-radius: 50%;
      `};
  }
`

const DefaultAvatar = styled(StyledCommon)`
  max-width: ${props => props.width || '170px'};
  height: ${props => props.height || '170px'};
  border-radius: 2px;
  text-align: center;
`

const Avatar = styled(StyledCommon)`
  height: ${props => props.height || '170px'};
  overflow: hidden;
  max-width: ${props => props.width || '170px'};
`

export default ({ src, className, ...props }) =>
  src ? (
    <Avatar className={className} {...props}>
      <Image src={src} alt="" />
    </Avatar>
  ) : (
    <DefaultAvatar className={className} {...props}>
      <img src={defaultImage} alt="" />
    </DefaultAvatar>
  )
