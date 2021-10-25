import {Card} from 'antd'
import styled from 'styled-components'

const StyledProductItem = styled.div `
  width: 33.33%;
  padding-left: 16px;
  margin-bottom: 30px;
`

const StyledProductTitle = styled.div `
  text-align: center;
  font-weight: 400;
  font-size: 16px;
  color: black;
`

const StyledProductDescription = styled.div `
  text-align: center;
  color: #1c1d1d;
  margin-top: 5px;
`

const ProdcutItem = ({src, title, description}) => {
  return (
    <StyledProductItem>
      <Card
        hoverable bordered={false}
        cover={<img alt="product-cover" src={src} />}
        >
        <Card.Meta description={
          <>
            <StyledProductTitle>{title}</StyledProductTitle>
            <StyledProductDescription>{description}</StyledProductDescription>
          </>
        } />
      </Card>
    </StyledProductItem>
  )
}

export default ProdcutItem
