import styled from "styled-components"
import ImageContainer from '../common/ImageContainer'

const StyledSeriesItem = styled.div `
  width: 50%;
  padding: 0 0 16px 16px;

  :before{
    content: '${props => props.tag || 'aaa'}';
    width: 200px;
    background-color: rgba(0, 0, 0, 0.3);
    text-align: center;
    line-height: 4em;
    color: #fff;

    display: block;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
`

const StyledImageContainer = styled(ImageContainer) `
  :after{
    content: '';
    background-color: rgba(0, 0, 0, .5);

    display: block;
    width: 100%;
    height: 100%;
    max-height: 100%;

    position: relative;
    top: -100%;
  }
`

const SeriesItem = ({src, tag}) => {
  return (
    <StyledSeriesItem tag={tag}>
      <StyledImageContainer width='100%'><img src={src} alt="series1" /></StyledImageContainer>
    </StyledSeriesItem>
  )
}

export default SeriesItem
