// core
import styled from 'styled-components'

// components
import { Container } from './../UI/Container/Container'
import BannerSale from './../UI/BannerSale/BannerSale'
import Card from './../UI/Card/Card'

// utils
import { cardListItems } from './cardListItems'

const SaleSection = () => {
    return (
        <Wrapper>
            <Container>
                <Title>
                    Постоянные акции
                    <span>и сезонные предложения</span>
                </Title>

                <CardList>
                    <CardWrap>
                        <BannerSale />
                    </CardWrap>

                    {cardListItems.map((item, index) =>
                        <CardWrap key={`${item.imgUrl}_${index}`}>
                            <Card variant='sale' item={item} />
                        </CardWrap>
                    )}
                </CardList>
            </Container>
        </Wrapper>
    )
}

export default SaleSection

// styles
const Wrapper = styled.section`
    padding: 100px 0;
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
    justify-content: space-between;
    margin-left: -15px;
    margin-right: -15px;
`

const CardWrap = styled.div`
    max-width: calc(25% - 30px);
    margin-bottom: 30px;
    margin-left: 15px;
    margin-right: 15px;
`

