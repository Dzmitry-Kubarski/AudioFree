// libs
import styled from 'styled-components'

// utils
import { vars } from '../../styles/vars'

// components
import Pulse from './../UI/Pulse/Pulse'
import { Container } from './../UI/Container/Container'
import Button from './../UI/Button/Button'

// images
import backgroundImg from '../../images/intro/bg.png'
import imgBox from '../../images/consultant/img-box.png'

const Consultant = () => {
    return (
        <Wrapper>
            <Container>
                <Inner>
                    <ImgBox>
                        <img src={imgBox} alt='Фото консультанта магазина Audio-shop' />
                        <Pulse />
                    </ImgBox>

                    <Content>
                        <Title>
                            Персональный
                            <span>Консультант на связи!</span>
                        </Title>

                        <Text>
                            Когда Вы совершаете покупки на сайте “AudioFree” - все Ваши заказы ведет личный менеджер, который
                            поможет с выбором и оформлением заказа.
                        </Text>

                        <SubTitle>Приятных и безопасных покупок!</SubTitle>

                        <BtnWrap>
                            <Button variant='green' large full>Получить консультацию</Button>
                        </BtnWrap>
                    </Content>
                </Inner>
            </Container>
        </Wrapper>
    )
}

export default Consultant

// styles
const Wrapper = styled.section`
    background: url(${backgroundImg});
    background-color: ${vars.colorPurple};
    padding-top: 45px;
`
const Inner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const ImgBox = styled.div`
    position: relative;
    z-index: 1;

    img {
        position: relative;
        z-index: 10;
        display: block;
    }
`
const Content = styled.div`
    max-width: 560px;
    color: #fff;
`
const Title = styled.h3`
    font-weight: 300;
    font-size: 45px;
    line-height: 53px;
    margin-bottom: 25px;
    
    span {
        display: block;
        font-weight: bold;
        font-size: 45px;
        line-height: 53px;
    }
`
const Text = styled.p`
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 30px;
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
`
const BtnWrap = styled.div`
    width: 100%;
    max-width: 337px;
`