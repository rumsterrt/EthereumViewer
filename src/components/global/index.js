import styled, { css } from 'styled-components'
import theme from 'styles/theme'

console.log('theme', theme)

export const fontStack = css`
  font-family: 'Roboto', 'Helvetica', sans-serif;
`

export const P = styled.p`
  color: ${theme.text.default};
  ${fontStack};
  font-weight: 400;
  margin: 0;
  padding: 0;
  line-height: 1.4;
  font-size: 14px;
`

export const H1 = styled.p`
  ${fontStack};
  color: ${theme.text.default};
  font-weight: 900;
  font-size: 25px;
  line-height: 1.3;
  margin: 0;
  padding: 0;
`

export const H2 = styled.p`
  ${fontStack};
  color: ${theme.text.default};
  font-weight: 900;
  font-size: 22px;
  line-height: 1.3;
  margin: 0;
  padding: 0;
`

export const H3 = styled.p`
  ${fontStack};
  color: ${theme.text.default};
  font-weight: 900;
  font-size: 20px;
  line-height: 1.3;
  margin: 0;
  padding: 0;
`

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`
