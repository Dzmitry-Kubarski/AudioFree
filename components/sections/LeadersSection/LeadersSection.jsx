// libs
import styled from 'styled-components'

// utils
import { cardItems } from './cardItems'

// components
import { Container } from './../UI/Container/Container'
import Button from './../UI/Button/Button'
import CardMini from '../UI/Card/CardMini'

const LeadersSection = () => {
    return (
        <Wrapper>
            <Container>
                <Title>
                    ТОП-2021
                    <span>лидеры предзаказов, обзоров и рекомендаций</span>
                </Title>

                <CardList>
                    {cardItems.map((item, index) =>
                        <CardWrap key={index}>
                            <CardMini item={item} />
                        </CardWrap>
                    )}
                </CardList>

                <BtnWrap>
                    <Button full large>Смотреть больше моделей</Button>
                </BtnWrap>
            </Container>
        </Wrapper>
    )
}

export default LeadersSection

// styles
const Wrapper = styled.section`
    background: #E6E1F2;
    padding: 90px 0px;
`

const Title = styled.h2`
    font-weight: 300;
    font-size: 44px;
    color: #535353;
    text-align: center;
    margin-bottom: 50px;

    span {
        display: block;
        font-weight: 700;
        font-size: 44px;
        color: #8b75c8;
    }
`

const CardList = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-right: -10px;
    margin-bottom: 75px;
`

const CardWrap = styled.div`
    max-width: calc(33.333333% - 20px);
    margin-bottom: 30px;
    margin-left: 10px;
    margin-right: 10px;
`

const BtnWrap = styled.div`
    width: 100%;
    max-width: 343px;
    display: flex;
    margin: 0 auto;
`
