import Link from 'next/link'

import styled from 'styled-components'
import Swiper from 'react-id-swiper'

import { cardItems } from './cardItems'

import { Container } from '@/UI/Container/Container'
import Button from '@/UI/Button/Button'
import CardMini from '@/UI/Card/CardMini'
import TitleSection from '@/UI/TitleSection/TitleSection'
import PointerSwiper from '@/UI/PointerSwiper/PointerSwiper'

const LeadersSection = () => {
    const params = {
        slidesPerView: 'auto',
        spaceBetween: 0,
        grabCursor: true,
    }

    return (
        <Wrapper>
            <Container>
                <TitleSection subTitle='ТОП-2022' title='лидеры предзаказов, обзоров и рекомендаций' />

                <CardList>
                    {cardItems.map((item, index) =>
                        <CardWrap key={index}>
                            <CardMini item={item} />
                        </CardWrap>
                    )}
                </CardList>

                <CardListSlider>
                    <Swiper {...params}>
                        {cardItems.map((item, index) =>
                            <CardWrap key={index}>
                                <CardMini item={item} />
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

export default LeadersSection

const Wrapper = styled.section`
    background: #E6E1F2;
    padding: 90px 0px;

    @media (max-width: 540px) {
        padding: 50px 0; 
    }
`

const CardList = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-right: -10px;
    margin-bottom: 75px;

    @media (max-width: 1120px) {
        display: none;
    }
`

const CardListSlider = styled(CardList)`
    display: none;

    @media (max-width: 1120px) {
        display: flex;
        margin-bottom: 30px;
    }
`

const CardWrap = styled.div`
    max-width: calc(33.333333% - 20px);
    margin-bottom: 30px;
    margin-left: 10px;
    margin-right: 10px;

    @media (max-width: 1120px) {
        margin-bottom: 0;
    }

    @media (max-width: 850px) {
        max-width: calc(40% - 20px); 
    }

    @media (max-width: 768px) {
        max-width: calc(50% - 20px); 
    }

    @media (max-width: 540px) {
        max-width: calc(100% - 20px); 
    }
`

const BtnWrap = styled.div`
    width: 100%;
    max-width: 343px;
    display: flex;
    margin: 0 auto;
`

const PointerSwiperWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
    margin-bottom: 30px;

    @media (max-width: 1120px) {
        display: flex;   
    }
`
