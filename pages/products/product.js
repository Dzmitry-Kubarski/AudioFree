import { useState } from 'react'

import styled from 'styled-components'

import { Container } from '@/UI/Container/Container'

import ProductPhoto from 'components/product/ProductPhoto'
import ProductInfo from 'components/product/ProductInfo'
import ShopInfo from 'components/product/ShopInfo'
import DescriptionProduct from 'components/product/DescriptionProduct'
import CharacteristicsProduct from 'components/product/CharacteristicsProduct'
import ReviewsProduct from 'components/product/ReviewsProduct'
import { Inner, Tabs, TabsItem, TabsBtn, Content, ContentInner, ContentTitle } from '@/sections/QuestionsSection/QuestionsSection'

import MainLayout from 'layout/main/MainLayout'

import { cardListItems } from 'mockData/cardList'

const tabsNames = [
    'Описание товара:',
    'Характеристики:',
    'Отзывы:',
]

const ProductPage = () => {
    const cardItemObj = cardListItems[0]

    const [activeTab, setActiveTab] = useState(0)

    const selectActiveTab = (index) => () => {
        setActiveTab(index)
    }

    return (
        <MainLayout title='Продукт'>
            <Wrapper>
                <Container>
                    <Product>
                        <ProductPhoto />
                        <ProductInfo cardItemObj={cardItemObj} />
                        <ShopInfo article={cardItemObj.article} />
                    </Product>

                    <Line />

                    <Description>
                        <Inner>
                            <Tabs>
                                {tabsNames &&
                                    tabsNames.map((name, index) => (
                                        <TabsItem
                                            className={activeTab === index ? 'active' : ''}
                                            onClick={selectActiveTab(index)}
                                            key={`${name}_${index}`}>

                                            <TabsBtn>{name}</TabsBtn>
                                        </TabsItem>
                                    ))}
                            </Tabs>

                            <Content>
                                {activeTab === 0 &&
                                    <ContentInner>
                                        <DescriptionProduct desc={cardItemObj.description} />
                                    </ContentInner>}

                                {activeTab === 1 &&
                                    <ContentInner>
                                        <CharacteristicsProduct characteristics={cardItemObj.characteristics} />
                                    </ContentInner>}

                                {activeTab === 2 &&
                                    <ContentInner>
                                        <ReviewsProduct />
                                    </ContentInner>}
                            </Content>
                        </Inner>
                    </Description>
                </Container>
            </Wrapper>
        </MainLayout>
    )
}

export default ProductPage


const Wrapper = styled.main`
    padding-top: 65px;
    padding-bottom: 100px;
`

const Product = styled.div`
    display: flex;

    @media (max-width: 1180px) {
        flex-wrap: wrap;
    }
`

const Line = styled.hr`
    width: 100%;
    height: 1px;
    background-color: #ECECEC;
    margin-bottom: 70px;
    margin-top: 70px;
`

const Description = styled.div`
    ${Inner} {
        flex-wrap: wrap;
    }

    ${Tabs} {
        max-width: 100%;
        display: flex;
        border-radius: 0;   

        @media (max-width: 450px) {
            flex-wrap: wrap;
        }     
    }

    ${TabsItem} {
        &:after {
            display: none;
        }

        &.active {
            background-color: white;
            border-radius: 9px 9px 0 0; 
            border: 1px solid #ECECEC;  
            border-bottom: none;                    
        }  

        @media (max-width: 540px) {
            ${TabsBtn} {
                font-size: 14px;
            }
        }

        @media (max-width: 450px) {
            width: 100%;
        }             
    }

    ${TabsBtn} {
        color: #C2C2C2;
        font-weight: 300;
        padding: 40px 70px;

        @media (max-width: 980px) {
            padding: 20px;
        }

        @media (max-width: 540px) {
            font-size: 14px;
        }
    }

    ${Content} {
        width: 100%;
        border-radius: 0;
        padding: 40px 70px;
        padding-bottom: 0;

        @media (max-width: 980px) {
            min-height: auto;
            padding: 20px;
        }
    }

    ${ContentTitle} {
        display: none;
    }
    
    ${ContentInner} {
        width: 100%;
        display: block;
    }
`

