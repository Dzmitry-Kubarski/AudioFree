// libs
import styled, { css } from 'styled-components'

// icons
import CheckedIcon from './../../SVG/CheckedIcon'
import ComparisonIcon from './../../SVG/ComparisonIcon'
import FavouritesIcon from './../../SVG/FavouritesIcon'

// utils
import { vars } from '../../../styles/vars'

// components
import ButtonIcon from './../ButtonIcon/ButtonIcon'

const CardHeader = () => {
    return (
        <CardHeaderWrap>
            <CardLabel>
                В наличии
                <CheckedIcon />
            </CardLabel>

            <CardBtnWrap>
                <ButtonIcon>
                    <ComparisonIcon />
                </ButtonIcon>
            </CardBtnWrap>

            <CardBtnWrap>
                <ButtonIcon>
                    <FavouritesIcon />
                </ButtonIcon>
            </CardBtnWrap>
        </CardHeaderWrap>
    )
}

export default CardHeader

// styles
export const CardHeaderWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`

const CardLabel = styled.div`
    position: relative;
    font-size: 12px;
    color: ${vars.colorBlack};
    text-align: center;
    border: 1px solid #DCDCDC;
    border-radius: 14px;
    padding: 5px 12px 5px 25px;   
    margin-right: auto;

    svg {
        position: absolute;
        top: 50%;
        left: 5px;
        transform: translateY(-50%);
        width: 14px;
        height: 14px;
    }
`

const CardBtnWrap = styled.div`
    margin-right: 10px;

    &:last-child {
        margin-right: 0;
    }
`