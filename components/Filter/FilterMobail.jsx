// libs
import styled from 'styled-components'

// components
// import { FilterHeader } from './Filter'
import FilterBtnIcon from './../SVG/FilterBtnIcon'

const FilterMobail = () => {
    return (
        <Wrapper onClick={() => alert('В разработке')}>
            Фильтр товаров
            <FilterBtnIcon />
        </Wrapper>
    )
}

export default FilterMobail

// styles
const Wrapper = styled.button`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 18px;
    font-weight: 500;
    background: #FFFFFF;
    box-shadow: 0px 5px 18px rgb(0 0 0 / 10%);
    border-radius: 9px;
    margin-bottom: 15px;
    padding: 25px 15px;
    
    display: none;

    @media (max-width: 940px) {
        display: flex;   
    }
`