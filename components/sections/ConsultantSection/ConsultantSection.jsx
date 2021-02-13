import Link from 'next/link'

import styled from 'styled-components'

import { vars } from 'styles/vars'

import Pulse, { PulseWrapper, PulseItem } from '@/UI/Pulse/Pulse'
import { Container } from '@/UI/Container/Container'
import Button from '@/UI/Button/Button'

import backgroundImg from 'images/intro/bg.png'
import imgBox from 'images/consultant/img-box.png'

const ConsultantSection = () => {
    return (
        <Wrapper>
            <Container>
                <Inner>
                    <ImgBox>
                        <img src={imgBox} alt='Фото консультанта магазина Audio-shop' />
                        <Pulse />
                    </ImgBox>


                    <BtnWrapMobail>
                        <Link href='/consultation' passHref>
                            <Button variant='green' full large>Получить консультацию</Button>
                        </Link>
                    </BtnWrapMobail>

                    <Content>
                        <Title>
                            Персональный
                            <span>Консультант на связи!</span>
                        </Title>

                        <Text>
                            Когда Вы совершаете покупки на сайте “AudioShop” - все Ваши заказы ведет личный менеджер, который
                            поможет с выбором и оформлением заказа.
                        </Text>

                        <SubTitle>Приятных и безопасных покупок!</SubTitle>

                        <BtnWrap>
                            <Link href='/consultation' passHref>
                                <Button variant='green' full large>Получить консультацию</Button>
                            </Link>
                        </BtnWrap>
                    </Content>
                </Inner>
            </Container>
        </Wrapper>
    )
}

export default ConsultantSection

const Wrapper = styled.section`
    background: url(${backgroundImg});
    background-color: ${vars.colorPurple};
    padding-top: 45px;
    overflow: hidden;

    @media (max-width: 1080px) {
        padding: 50px 0;
    }    
`

const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1080px) {
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: column;
    }
`

const ImgBox = styled.div`
    position: relative;
    z-index: 1;

    img {
        position: relative;
        z-index: 10;
        display: block;

        @media (max-width: 540px) {
            max-width: 228px;
        }
    }

    @media (max-width: 540px) {
        ${PulseWrapper} {
            width: 218px;
            height: 218px;
        }

        ${PulseItem} {
            width: 218px;
            height: 218px;
        }
    }
`

const Content = styled.div`
    max-width: 560px;
    color: #fff;

    @media (max-width: 1080px) {
        max-width: 100%;
        order: -1;
        text-align: center;
    }
`

const Title = styled.h3`
    font-weight: 300;
    font-size: 45px;
    line-height: 53px;
    margin-bottom: 25px;
    
    span {
        display: block;
        font-weight: bold;
    }

    @media (max-width: 540px) {
        font-size: 24px;
        line-height: 27px;
    }
`

const Text = styled.p`
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 30px;

    @media (max-width: 540px) {
        font-size: 16px; 
    }
`

const SubTitle = styled.h4`
    position: relative;
    z-index: 99;
    display: inline-block;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 50px;

    &::after {
        content: '';
        display: block;
        position: absolute;
        z-index: -1;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 14px;
        background: #97D513;
        opacity: .3;
    }

    @media (max-width: 540px) {
        font-size: 16px; 
    }
`

const BtnWrap = styled.div`
    width: 100%;
    max-width: 337px;

    @media (max-width: 1080px) {
        display: none;
    }
`

const BtnWrapMobail = styled(BtnWrap)`
    display: none;

    @media (max-width: 1080px) {
        display: block;
    }
`