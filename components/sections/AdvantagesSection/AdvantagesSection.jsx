// libs
import styled from 'styled-components'

// images
import background from '../../../images/intro/bg.png'
import productImg from '../../../images/advantages/img-1.png'

// utils
import { vars } from '../../../styles/vars'
import { dataItems } from './dataAdvantages'

// components
import { Container } from '../../UI/Container/Container'
import AdvantagesItem, { ItemWrapper, ItemCircle, ItemNumber } from './AdvantagesItem'
import Pulse, { PulseWrapper, PulseItem } from '../../UI/Pulse/Pulse'
import TitleSection, { SubTitle } from './../../UI/TitleSection/TitleSection'

const AdvantagesSection = () => {
    return (
        <Wrapper>
            <Container>
                <TitleSection subTitle='Чем беспроводные лучше?!' title='Все о преимуществах наушников Bluetooth' dark />

                <Inner>
                    <Col className='firstCol'>
                        {dataItems.slice(0, 3).map((item) => <AdvantagesItem key={item.number} item={item} />)}
                    </Col>

                    <ImgBox>
                        <img src={productImg} alt='Фото наушников Bluetooth' />
                        <Pulse />
                    </ImgBox>

                    <Col className='right'>
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
    overflow: hidden;

    ${SubTitle} {
        margin-bottom: 80px;
    }

    @media (max-width: 540px) {
        padding: 50px 0 0 0;
    }
`

const Col = styled.div`
    max-width: 320px;

    &.right {
        @media (max-width: 1020px) {
            ${ItemWrapper} {
                text-align: left;            
            }

            ${ItemCircle} {
                order: 0;
                margin-right: 25px;
                margin-left: 0;
            }

            ${ItemNumber} {
                left: -30px;
                right: 0px;
            }
        }        
    } 

    &.firstCol {
        @media (max-width: 1020px) {
            ${ItemWrapper} {
                &:last-child {
                    ${ItemCircle} {
                        &:before {
                            display: block;
                        }
                    }
                }           
            }           
        }   
    } 

    @media (max-width: 400px) {
        ${ItemNumber} {
            display: none;
        } 
    }  
`

const Inner = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 1020px) {
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
    }    
`

const ImgBox = styled.div`
    position: relative;

    img {
        margin-bottom: -30px;

        @media (max-width: 540px) {
            max-width: 191px;
        }
    }

    @media (max-width: 1020px) {
        order: -1;
        margin-bottom: 60px;
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