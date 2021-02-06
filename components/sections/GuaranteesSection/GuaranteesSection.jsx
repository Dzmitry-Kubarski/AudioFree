// libs
import styled from 'styled-components'

// components
import { Container } from '../../UI/Container/Container'

// utils
import { guaranteesItems } from './guaranteesItems'

const GuaranteesSection = () => {
    return (
        <Wrapper>
            <Container>
                <Title>
                    Где выгодно купить качественные наушники?
                    <span>Интернет-магазин AudioFree - магазин хороших покупок</span>
                </Title>

                <SubTitle>
                    Текст о том, что мы не просто так подбираем наушники, а ассортимент формируется исходя из спроса и новинок
                    рынка, с учетом требований к качеству и по наличию популярных, топовых, классических позиций
                </SubTitle>

                <Inner>
                    {guaranteesItems.map((item) =>
                        <Card key={item.iconUrl}>
                            <CardWrap>
                                <CardImgWrap>
                                    <img src={item.iconUrl} alt='Иконка' />
                                </CardImgWrap>

                                <CardContent>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardText>{item.text}</CardText>
                                </CardContent>
                            </CardWrap>

                            <CardShadow />
                        </Card>
                    )}
                </Inner>
            </Container>
        </Wrapper>
    )
}

export default GuaranteesSection

// styles
const Wrapper = styled.section`
    padding-top: 100px;
    padding-bottom: 70px;
`

const Title = styled.h2`
    font-weight: 300;
    font-size: 44px;
    color: #535353;
    text-align: center;
    margin-bottom: 30px;

    span {
        display: block;
        font-weight: 700;
        font-size: 44px;
        color: #8b75c8;
    }
`

const SubTitle = styled.p`
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    margin-bottom: 50px;    
`

const Inner = styled.div`
    display: flex;
    justify-content: space-between;
`

const Card = styled.div`
    position: relative;
    z-index: 99;   
    width: 100%;
    max-width: 300px;
    text-align: center;
    background: #fff;
    border-radius: 9px;
`

const CardWrap = styled.div`
    height: 100%;
    box-shadow: 0 5px 18px rgb(0 0 0 / 10%);
    border-radius: 9px;
    padding: 35px 30px;
`

const CardImgWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 90px;
    background: #f3f3f3;
    overflow: hidden;
    border-radius: 50%;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;    
`

const CardContent = styled.div`
    text-align: center;
`

const CardTitle = styled.h3`
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 10px;
`

const CardText = styled.p`
    font-size: 14px;
    line-height: 20px;
`

const CardShadow = styled.div`
    position: relative;
    z-index: -1;
    width: 90%;
    height: 11px;
    border-radius: 0 0 9px 9px;
    box-shadow: 0 5px 18px rgb(0 0 0 / 10%);
    margin: 0 auto -8px;
    background-color: #fff;
`