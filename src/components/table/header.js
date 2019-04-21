import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StyledCell } from './styled'

const StyledHeader = styled.div`
    width: 100%;
    font-weight: 700;
    text-transform: uppercase;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: ${props => props.height || 60}px;

    border-bottom: 2px solid #d7e4ef;
    & > div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 15px;
    }
`

const Header = ({ headers, height }) => (
    <StyledHeader height={height}>
        {headers.map((item, index) => (
            <StyledCell key={index} percent={item.widthPercent}>
                {item.name}
            </StyledCell>
        ))}
    </StyledHeader>
)

Header.propTypes = {
    headers: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            widthPercent: PropTypes.number.isRequired,
        }),
    ),
    height: PropTypes.number.isRequired,
}

export default Header
