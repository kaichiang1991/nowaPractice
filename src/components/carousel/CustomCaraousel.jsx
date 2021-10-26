import styled from "styled-components"

const StyledCaraouselContainer = styled.div `
  width: 300%;
  margin: 40px 0;
`

const StyledPictureContainer = styled.div `
  margin: 0 120px;
`

const CustomCaraousel = ({children}) => {
  return (
    <StyledCaraouselContainer>
      <StyledPictureContainer>
        {children}
      </StyledPictureContainer>
    </StyledCaraouselContainer>
  )
}

export default CustomCaraousel
