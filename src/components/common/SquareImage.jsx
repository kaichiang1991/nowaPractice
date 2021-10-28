import { forwardRef } from "react"
import styled from "styled-components"

const StyledImageContainer = styled.div `
  width: ${props => props.width || `${25 / 3}%`};
  padding: 10px;
  display: inline-block;

  div{
    width: 100%;
  }

  div img{
    max-width: 100%;
  }
`

const SquareImage = forwardRef(({src, alt, width}, ref) =>{
  return (
    <StyledImageContainer ref={ref} width={width}>
      <div>
        <img src={src} alt={alt} />
      </div>
    </StyledImageContainer>
  )
})

export default SquareImage