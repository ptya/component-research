import styled from 'styled-components'

export const FlexRowWrapper = styled.div`
  display: flex;

  & > *:not(:last-child) {
    margin-right: 20px;
  }
`
