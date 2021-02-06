// libs
import styled from 'styled-components'

// utils
import { vars } from '../../../styles/vars'

// images
import itemImg from '../../../images/intro/item-1.png'
import introBg from '../../../images/intro/bg.png'

// components
import { Container } from '../../UI/Container/Container'

const IntroSection = () => {
    return (
        <Wrapper>
            <Container>
                <div>
                    <Slide>
                        <div>
                            <SlideTitle>Bestseller</SlideTitle>
                            <SlideTitleImg src={itemImg} alt='Фото Hoco W22' />
                        </div>

                        <Product>
                            <ProductSubtitle>Ваш выбор</ProductSubtitle>
                            <ProductTitle>Hoco W22</ProductTitle>
                            <ProductBtn type='button'>Купить</ProductBtn>
                        </Product>
                    </Slide>
                </div>
            </Container>
        </Wrapper>
    )
}

export default IntroSection

// styles
const Wrapper = styled.section`
    position: relative;
    z-index: 0;
    background-image: url(${introBg});  
    background-color: ${vars.colorPurple};
`

const Slide = styled.div`
    min-height: 705px;
    display: flex;
    align-items: center;
    justify-content: center;    

    @media (max-width: 600px) {
        min-height: 525px;   
    }
    
    @media (max-width: 440px) {
        min-height: 400px;   
    }

    @media (max-width: 375px) {
        min-height: 370px;   
    }
`

const SlideTitle = styled.h2`
    position: relative;
    font-size: 192px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;

    @media (max-width: 1160px) {
        font-size: 152px;   
    }

    @media (max-width: 920px) {
        font-size: 122px;   
    }

    @media (max-width: 740px) {
        font-size: 100px;   
    }

    @media (max-width: 600px) {
        font-size: 72px;   
    }

    @media (max-width: 440px) {
        font-size: 48px;   
    }
`

const SlideTitleImg = styled.img`
    position: absolute;
    z-index: 10;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: 920px) {
        max-width: 400px;   
    }

    @media (max-width: 640px) {
        max-width: 300px;   
    }

    @media (max-width: 600px) {
        max-width: 215px;   
    }

    @media (max-width: 440px) {
        max-width: 160px;   
    }
`

const Product = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 590px;
    height: 100%;
    max-height: 570px;
    border: 20px solid rgba(255,255,255,.07);
    text-align: center;

    @media (max-width: 740px) {
        max-width: 80%;
        max-height: 80%;   
    }

    @media (max-width: 640px) {
        border-width: 10px;   
    }
`

const ProductSubtitle = styled.span`
    display: block;
    font-weight: bold;
    font-size: 24px;
    text-transform: uppercase;
    color: #8772C2;
    margin-top: 15px;

    @media (max-width: 440px) {
        font-size: 12px;
        color: rgb(127, 106, 184);
    }
`

const ProductTitle = styled.h1`
    font-weight: bold;
    font-size: 64px;
    text-transform: uppercase;
    color: #8772C2;

    @media (max-width: 440px) {
        font-size: 33px;
        color: rgb(127, 106, 184);
    }
`

const ProductBtn = styled.button`
    width: 100%;
    max-width: 250px;
    font-weight: bold;
    font-size: 13px;
    color: #fff;
    background: #8B75C8;
    border: 1px solid #fff;
    border-radius: 220px;
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    padding: 21px 0px;
    transition: all .2s linear;
    cursor: pointer;

    &:hover {
        background: #fff;
        color: ${vars.colorPurple};
    }

    @media (max-width: 440px) {
        width: 230px;
        padding: 17px 0px;
        margin: auto auto 10px;   
    }
`
