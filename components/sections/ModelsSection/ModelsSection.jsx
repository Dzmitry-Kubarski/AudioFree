// libs 
import styled from 'styled-components'
import Swiper from 'react-id-swiper'

// components
import Tabs, { TabsList, TabsItem } from '../../UI/Tabs/Tabs'
import Card, { CardBtns, CardPrice, CardInner, CardTitle, CardImgWrap } from '../../UI/Card/Card'
import { Container } from '../../UI/Container/Container'
import PointerSwiper from './../../UI/PointerSwiper/PointerSwiper'
import TitleSection from './../../UI/TitleSection/TitleSection'
import { CardHeaderWrap } from '../../UI/Card/CardHeader'

// utils
import { cardListItems } from './cardListItems'

const ModelsSection = () => {

    const params = {
        slidesPerView: 'auto',
        spaceBetween: 0,
        grabCursor: true,
    }

    return (
        <Wrapper>
            <Container>
                <TitleSection subTitle='100% совместимость' title='с любым интерфейсом' />

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

                    <CardListMobail>
                        <Swiper {...params}>
                            {cardListItems.map((item, index) =>
                                <CardWrap key={`${item.imgUrl}_${index}`}>
                                    <Card item={item} />
                                </CardWrap>
                            )}
                        </Swiper>
                    </CardListMobail>
                </Inner>

                <PointerSwiperWrap>
                    <PointerSwiper />
                </PointerSwiperWrap>
            </Container>
        </Wrapper>
    )
}

export default ModelsSection

// styles
const Wrapper = styled.section`
    padding: 100px 0;

    @media (max-width: 540px) {
        padding: 50px 0;
    }
`

const Inner = styled.div`
    display: flex;  

    @media (max-width: 1280px) {
        flex-wrap: wrap;   
    }  
`

const TabsWrap = styled.div`
    width: 100%;
    max-width: 270px;
    margin-right: 30px;    

    @media (max-width: 1280px) {
        min-width: 100%;
        margin-right: 0; 

        ${TabsList} {
            display: flex;
            flex-wrap: wrap;
            margin-left: -15px;
            margin-right: -15px;
        }  
    }

    @media (max-width: 650px) {
        ${TabsItem} {
            width: calc(50% - 30px);
        } 
    }

    @media (max-width: 540px) {
        ${TabsItem} {
            width: calc(50% - 10px);
            margin-left: 5px;
            margin-right: 5px;
        } 

        ${TabsList} {
            margin-left: -5px;
            margin-right: -5px;
        }
    }
`

const CardList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;

    @media (max-width: 940px) {
        display: none;   
    }
    
`

const CardListMobail = styled.div`
    width: 100%;
    display: none;

    @media (max-width: 940px) {
        display: block; 

        .swiper-container {
            margin-left: -10px;
            margin-right: -10px;
        } 
    }
`

const CardWrap = styled.div`
    width: 100%;
    max-width: calc(33.333333% - 30px);
    margin-bottom: 30px;
    margin-left: 15px;
    margin-right: 15px;

    @media (max-width: 940px) {
        ${CardImgWrap} {
            width: 140px;
            height: 140px;  
            margin-bottom: 10px;
        }

        ${CardBtns} {
            flex-wrap: wrap;
            margin-top: 10px;

            & + button, a {
                margin-bottom: 15px;

                &:last-child {
                    margin-bottom: 0;
                }
            }

            button, a {
                width: 100%;
            }
        }  
    }

    @media (max-width: 768px) {
        max-width: calc(50% - 30px);   
    }

    @media (max-width: 650px) {
        ${CardHeaderWrap} {
            display: none;
        }   

        ${CardBtns} {
            display: none;
        }  

        ${CardPrice} {
            font-size: 18px;
        }         
    }   

    @media (max-width: 540px) {
        margin-left: 10px;
        margin-right: 10px;
        max-width: calc(50% - 20px);

        ${CardInner} {
            padding: 12px;
        }         
    }   

    @media (max-width: 450px) {

        ${CardTitle} {
            font-size: 12px;
            line-height: 16px;
            text-align: center;
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
    align-items: center;
    justify-content: center;
    display: none;

    @media (max-width: 940px) {
        display: flex;   
    }
`