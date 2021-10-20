import styled, { css } from "styled-components";

const Container = styled.div `
  ${props => props.center && css `
    margin: 0 auto;
    width: 80%;
  `}
`

export default Container