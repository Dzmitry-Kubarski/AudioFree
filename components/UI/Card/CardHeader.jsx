import styled from 'styled-components'

import ComparisonIcon from '@/SVG/ComparisonIcon'
import FavouritesIcon from '@/SVG/FavouritesIcon'

import ButtonIcon from '@/UI/ButtonIcon/ButtonIcon'
import LabelInStock from '@/UI/Labels/LabelInStock/LabelInStock'

const CardHeader = () => {
    return (
        <CardHeaderWrap>
            <LabelInStock />

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

export const CardHeaderWrap = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`

const CardBtnWrap = styled.div`
    margin-right: 10px;

    &:last-child {
        margin-right: 0;
    }
`