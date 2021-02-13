
import styled from 'styled-components'

import ComparisonIcon from '@/SVG/ComparisonIcon'
import FavouritesIcon from '@/SVG/FavouritesIcon'

import ButtonIcon from '@/UI/ButtonIcon/ButtonIcon'
import LabelDaysWarning from '@/UI/Labels/LabelDaysWarning/LabelDaysWarning'
import LabelChecked from '@/UI/Labels/LabelChecked/LabelChecked'


const ShopInfo = ({ article }) => {
    return (
        <ShopInfoBlock>
            <Article>Артикул: {article}</Article>

            <ShopInfoRow>
                <LabelDaysWarning countDay={5} />

                <ControlBtns>
                    <ButtonIconWrap>
                        <ButtonIcon>
                            <ComparisonIcon />
                        </ButtonIcon>
                    </ButtonIconWrap>

                    <ButtonIconWrap>
                        <ButtonIcon>
                            <FavouritesIcon />
                        </ButtonIcon>
                    </ButtonIconWrap>
                </ControlBtns>
            </ShopInfoRow>

            <ShopInfoInner>
                <ShopInfoCol>
                    <h4>Доставка:</h4>
                    <ul>
                        <li><LabelChecked fill='purple' /> Санкт-Петербург</li>
                        <li><LabelChecked fill='purple' /> Ленинградская область</li>
                        <li><LabelChecked fill='purple' /> Россия</li>
                    </ul>
                </ShopInfoCol>

                <ShopInfoCol>
                    <h4>Варианты оплаты:</h4>
                    <ul>
                        <li><LabelChecked fill='orange' /> Наличными</li>
                        <li><LabelChecked fill='orange' /> Оплата картой</li>
                        <li><LabelChecked fill='orange' /> Оплата по счету</li>
                    </ul>
                </ShopInfoCol>

                <ShopInfoCol>
                    <h4>Наши преимущества:</h4>
                    <ul>
                        <li><LabelChecked fill='green' /> Гарантия</li>
                        <li><LabelChecked fill='green' /> Возврат и обме</li>
                        <li><LabelChecked fill='green' /> Лучшая цена</li>
                    </ul>
                </ShopInfoCol>
            </ShopInfoInner>
        </ShopInfoBlock>
    )
}

export default ShopInfo

const ShopInfoBlock = styled.div`
    width: 100%;
    max-width: 270px;    

    @media (max-width: 1180px) {
        max-width: 100%;
    }
`

const ShopInfoInner = styled.div`
    background: #FFFFFF;
    border: 0.8px solid #E3E3E3;
    border-radius: 7.31507px;

    @media (max-width: 1180px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: 640px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

const ShopInfoCol = styled.div`
    padding: 22px;
    border-bottom: 0.8px solid #E3E3E3;

    h4 {
        font-weight: 500;
        font-size: 14px;
        color: #353535;
        margin-bottom: 20px;
    }

    ul {

        li {
            display: flex;
            align-items: center;
            margin-bottom: 15px;

            &:last-child {
                margin-bottom: 0;
            }                      
        }
    }

    &:last-child {
        border-bottom: none;
    }

    @media (max-width: 1180px) {
        border-bottom: none;
    }
`

const Article = styled.span`
    display: block;
    text-align: right;
    margin-bottom: 15px;
`

const ShopInfoRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
`

const ControlBtns = styled.div`
    display: flex;
    align-items: center;
`

const ButtonIconWrap = styled.div`
    margin-right: 10px;

    &:last-child {
        margin-right: 0;
    }
`