// core
import Link from 'next/link'

// libs
import styled from 'styled-components'

// utils
import { discountItems } from './discountItems'

// components
import { Container } from '../../UI/Container/Container'
import Button from '../../UI/Button/Button'
import Card from '../../UI/Card/Card'

const DiscountSection = () => {
    return (
        <Wrapper>
            <Container>
                <Title>
                    Постоянные акции
                    <span>и сезонные предложения</span>
                </Title>

                <CardList>
                    {discountItems.map((item, index) =>
                        <CardWrap key={`${item.imgUrl}_${index}`}>
                            <Card variant='limited' item={item} />
                        </CardWrap>
                    )}
                </CardList>

                <BtnWrap>
                    <Link href='/products' passHref>
                        <Button full large>Смотреть больше моделей</Button>
                    </Link>
                </BtnWrap>
            </Container>
        </Wrapper>
    )
}

export default DiscountSection

// styles
const Wrapper = styled.section`
    padding: 100px 0px;
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
    margin-left: -15px;
    margin-right: -15px;  
    margin-bottom: 30px;
`

const CardWrap = styled.div`
    max-width: calc(25% - 30px);
    margin-bottom: 30px;
    margin-left: 15px;
    margin-right: 15px;
`

const BtnWrap = styled.div`
    width: 100%;
    max-width: 343px;
    margin: 0 auto;
`
