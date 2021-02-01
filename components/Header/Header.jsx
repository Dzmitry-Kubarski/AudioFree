// core
import Link from 'next/link'

// libs
import styled from 'styled-components'


// utils
import { vars } from '../../styles/vars'

// components
import HeaderTop from '../Header/HeaderTop/HeaderTop'
import HeaderBottom from '../Header/HeaderBottom/HeaderBottom'
import FreeCcall from './../UI/FreeCcall/FreeCcall'
import Search from './../UI/Search/Search'
import { Container } from '../UI/Container/Container'

// icons
import ComparisonIcon from './../SVG/ComparisonIcon'
import FavouritesIcon from './../SVG/FavouritesIcon'
import CartIcon from './../SVG/CartIcon'

const Header = () => {
    return (
        <StyledHeader>
            <HeaderTop />

            <div>
                <Container>
                    <StyledHeaderInner>
                        <FreeCcall />
                        <Search />

                        <StyledControl>
                            <StyledControlItem>
                                <Link href='/comparison'>
                                    <StyledControlLink>
                                        <ComparisonIcon />
                                        <StyledControlCounter>1</StyledControlCounter>
                                    </StyledControlLink>
                                </Link>
                            </StyledControlItem>

                            <StyledControlItem>
                                <Link href='/favourites'>
                                    <StyledControlLink>
                                        <FavouritesIcon />
                                        <StyledControlCounter>23</StyledControlCounter>
                                    </StyledControlLink>
                                </Link>
                            </StyledControlItem>

                            <StyledControlItem>
                                <Link href='/cart'>
                                    <StyledControlLink>
                                        <CartIcon />
                                        <StyledControlCounter>55</StyledControlCounter>
                                    </StyledControlLink>
                                </Link>
                            </StyledControlItem>
                        </StyledControl>

                    </StyledHeaderInner>
                </Container>
            </div>
            <HeaderBottom />
        </StyledHeader >
    )
}

export default Header

// styles
export const StyledHeader = styled.header`
    min-height: 80px;
    background-color: #fff;
`

export const StyledHeaderInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 0;  
`

export const StyledControl = styled.div`
    display: flex;
    align-items: center; 
`

export const StyledControlItem = styled.div`
    position: relative;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0px 5.81081px 15.1081px rgba(140, 121, 199, 0.3);
    border-radius: 50%;
    margin-right: 30px;

    &:last-child {
        margin-right: 5px;

        @media (max-width: 768px) {
            margin-right: 0;   
        }
    }
`

export const StyledControlLink = styled.a`
    svg {
        width: 25px;
        height: 25px;
    }

    path {        
        transition: fill .2s linear;
    }

    &:hover {
        svg, path {
            fill: ${vars.colorGreen};
        }
    }
`

export const StyledControlCounter = styled.span`
    position: absolute;
    right: -10px;
    top: -10px;
    width: 20px;
    height: 20px;
    background-color: #34C900;
    text-align: center;
    line-height: 20px;
    border-radius: 50%;
    color: white;

    @media (max-width: 490px) {
        width: 13px;
        height: 13px;
        font-size: 9px;
        line-height: 11px;   
    }
`