// core
import { useState } from 'react'

// libs
import styled from 'styled-components'
import { Range } from 'rc-slider'

// components
import Сheckbox from '../UI/Checkbox/Checkbox'
import BannerSale from './../UI/BannerSale/BannerSale'

// utils
import { categoriesNames, brandsNames, saleNames } from './mockData'

const Filter = () => {
    const [value, setValue] = useState([499, 8499])

    const onAfterChangeHadler = (e) => {
        setValue(e)
    }

    return (
        <FilterWrap>
            <FilterStyled>
                <FilterHeader>
                    Фильтр товаров
                </FilterHeader>

                <FilterColumn>
                    <FilterColumnTitle>Бренд:</FilterColumnTitle>
                    <ul>
                        {brandsNames.map((brand) =>
                            <FilterColumnItem key={brand}>
                                <Сheckbox label={brand} name={brand} id={brand} />
                            </FilterColumnItem>
                        )}
                    </ul>
                </FilterColumn>

                <FilterColumn>
                    <FilterColumnTitle>Категория:</FilterColumnTitle>
                    <ul>
                        {categoriesNames.map((brand) =>
                            <FilterColumnItem key={brand}>
                                <Сheckbox label={brand} name={brand} id={brand} />
                            </FilterColumnItem>
                        )}
                    </ul>
                </FilterColumn>

                <FilterColumn>
                    <FilterColumnTitle>Цена:</FilterColumnTitle>

                    <PriceRow>
                        <span>{value[0]}₽</span>
                        <b></b>
                        <span>{value[1]}₽</span>
                    </PriceRow>

                    <Range
                        allowCross={false}
                        defaultValue={[499, 8499]}
                        min={300}
                        max={8499}
                        onAfterChange={onAfterChangeHadler}
                    />
                </FilterColumn>

                <FilterColumn>
                    <FilterColumnTitle>По акции:</FilterColumnTitle>
                    <ul>
                        {saleNames.map((brand) =>
                            <FilterColumnItem key={brand}>
                                <Сheckbox label={brand} name={brand} id={brand} />
                            </FilterColumnItem>
                        )}
                    </ul>
                </FilterColumn>

                <FilterBtn type='btn'>Очистить фильтр</FilterBtn>
            </FilterStyled>

            <BannerSale />
        </FilterWrap>
    )
}

export default Filter

// styles
const FilterWrap = styled.div` 
    width: 270px; 
    max-width: 270px; 
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    margin-bottom: 30px;    
    flex-shrink: 0;

    @media (max-width: 940px) {
        display: none;   
    }
`

const FilterStyled = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 5px 18px rgb(0 0 0 / 10%);
    border-radius: 9px;
    margin-bottom: 30px;
    padding-bottom: 50px;
`

export const FilterHeader = styled.div`
    font-size: 20px;
    font-weight: 500;
    border-bottom: 1px solid #E6E6E6;
    padding: 25px;
`

const FilterColumn = styled.div`
    padding: 35px 25px;
    border-bottom: 1px solid #E6E6E6;

    .rc-slider-handle {
        width: 26px;
        height: 26px;
        background: white;
        border: 3px solid #8B75C8;
        margin-top: -10px;
    }

    .rc-slider-track {
        background-color: #8B75C8;
    }   

    &:last-of-type {
        border-bottom: none;
    }
`

const FilterColumnTitle = styled.div`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
`

const FilterColumnItem = styled.li`
    margin-bottom: 20px;

    &:last-child {
        margin-bottom: 0;
    }
`

const PriceRow = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

    span {
        font-size: 16px;
        color: #808080;
        background: white;
        border: 1px solid #DADADA;
        border-radius: 9px;
        padding: 10px 25px;
    }

    b {
        position: relative;
        width: 11px;
        height: 11px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:after {
            content: '';
            position: absolute;
            top: 50%;
            right: 0;
            width: 11px;
            height: 1px;
            background-color: black;
            transform: translateY(-50%);
        }
    }
`

const FilterBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 230px;
    height: 50px;
    font-size: 16px;
    border: 2px solid #8B75C8;
    background: transparent;
    border-radius: 220px;
    padding: 17px;
    margin: 0 auto;
    margin-top: 25px;
    cursor: pointer;
    transition: box-shadow .3s linear;

    &:hover {
        box-shadow: 0px 2px 0px rgb(139 117 200 / 90%);
    }
`