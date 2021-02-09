// libs
import styled from 'styled-components'

// icons
import SearchIcon from './../../SVG/SearchIcon'

const Search = () => {
    return (
        <SearchWrapper>
            <SearchInput type="text" placeholder="Поиск товара" />

            <SearchBtn type="button">
                <SearchIcon />
            </SearchBtn>
        </SearchWrapper>
    )
}

export default Search

// styles
const SearchWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 310px;
`

const SearchInput = styled.input`
    width: 100%;
    border: 1px solid #D9D9D9;
    border-radius: 23px;
    background-color: #FCFCFC;
    padding: 11px 10px 11px 45px;

    &::placeholder {
        font-family: inherit;
        font-size: 15px;
        color: #B3B3B3;
    }

    /* @media (max-width: 768px) {
        display: none;   
    } */
`

const SearchBtn = styled.button`
    position: absolute;
    left: 0px;
    top: 50%;
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;    
    transform: translateY(-50%);
    background: transparent;

    svg {
        width: 23px;
        height: 23px;
    }

    /* @media (max-width: 768px) {
        position: static;
        transform: none;   
    } */
`
