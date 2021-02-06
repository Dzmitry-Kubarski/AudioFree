// libs
import styled from 'styled-components'

// images
import background from '../../images/intro/bg.png'
import productImg from '../../images/advantages/img-1.png'

// utils
import { vars } from '../../styles/vars'
import { dataItems } from './dataAdvantages'

// components
import { Container } from './../UI/Container/Container'
import AdvantagesItem from './AdvantagesItem'
import Pulse from './../UI/Pulse/Pulse'

const AdvantagesSection = () => {
    return (
        <Wrapper>
            <Container>
                <Title>
                    Чем беспроводные лучше?
                    <span>Все о преимуществах наушников Bluetooth</span>
                </Title>

                <Inner>
                    <Col>
                        {dataItems.slice(0, 3).map((item) => <AdvantagesItem key={item.number} item={item} />)}
                    </Col>

                    <ImgBox>
                        <img src={productImg} alt='Фото наушников Bluetooth' />
                        <Pulse />
                    </ImgBox>

                    <Col>
                        {dataItems.slice(3).map((item) => <AdvantagesItem key={item.number} item={item} right />)}
                    </Col>
                </Inner>
            </Container>
        </Wrapper>
    )
}

export default AdvantagesSection

// styles
const Wrapper = styled.section`
    background: url(${background});
    background-color: ${vars.colorPurple};
    background-repeat: no-repeat;
    padding-top: 100px;
    padding-bottom: 80px;
`

const Title = styled.h2`
    color: #fff;
    font-weight: 300;
    font-size: 44px;
    text-align: center;
    margin-bottom: 100px;

    span {
        color: #fff;
        display: block;
        font-weight: 700;
        font-size: 44px;
    }
`

const Inner = styled.div`
    display: flex;
    justify-content: space-between;
`

const Col = styled.div`
    max-width: 320px;
`

const ImgBox = styled.div`
    position: relative;

    img {
        margin-bottom: -30px;
    }
`