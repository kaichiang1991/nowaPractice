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
import { BrowserRouter, Link } from 'react-router-dom';
import SectionTitle from './components/common/SectionTitle'
import collection from './img/product/feature_collection_1080x.jpeg'
import ProdcutItem from './components/product/ProdcutItem'
import product1 from './img/product/nowacube01_540x.jpeg'
import product2 from './img/product/nowacube02_540x.jpeg'
import product3 from './img/product/nowacube03_540x.jpeg'
import product4 from './img/product/nowacube04_540x.jpeg'
import product5 from './img/product/nowacube05_cb766ea8-9c77-4cf2-9335-1779d283f967_540x.jpeg'
import product6 from './img/product/nowacube06_540x.jpeg'
import SeriesItem from './components/series/SeriesItem'
import series1 from './img/nowa/img_collection_bottle_01_1080x.jpeg'
import series2 from './img/nowa/img_collection_toto_01_1080x.jpeg'
import series3 from './img/nowa/img_collection_tumbler_01_1080x.jpeg'
import series4 from './img/nowa/nowaCube_Top_thm_720x.jpeg'
import CustomCaraousel from './components/carousel/CustomCaraousel';
import journal1 from './img/journal/top_journal01_pc_1080x_f7a2fc34-e479-4797-84f4-e0a6e77d6c0f_1080x.jpeg'
import journal2 from './img/journal/top_journal01_pc_1080x.jpeg'
import journal3 from './img/journal/top_journal02_pc_1080x.jpeg'

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

const StyledSeriesSection = styled.div `
  
`

const StyledSeriesContainer = styled.div `
  margin-top: 48px;
  margin-left: -16px;

  display: flex;
  flex-wrap: wrap;
`

const StyledJournalSection = styled.div `
  background-color: #F5F5F5;
`

const StyledJournalContainer = styled.div `
  width: 100%;
  overflow: auto;
`

const InlineImageContainer = styled(ImageContainer)`
  display: inline-block;
  width: 33.33%;

  .img{
    width: 80%;
  }
`

const StyledLinkContainer = styled.div `
  text-align: center;
  margin-bottom: 80px;

  a{
    color: #000;
    text-decoration: underline;
    text-underline-offset: 8px;
  }
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
              <SectionTitle title='nowa cube' content='キューブをあければ、広がる幸せ' />
              <StyledGalleryContainer>
                <ImageContainer width="100%" style={{margin: '12px 0'}}><img src={collection} alt="collection" /></ImageContainer>
                <StyledProductContainer>
                  <ProdcutItem src={product1} title='nowa cube 全犬種セット ' description='¥2,750'/>
                  <ProdcutItem src={product2} title='ミニシュナcube 5個セット（ほろにが抹茶豆 ' description='¥2,750'/>
                  <ProdcutItem src={product3} title='トイプーcube 5個セット（黒蜜きなこ豆 ' description='¥2,750'/>
                  <ProdcutItem src={product4} title='チワワcube 5個セット（五色豆）' description='¥2,750'/>
                  <ProdcutItem src={product5} title='フレブルcube 5個セット（グリーンピスタチオ）' description='¥2,750'/>
                  <ProdcutItem src={product6} title='豆柴cube 5個セット（カシュー醤油）' description='¥2,750'/>
                </StyledProductContainer>
              </StyledGalleryContainer>
            </Container>
          </StyledProductSection>
          {/* Series */}
          <StyledSeriesSection>
            <Container center>
              <SectionTitle title='nowa series' content='ワンコライフに＋クリエイティブ'/>
              <StyledSeriesContainer>
                <SeriesItem src={series1} tag='nowa bottle'/>
                <SeriesItem src={series2} tag='nowa tote'/>
                <SeriesItem src={series3} tag='nowa tumbler'/>
                <SeriesItem src={series4} tag='nowa cube'/>
              </StyledSeriesContainer>
            </Container>
          </StyledSeriesSection>
          {/* Journal */}
          <StyledJournalSection>
            <SectionTitle style={{paddingTop: 80}} title='Journal' content='ワンコライフに＋クリエイティブ' />
            <StyledJournalContainer>
              <CustomCaraousel>
                <InlineImageContainer width='100%'><img src={journal1} alt="journal1" /></InlineImageContainer>
                <InlineImageContainer width='100%'><img src={journal2} alt="journal2" /></InlineImageContainer>
                <InlineImageContainer width='100%'><img src={journal3} alt="journal3" /></InlineImageContainer>
              </CustomCaraousel>
              <StyledLinkContainer>
                <Link to='/journal'><span>すべてを見る</span></Link>
              </StyledLinkContainer>
            </StyledJournalContainer>
          </StyledJournalSection>
        </StyledMainContainer>
      </DefaultLayout>
    </BrowserRouter>
  )
}

export default App
