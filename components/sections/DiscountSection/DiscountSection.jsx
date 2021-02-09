// core
import Link from 'next/link'

// libs
import styled from 'styled-components'
import Swiper from 'react-id-swiper'

// utils
import { discountItems } from './discountItems'

// components
import { Container } from '../../UI/Container/Container'
import Button from '../../UI/Button/Button'
import Card, { CardImgWrap, CardTitle } from '../../UI/Card/Card'
import PointerSwiper from './../../UI/PointerSwiper/PointerSwiper'
import TitleSection from './../../UI/TitleSection/TitleSection'

const DiscountSection = () => {

    const params = {
        slidesPerView: 'auto',
        spaceBetween: 0,
        grabCursor: true,
    }

    return (
        <Wrapper>
            <Container>
                <TitleSection subTitle='Постоянные акции 2' title='и сезонные предложения' />

                <CardList>
                    {discountItems.map((item, index) =>
                        <CardWrap key={`${item.imgUrl}_${index}`}>
                            <Card variant='limited' item={item} />
                        </CardWrap>
                    )}
                </CardList>

                <CardListSlider>
                    <Swiper {...params}>
                        {discountItems.map((item, index) =>
                            <CardWrap key={`${item.imgUrl}_${index}`}>
                                <Card variant='limited' item={item} />
                            </CardWrap>
                        )}
                    </Swiper>
                </CardListSlider>

                <PointerSwiperWrap>
                    <PointerSwiper />
                </PointerSwiperWrap>

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

    @media (max-width: 540px) {
        padding: 50px 0px;
    }
`

const CardList = styled.div`
    display: flex;
    margin-left: -15px;
    margin-right: -15px;  
    margin-bottom: 30px;

    @media (max-width: 1120px) {
        display: none; 
    }
`

const CardListSlider = styled(CardList)`
    display: none;

    @media (max-width: 1120px) {
        display: flex; 
        margin-bottom: 0;
    }
`

const CardWrap = styled.div`
    max-width: calc(25% - 30px);
    margin-bottom: 30px;
    margin-left: 15px;
    margin-right: 15px;

    @media (max-width: 1120px) {
        max-width: calc(33.333333% - 30px); 
    }

    @media (max-width: 768px) {
        max-width: calc(50% - 30px); 
    }

    @media (max-width: 640px) {
        margin-left: 10px;
        margin-right: 10px;
        max-width: calc(50% - 20px); 
    }

    @media (max-width: 540px) {
        ${CardImgWrap} {
            width: 140px;
            height: 140px;
        } 
    }

    @media (max-width: 450px) {
        max-width: calc(100% - 20px); 

        ${CardTitle} {
            text-align: center;
        }
    }
`

const BtnWrap = styled.div`
    width: 100%;
    max-width: 343px;
    margin: 0 auto;
`

const PointerSwiperWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
    display: none;

    @media (max-width: 1120px) {
        display: flex;   
    }
`
