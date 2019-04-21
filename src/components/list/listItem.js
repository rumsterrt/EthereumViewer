import React from 'react'
import styled, { css } from 'styled-components'
import { withRouter } from 'react-router-dom'

const StyledContainer = styled.div`
    width: 100%;
    border-radius: 2px;
    border: ${props => props.border || '1px solid #dde1e6'};
    background-color: ${props => props.background || '#fff'};
    padding: 20px 35px;
    margin-bottom: ${props => props.spaceBetween || '0'}
        ${props =>
            (props.onClick || props.to) &&
            css`
                cursor: pointer;
                &:hover .list_item_title {
                    text-decoration: underline;
                }
            `};

    & .list_item__hover_stop:hover {
        cursor: default;
    }
    & .list_item__hover_stop:hover ~ div {
        cursor: default;
        .list_item_title {
            text-decoration: none;
        }
    }
`

const ListItem = props => {
    const { children, history, ...rest } = props
    const { to, onClick } = rest
    return (
        <StyledContainer
            {...rest}
            onClick={
                onClick || to
                    ? () => {
                          if (onClick) {
                              onClick()
                          }
                          if (to) {
                              history.push(to)
                          }
                      }
                    : null
            }
        >
            {children}
        </StyledContainer>
    )
}

export default withRouter(ListItem)
