import styled from "styled-components"
import logo_strore from '../../img/logo_store.png'
import { UserOutlined, SearchOutlined, ShoppingCartOutlined} from '@ant-design/icons'

const StyledAppHeader = styled.header `
  padding: 31px 40px;

  display: flex;
  justify-content: space-between;
`

const StyledLogoContainer = styled.div `
  width: 20%;
`

// 導覽列選單
const StyledNavBarContainer = styled.div `
  width: 60%;
`

const StyledUlElement = styled.ul `
    height: 100%;
    margin: 0;
    padding: 0;

    display: flex;
    align-items: center;
    float: right;
    list-style: none;
`

const StyledNavBarItem = styled.li `
  margin: 7.5px 15px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: .2em;

  :after{
    content: '';

    position: relative;
    top: 8px;

    display: block;
    background-color: black;
    width: 0;
    height: 2px;

    transition: width .3s;
  }

  :hover:after{
    width: 100%;
  }
`

const StyledNavIconContainer = styled.div `
  /* width: 20%; */
`

const StyledNavIcon = styled.li `
  padding: 7.5px 12px;

  span{
    font-size: 28px;
  }
`

const Header = () => {
  return (
    <StyledAppHeader>
      <StyledLogoContainer>
        <img src={logo_strore} alt="nowa-logo" height="46.48px" />
      </ StyledLogoContainer>
      <StyledNavBarContainer>
        <StyledUlElement>
          <StyledNavBarItem>PRODUCT</StyledNavBarItem>
          <StyledNavBarItem>JOURNAL</StyledNavBarItem>
          <StyledNavBarItem>ABOUT</StyledNavBarItem>
        </StyledUlElement>
      </StyledNavBarContainer>
      <StyledNavIconContainer>
        <StyledUlElement>
          <StyledNavIcon><UserOutlined /></StyledNavIcon>
          <StyledNavIcon><SearchOutlined /></StyledNavIcon>
          <StyledNavIcon><ShoppingCartOutlined /></StyledNavIcon>
        </StyledUlElement>
      </StyledNavIconContainer>
    </StyledAppHeader>
  )
}

export default Header
