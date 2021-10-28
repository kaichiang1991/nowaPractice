import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { forwardRef, useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import wanbassador1 from '../../img/wanbassador/wanbassador01.jpeg'
import wanbassador2 from '../../img/wanbassador/wanbassador02.jpeg'
import wanbassador3 from '../../img/wanbassador/wanbassador03.jpeg'
import wanbassador4 from '../../img/wanbassador/wanbassador04.jpeg'
import wanbassador5 from '../../img/wanbassador/wanbassador05.jpeg'

const arrowPadding = '20px'
const StyledWanbassador = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 300px;
`

const ArrowContainer = styled.div `
  display: inline-block;
  cursor: pointer;

  ${props => props.left && css`
    padding-left: ${arrowPadding};
  `}

  ${props => props.right && css`
    padding-right: ${arrowPadding};
  `}
`

// 固定顯示範圍
const ContentContainer = styled.div `
  overflow-x: auto;
`

const AllImageContainer = styled.div `
  width: 300%;
`

const StyledImageContainer = styled.div `
  width: ${25/3}%;
  padding: 10px;
  display: inline-block;

  div{
    width: 100%;
  }

  div img{
    max-width: 100%;
  }
`

const SquareImage = forwardRef(({ src }, ref) => {
  return (
    <StyledImageContainer ref={ref}>
      <div>
        <img src={src} alt="wanbassador" />
      </div>
    </StyledImageContainer>
  )
})

const Wanbassador = () => {

  const scrollContainerRef = useRef()
  const imgRef = useRef()

  const handleClick = (right)=>{
    return ()=>{
      const {current} = scrollContainerRef
      const moveX = imgRef.current.offsetWidth
      current.scrollBy(right? moveX: -moveX, 0)
    }
  }

  return (
    <StyledWanbassador>
      <ArrowContainer left onClick={handleClick(false)}><LeftOutlined style={{fontSize: 32}}/></ArrowContainer>
      <ContentContainer ref={scrollContainerRef}>
        <AllImageContainer>
          <SquareImage src={wanbassador1} ref={imgRef}/>
          <SquareImage src={wanbassador2} />
          <SquareImage src={wanbassador3} />
          <SquareImage src={wanbassador4} />
          <SquareImage src={wanbassador5} />
          <SquareImage src={wanbassador5} />
        </AllImageContainer>
      </ContentContainer>
      <ArrowContainer right onClick={handleClick(true)}><RightOutlined style={{fontSize: 32}}/></ArrowContainer>
    </StyledWanbassador>
  )
}

export default Wanbassador
