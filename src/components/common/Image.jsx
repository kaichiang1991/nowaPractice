import styled from "styled-components";

const Image = styled.div `
  background-image: ${props => `url(${props.src})`};
  background-size: cover;
  background-position: center;

  height: ${props => (props.height || '300') + 'px'};
`

export default Image