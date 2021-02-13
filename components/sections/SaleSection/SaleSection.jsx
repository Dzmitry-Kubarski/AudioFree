import { useEffect, useState } from 'react'

import styled from 'styled-components'
import Swiper from 'react-id-swiper'
import { useWindowSize } from '@react-hook/window-size'

import { Container } from '@/UI/Container/Container'
import BannerSale from '@/UI/BannerSale/BannerSale'
import TitleSection from '@/UI/TitleSection/TitleSection'
import PointerSwiper from '@/UI/PointerSwiper/PointerSwiper'
import Card, { CardImgWrap, CardBtns, CardTitle, CardText, CardPrice } from '@/UI/Card/Card'

import { cardListItems } from './cardListItems'

const SaleSection = () => {
    const [width] = useWindowSize()

    const [isSlider, setIsSlider] = useState(false)

    useEffect(() => {
        width <= 1280 ? setIsSlider(true) : setIsSlider(false)
    }, [width])

    const params = {
        slidesPerView: 'auto',
        spaceBetween: 0,
        grabCursor: true,
    }

    return (
        <Wrapper>
            <Container>
                <TitleSection subTitle='Постоянные акции' title='и сезонные предложения' />

                <CardList>
                    <CardWrap className='banerSale'>
                        <BannerSale />
                    </CardWrap>

                    {!isSlider
                        ? cardListItems.map((item, index) =>
                            <CardWrap key={`${item.imgUrl}_${index}`}>
                                <Card variant='sale' item={item} />
                            </CardWrap>)

                        : <Swiper {...params}>
                            {cardListItems.map((item, index) =>
                                <CardWrap key={`${item.imgUrl}_${index}`}>
                                    <Card variant='sale' item={item} />
                                </CardWrap>)}
                        </Swiper>
                    }
                </CardList>

                {isSlider &&
                    <PointerSwiperWrap>
                        <PointerSwiper />
                    </PointerSwiperWrap>}
            </Container>
        </Wrapper>
    )
}

export default SaleSection

const Wrapper = styled.section`
    padding: 100px 0;

    @media (max-width: 540px) {
        padding: 50px 0; 
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

    @media (max-width: 1280px) {
        max-width: calc(33.333333% - 30px);  

        ${CardImgWrap} {
            width: 140px;
            height: 140px;
        } 

        ${CardBtns} {
            flex-direction: column;
            margin-top: 15px;

            a {
                width: 100%;

                + a {
                    margin-top: 15px;
                }
            }
        } 
    }

    @media (max-width: 1080px) {
        max-width: calc(40% - 30px); 
    }

    @media (max-width: 940px) { 
        max-width: calc(33.333333% - 30px);       

        &.banerSale {
            display: none;
        }
    }  

    @media (max-width: 768px) {
        margin-left: 10px;
        margin-right: 10px;
        max-width: calc(50% - 20px);
    }     

    @media (max-width: 540px) {        

        ${CardBtns} {
            display: none;
        }

        ${CardPrice} {
            font-size: 18px;
        } 
    }

    @media (max-width: 450px) {         

        ${CardTitle} {
            font-size: 12px;
            line-height: 16px;
            text-align: center;
        }

        ${CardText} {
            text-align: center;
            margin-top: 10px;
            margin-bottom: 10px;
        }

        ${CardPrice} {
            margin-top: 7px;
        }
    }

    @media (max-width: 420px) {
        max-width: calc(100% - 20px); 
    }
`

const PointerSwiperWrap = styled.div`
    display: flex;
    justify-content: center;
`

