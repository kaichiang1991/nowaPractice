import { Link } from "react-router-dom"
import styled from "styled-components"
import logo from '../../img/logo_01_x80@2x.png'

const StyledAppFooter = styled.footer `
  background-color: #000;
  padding: 60px 25px; 

  display: flex;
`

const StyledLogoContainer = styled.div `
  width: 15%;
  display: inline-block;

  img{
    max-width: 100%;
  }
`

const StyledNavContainer = styled.div `
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  a{
    color: #fff;
  }
`

const StyledNavUl = styled.ul `

`

const StyledNavList = styled.li `
  display: inline-block;
  padding: 12px;
`

const FooterNavItem = ({link, title}) => {
  return (
    <StyledNavList><Link to={link}>{title}</Link></StyledNavList>
  )
}

const Footer = () => {
  return (
    <StyledAppFooter>
      <StyledLogoContainer><img src={logo} alt="logo" /></StyledLogoContainer>
      <StyledNavContainer>
        <StyledNavUl>
          <FooterNavItem title='運営会社' link='/a'/>
          <FooterNavItem title='プライバシーポリシー' link='/a'/>
          <FooterNavItem title='特定商取引法' link='/a'/>
          <FooterNavItem title='よくある質問' link='/a'/>
          <FooterNavItem title='お問い合わせ' link='/a'/>
          <FooterNavItem title='利用規約' link='/a'/>
          <FooterNavItem title='公式Instagram' link='/instagram'/>
        </StyledNavUl>
      </StyledNavContainer>
    </StyledAppFooter>
  )
}

export default Footer
