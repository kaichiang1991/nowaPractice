import styled from "styled-components";
import { Link } from 'react-router-dom'

const StyledButton = styled.div `
  background-color: #111;
  font-size: 15px;
  font-weight: bold;
  line-height: 1.42;
  letter-spacing: .3em;
  
  a{
    display: block;
    color: #fff;
    padding: ${props => props.padding || '14px 20px'};
  }
`

const Button = ({text, style, toPath}) => {
  const _text = text || 'Default Button'
  const _path = toPath || '/'
  return (
    <StyledButton style={style}>
      <Link to={_path}>{_text}</Link>
    </StyledButton>
  )
}

export default Button
