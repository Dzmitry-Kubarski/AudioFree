import Link from 'next/link'

import styled from 'styled-components'

import MainLayout from 'layout/main/MainLayout'

import { Container } from 'components/UI/Container/Container'
import Card from '@/UI/Card/Card'
import BannerSale from '@/UI/BannerSale/BannerSale'
import Filter from 'components/Filter/Filter'
import BreadCrumbs from '@/UI/BreadCrumbs/BreadCrumbs'
import FilterMobail from 'components/Filter/FilterMobail'

import QuestionsSection from '@/sections/QuestionsSection/QuestionsSection'

import { cardListItems } from 'mockData/cardList'

const CatalogPage = () => {
    return (
        <MainLayout title='Каталог товаров'>
            <Section>
                <Container>
                    <Inner>
                        <Filter />

                        <Content>
                            <ContentHeader>
                                <BreadCrumbsWrap>
                                    <BreadCrumbs>
                                        <li>
                                            <Link href='/'>
                                                <a>Главная /</a>
                                            </Link>
                                        </li>

                                        <li>Каталог</li>
                                    </BreadCrumbs>
                                </BreadCrumbsWrap>

                                <SortBlock>
                                    <Title>Каталог</Title>

                                    <Select>
                                        <option>По популярности</option>
                                        <option>111111</option>
                                        <option>222222</option>
                                        <option>333333</option>
                                    </Select>
                                </SortBlock>

                                <FilterMobail />
                            </ContentHeader>

                            <ContentList>
                                <ContentListRow>
                                    {cardListItems.slice(0, 2).map((item) =>
                                        <CardWrap key={item.id}>
                                            <Card item={item} />
                                        </CardWrap>
                                    )}
                                    <CardWrap className='banerSale'>
                                        <BannerSale />
                                    </CardWrap>
                                </ContentListRow>

                                {cardListItems.slice(2).map((item) =>
                                    <CardWrap key={item.id}>
                                        <Card item={item} />
                                    </CardWrap>
                                )}
                            </ContentList>
                        </Content>
                    </Inner>
                </Container>
            </Section>

            <QuestionsSection />
        </MainLayout>
    )
}

export default CatalogPage

const Section = styled.section`
    padding-top: 60px;
    padding-bottom: 100px;
`

const Inner = styled.div`
    display: flex;
`

const Content = styled.div``

const ContentHeader = styled.div``

const BreadCrumbsWrap = styled.div`
    margin-bottom: 20px;    
`

const SortBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;    
`

const Title = styled.h4`
    font-size: 36px;
    font-weight: 700;
`

const Select = styled.select`
    width: 100%;
    max-width: 270px;
    background: white;
    border: 1px solid #DADADA;
    border-radius: 9px;
    font-size: 16px;
    color: #8B75C8;
    padding: 10px 20px;

    @media (max-width: 940px) {
        display: none;   
    }
`

const SelectMobail = styled.div``

const ContentList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-left: -15px;
    margin-right: -15px;
`

const ContentListRow = styled.div`
    width: 100%;
    display: flex;

    @media (max-width: 620px) {
        flex-wrap: wrap;  
    }
`

const CardWrap = styled.div`
    width: 100%;
    max-width: calc(33.333333% - 30px);
    margin-bottom: 30px;
    margin-left: 15px;
    margin-right: 15px;

    @media (max-width: 1220px) {
        max-width: calc(50% - 30px);  

        &.banerSale {
            display: none;
        }
    }

    @media (max-width: 620px) {
        max-width: calc(100% - 30px);   
    }
`
