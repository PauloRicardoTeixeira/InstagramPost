import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    width: 100%;
    height: 8vh;
  `}
`
