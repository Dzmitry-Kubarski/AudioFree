// core
import Link from 'next/link'

// libs
import styled from 'styled-components'

// layout
import MainLayout from '../../layout/main/MainLayout'

// components
import { Container } from '../../components/UI/Container/Container'
import Card from './../../components/UI/Card/Card'
import BannerSale from './../../components/UI/BannerSale/BannerSale'
import Filter from './../../components/Filter/Filter'
import BreadCrumbs from './../../components/UI/BreadCrumbs/BreadCrumbs'
import FilterMobail from './../../components/Filter/FilterMobail'

// sections
import QuestionsSection from './../../components/sections/QuestionsSection/QuestionsSection'

// mock-data
const cardListItems = [
    {
        id: '1',
        title: 'Наушники Bluetooth Baseus Encok D01 NGD01-01',
        imgUrl: '/models/img-1.png',
        ratingValue: 4,
        price: '1950',
    },

    {
        id: '2',
        title: 'Наушники Bluetooth Baseus Encok D01 NGD01-02',
        imgUrl: '/models/img-2.png',
        ratingValue: 5,
        price: '1750',
    },

    {
        id: '3',
        title: 'Наушники Bluetooth Baseus Encok D05 NGD01-03',
        imgUrl: '/models/img-3.png',
        ratingValue: 3,
        price: '1450',
    },

    {
        id: '4',
        title: 'Наушники Bluetooth Baseus Encok D01 NGD01-04',
        imgUrl: '/models/img-2.png',
        ratingValue: 5,
        price: '1750',
    },

    {
        id: '5',
        title: 'Наушники Bluetooth Baseus Encok D01 NGD01-05',
        imgUrl: '/models/img-1.png',
        ratingValue: 4,
        price: '1950',
    },

    {
        id: '6',
        title: 'Наушники Bluetooth Baseus Encok D05 NGD01-06',
        imgUrl: '/models/img-3.png',
        ratingValue: 3,
        price: '1450',
    },

    {
        id: '7',
        title: 'Наушники Bluetooth Baseus Encok D01 NGD01-07',
        imgUrl: '/models/img-2.png',
        ratingValue: 5,
        price: '1750',
    },

    {
        id: '8',
        title: 'Наушники Bluetooth Baseus Encok D01 NGD01-08',
        imgUrl: '/models/img-1.png',
        ratingValue: 4,
        price: '1950',
    },

    {
        id: '9',
        title: 'Наушники Bluetooth Baseus Encok D05 NGD01-09',
        imgUrl: '/models/img-3.png',
        ratingValue: 3,
        price: '1450',
    },

    {
        id: '10',
        title: 'Наушники Bluetooth Baseus Encok D01 NGD01-10',
        imgUrl: '/models/img-2.png',
        ratingValue: 5,
        price: '1750',
    },

    {
        id: '11',
        title: 'Наушники Bluetooth Baseus Encok D01 NGD01-11',
        imgUrl: '/models/img-1.png',
        ratingValue: 4,
        price: '1950',
    },
]

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

// styles
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
