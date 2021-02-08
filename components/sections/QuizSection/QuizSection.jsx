// core
import Link from 'next/link'

// libs
import styled from 'styled-components'

// utils
import { vars } from '../../../styles/vars'

// images
import backgroundImg from '../../../images/intro/bg.png'
import imgBox from '../../../images/quiz/img-box.png'

// components
import { Container } from '../../UI/Container/Container'
import Button from '../../UI/Button/Button'

const QuizSection = () => {
    return (
        <Wrapper>
            <Container>
                <Inner>
                    <Content>
                        <Title>Подберем 5 лучших моделей <br />
                            <span>беспроводных наушников <br /> под Ваши цели</span>
                        </Title>

                        <SubTitle>
                            Пройдите тест и получите <span>скидку до 10%</span> на первую покупку
                        </SubTitle>

                        <BtnWrap>
                            <Link href='/quiz' passHref>
                                <Button variant='green' full large>Пройти тест и получить скидку!</Button>
                            </Link>
                        </BtnWrap>
                    </Content>

                    <ImgBox>
                        <ImgBoxInner>
                            <ImgBoxText> 5 best <span>models</span> </ImgBoxText>
                        </ImgBoxInner>

                        <img src={imgBox} alt='Фото мужчины в беспроводных наушниках' />
                    </ImgBox>

                    <BtnWrapMobail>
                        <Link href='/quiz' passHref>
                            <Button variant='green' full large>Пройти тест и получить скидку!</Button>
                        </Link>
                    </BtnWrapMobail>
                </Inner>
            </Container>
        </Wrapper>

    )
}

export default QuizSection

// styles
const Wrapper = styled.section`
    background: url(${backgroundImg});
    background-color: ${vars.colorPurple};
    padding-top: 20px;

    @media (max-width: 1120px) {
        padding: 50px 0;
    }
`

const Inner = styled.div`
    position: relative;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1120px) {
        flex-wrap: wrap; 
        justify-content: center;
        flex-direction: column;
    }
`

const Content = styled.div`
    position: relative;
    z-index: -1;
`

const Title = styled.h2`
    max-width: 610px;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    color: #fff;
    margin-bottom: 50px;

    span {
        font-weight: 300;
    }

    @media (max-width: 1120px) {
        text-align: center;
    }

    @media (max-width: 540px) {
        font-size: 34px;
        font-size: 24px; 
        line-height: 28px;
        margin-bottom: 25px;  
    }   
`

const SubTitle = styled.p`
    max-width: 410px;
    font-size: 20px;
    line-height: 30px;
    color: #fff;
    margin-bottom: 50px;

    span {
        font-weight: 900;
        color: #ADFF00;
    }

    @media (max-width: 1120px) {
        text-align: center;
        max-width: 100%;
        margin-bottom: 80px;
    }
`

const BtnWrap = styled.div`
    width: 100%;
    max-width: 340px;

    @media (max-width: 1120px) {
        display: none;
    }
`

const BtnWrapMobail = styled.div`
    width: 100%;
    max-width: 340px;
    display: none;

    @media (max-width: 1120px) {
        display: block;
    }
`

const ImgBox = styled.div`
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 605px;
    height: 551px;
    display: flex;
    align-items: center;
    justify-content: center;   
    padding-left: 20px;

    img {
        position: absolute;
        display: block;
        max-width: 100%;
        height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        @media (max-width: 1120px) {
            top: 40.5%;
        }

        @media (max-width: 650px) {
            top: 37.5%;
        }        
    }

    @media (max-width: 650px) {
        padding-left: 0; 
        max-width: 359px;
        max-height: 304px;
        margin-bottom: 30px;
    }

    @media (max-width: 375px) {
        margin-bottom: 0; 
        height: auto;
        margin-bottom: 10px;
    }
`

const ImgBoxInner = styled.div`
    position: relative;
    width: 100%;
    max-width: 485px;
    height: 485px;
    box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.1);
    border: 20px solid rgba(255,255,255,.07);

    &::before {
        content: '';
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        height: 100%;
        transform: translate(-50%, -50%);
        background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
    }

    @media (max-width: 650px) {
        width: 268px;
        height: 268px; 
    }
`

const ImgBoxText = styled.div`
    position: absolute;
    font-weight: bold;
    font-size: 64px;
    line-height: 75px;
    color: #8D78C8;
    text-align: right;
    text-transform: uppercase;
    transform: rotate(-90deg);
    left: -50px;
    top: 60px;

    span {
        display: block;

        @media (max-width: 650px) {
            display: none;
        }
    }

    @media (max-width: 375px) {
        font-size: 55px; 
    }
`