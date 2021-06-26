import styled, { css } from 'styled-components'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    width: 8vh;
    height: 100vh;
  `}
`
