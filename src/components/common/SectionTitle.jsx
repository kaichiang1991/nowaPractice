import styled from "styled-components";

const StyledSectionTitle = styled.div `
  text-align: center;
  margin-top: 120px;

  .section-title{
    margin-bottom: 0;
    font-size: 32px;
  }
 
  .section-content{
    font-size: 16px;
  }
`

const SectionTitle = ({title, content}) => {
  return (
    <StyledSectionTitle>
      <p className='section-title'><strong>{title}</strong></p>
      <p className='section-content'>{content}</p>
    </StyledSectionTitle>
  )
}

export default SectionTitle
