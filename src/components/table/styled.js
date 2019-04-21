import styled from 'styled-components'

export const StyledTable = styled.div`
    color: black;
    background: #fff;
    overflow: visible;
    height: ${props => props.height}px;
    width: ${props => props.width}px;
`

export const StyledCell = styled.div`
    white-space: normal;
    box-sizing: border-box;
    padding: 15px;
    flex: 0 0 ${props => props.percent}%;
    :not(:last-of-type) {
        border-right: 1px solid #e5e5e5;
    }
`

export const StyledTableGrid = styled.div`
    width: 100%;
    overflow: auto;
    height: calc(100% - 60px);
`
