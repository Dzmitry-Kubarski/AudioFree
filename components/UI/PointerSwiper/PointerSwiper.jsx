import styled from 'styled-components'

import SwaperIcon from '@/SVG/SwaperIcon'

const PointerSwiper = () => {
    return (
        <Wrapper>
            <SwaperIcon />
        </Wrapper>
    )
}

export default PointerSwiper

const Wrapper = styled.div`
    width: 39px;
    height: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    box-shadow: 0px 5.81081px 15.1081px rgba(140, 121, 199, 0.3);
    border-radius: 25.5676px;
`
