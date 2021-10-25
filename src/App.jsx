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
import collection from './img/product/feature_collection_1080x.jpeg'
import ProdcutItem from './components/product/ProdcutItem'
import product1 from './img/product/nowacube01_540x.jpeg'
import product2 from './img/product/nowacube02_540x.jpeg'
import product3 from './img/product/nowacube03_540x.jpeg'
import product4 from './img/product/nowacube04_540x.jpeg'
import product5 from './img/product/nowacube05_cb766ea8-9c77-4cf2-9335-1779d283f967_540x.jpeg'
import product6 from './img/product/nowacube06_540x.jpeg'

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

const StyledGalleryContainer = styled.div `
  display: flex;
  flex-direction: column;
`

const StyledProductContainer = styled.div `
  margin-top: 10px;
  margin-left: -16px;

  display: flex;
  flex-wrap: wrap;
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
              <StyledGalleryContainer>
                <ImageContainer width="100%" style={{margin: '12px 0'}}><img src={collection} alt="collection" /></ImageContainer>
                <StyledProductContainer>
                  <ProdcutItem src={product1} title='nowa cube 全犬種セット' description='¥2,750'/>
                  <ProdcutItem src={product2} title='nowa cube 全犬種セット' description='¥2,750'/>
                  <ProdcutItem src={product3} title='nowa cube 全犬種セット' description='¥2,750'/>
                  <ProdcutItem src={product4} title='nowa cube 全犬種セット' description='¥2,750'/>
                  <ProdcutItem src={product5} title='nowa cube 全犬種セット' description='¥2,750'/>
                  <ProdcutItem src={product6} title='nowa cube 全犬種セット' description='¥2,750'/>
                </StyledProductContainer>
              </StyledGalleryContainer>
            </Container>
          </StyledProductSection>
        </StyledMainContainer>
      </DefaultLayout>
    </BrowserRouter>
  )
}

export default App
