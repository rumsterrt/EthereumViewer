import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { StyledCell } from './styled'

const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #e5e5e5;
    :hover {
        background: #f2f2f2;
    }
    & > div {
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 15px;
    }
`

const Header = ({ headers, data }) => (
    <StyledRow>
        {headers.map((item, index) => (
            <StyledCell key={index} percent={item.widthPercent}>
                {data[index]}
            </StyledCell>
        ))}
    </StyledRow>
)

Header.propTypes = {
    headers: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            widthPercent: PropTypes.number.isRequired,
        }),
    ),
    data: PropTypes.arrayOf(PropTypes.element),
}

export default Header
