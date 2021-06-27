import { Input } from 'antd'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  //height: 800px;
  //width: 600px;
  background-color: #8c8c8c;
  border-radius: 5px;
`
export const CustomertLabel = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
  padding: 25px;
`

export const SubjectLabel = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
  padding: 25px;
`

export const content = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
  padding: 25px;
  // min-height: 300px;
`

export const inputContent = styled(Input)`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
  padding: 25px;
  min-height: 300px;
  min-width: 200px;
  resize: vertical;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  width: 100%;
`

export const tags = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
  padding: 25px;
`

export const status = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
  `}
  padding: 25px;
  display: inline-block;
`
