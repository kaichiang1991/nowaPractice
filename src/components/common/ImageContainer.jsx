import styled from "styled-components";

const ImageContainer = styled.div `
  width: ${props => props.width || '45%'};

  img{
    max-width: 100%;
  }
`

export default ImageContainer