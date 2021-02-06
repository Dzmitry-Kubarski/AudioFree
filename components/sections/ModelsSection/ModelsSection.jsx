// libs 
import styled from 'styled-components'

// components
import Tabs from './../UI/Tabs/Tabs'
import Card from './../UI/Card/Card'
import { Container } from './../UI/Container/Container'

// utils
import { cardListItems } from './cardListItems'

const ModelsSection = () => {
    return (
        <Wrapper>
            <Container>
                <Title>
                    100% совместимость
                    <span>с любым интерфейсом</span>
                </Title>

                <Inner>
                    <TabsWrap>
                        <Tabs />
                    </TabsWrap>

                    <CardList>
                        {cardListItems.map((item, index) =>
                            <CardWrap key={`${item.imgUrl}_${index}`}>
                                <Card item={item} />
                            </CardWrap>
                        )}
                    </CardList>

                </Inner>
            </Container>
        </Wrapper>
    )
}

export default ModelsSection

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

const Inner = styled.div`
    display: flex;    
`

const TabsWrap = styled.div`
    width: 100%;
    max-width: 270px;
    margin-right: 30px;
`

const CardList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: -15px;
    margin-right: -15px;
`

const CardWrap = styled.div`
    max-width: calc(33.333333% - 30px);
    margin-bottom: 30px;
    margin-left: 15px;
    margin-right: 15px;
`