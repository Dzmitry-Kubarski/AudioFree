// core
import Link from 'next/link'
import { useEffect, useState } from 'react'

// libs
import styled from 'styled-components'
import { useWindowSize } from '@react-hook/window-size'

// components
import HeaderTop from '../Header/HeaderTop/HeaderTop'
import HeaderBottom from '../Header/HeaderBottom/HeaderBottom'
import Search from './../UI/Search/Search'
import { Container } from '../UI/Container/Container'
import Contacts from './../UI/Contacts/Contacts'
import HeaderControl from './HeaderControl'

// icons
import ComparisonIcon from './../SVG/ComparisonIcon'
import FavouritesIcon from './../SVG/FavouritesIcon'
import CartIcon from './../SVG/CartIcon'
import PhoneIcon from './../SVG/PhoneIcon'
import BurgerIcon from './../SVG/BurgerIcon'
import SearchIcon from './../SVG/SearchIcon'

const Header = () => {
    const [width] = useWindowSize()

    const [isPhoneMini, setIsPhoneMini] = useState(false)
    const [isSearchMini, setIsSearchMini] = useState(false)

    useEffect(() => {
        width <= 1120 ? setIsPhoneMini(true) : setIsPhoneMini(false)
    }, [width])

    useEffect(() => {
        width <= 750 ? setIsSearchMini(true) : setIsSearchMini(false)
    }, [width])

    return (
        <HeaderWrapper>
            <HeaderTop />

            <div>
                <Container>
                    <HeaderInner>
                        {!isPhoneMini
                            ? <Contacts
                                number='8 800 551-92-02'
                                subTitle='Бесплатный звонок по РФ'
                                phone
                                shadow
                            />
                            : <BurgerBtn type='button'>
                                <BurgerIcon />
                            </BurgerBtn>
                        }

                        {!isSearchMini
                            ? <Search />
                            : <SearchMini type='button'>
                                <SearchIcon />
                            </SearchMini>
                        }

                        <HeaderControl />

                    </HeaderInner>
                </Container>
            </div>
            <HeaderBottom />
        </HeaderWrapper >
    )
}

export default Header

// styles
const HeaderWrapper = styled.header`
    min-height: 80px;
    background-color: #fff;
`

const BurgerBtn = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    margin-right: 15px;
`

const HeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 0;  

    @media (max-width: 750px) {
        justify-content: flex-start;          
    }    
`

const SearchMini = styled.button`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
`

