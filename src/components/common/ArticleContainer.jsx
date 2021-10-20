import styled from "styled-components";

const ArticleContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: ${props => props.width || '47%'};
`

export default ArticleContainer