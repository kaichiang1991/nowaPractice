import 'antd/dist/antd.css'
import styled from 'styled-components';
import './App.css';
import DefaultLayout from './components/layout/DefaultLayout';
import { Carousel } from 'antd'
import Image from './components/common/Image'
import banner1 from './img/banner/mv01_1296x.jpeg'
import banner2 from './img/banner/mv02_1296x.jpeg'
import Container from './components/common/Container'
import topAbout from './img/top_about.png'
import ImageContainer from './components/common/ImageContainer';
import ArticleContainer from './components/common/ArticleContainer'
import Button from './components/common/Button'
import { BrowserRouter } from 'react-router-dom';
import SectionTitle from './components/common/SectionTitle'

const StyledMainContainer = styled.main `
  
`

const StyledBlogContainer = styled.div `
  margin: 75px 0;
  text-align: center;
  font-size: 16px;

  .title{
    margin-bottom: 30px;
  }
`

const StyledAboutSection = styled.div `
  background-color: #F4F4F4;
  padding: 110px 0 120px 0;
`

const StyledAboutContent = styled.div `
  width: 85%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledProductSection = styled.div `

`

const App = () => {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <StyledMainContainer>
          {/* 跑馬燈 */}
          <Carousel effect='fade' autoplayr>
            <Image src={banner1} height={480}/>
            <Image src={banner2} height={480}/>
          </Carousel>
          {/* 品牌介紹 */}
          <Container center>
            <StyledBlogContainer>
              <p className='title'><strong>お支払い方法の追加について</strong></p>
              <div>
                <p>Amazon Payにてお買い求めいただけるようになりました。</p>
                <p>Amazon.co.jpでご登録されているお届け先、お支払い方法をご利用いただきご購入いただくことができます。
                  <br />
                  入力の手間も省けますので、是非ご利用ください。</p>
              </div>
            </StyledBlogContainer>
          </Container>
          {/* About */}
          <StyledAboutSection>
            <Container center>
              <StyledAboutContent>
                <ImageContainer><img src={topAbout} alt="about-pic" /></ImageContainer>
                <ArticleContainer>
                  <p style={{fontSize: 16, lineHeight: 2}}>
                    ワンコ友達や家族と一緒に楽しめる。<br />
                    好きなファッションやインテリアを選ぶように楽しめる。<br />
                    ワンコnowaがお届けするのはそんなアイテムです。<br />
                    クリエイティブでワンコライフに彩りを。
                  </p>
                  <Button style={{marginTop: 48, width: 190}} text='ABOUT' toPath='/about'/>
                </ArticleContainer>
              </StyledAboutContent>
            </Container>
          </StyledAboutSection>
          {/* Product */}
          <StyledProductSection>
            <Container center>
              <SectionTitle title='nowa cube' content='キューブをあければ、広がる幸せ'/>
            </Container>
          </StyledProductSection>
        </StyledMainContainer>
      </DefaultLayout>
    </BrowserRouter>
  )
}

export default App
