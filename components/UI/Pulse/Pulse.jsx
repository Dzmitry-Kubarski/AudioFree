import styled from 'styled-components'

const Pulse = () => {
    return (
        <PulseWrapper>
            <PulseItem />
            <PulseItem />
            <PulseItem />
            <PulseItem />
        </PulseWrapper>
    )
}

export default Pulse

export const PulseWrapper = styled.div`
    position: absolute;  
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 405px;
    width: 405px;
    max-width: 405px;
    border: none;
    border-radius: 50%;
    background-color: #fff;
    opacity: .1; 
`

export const PulseItem = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    height: 405px;
    width: 405px;
    max-width: 405px;
    border: 1px solid #fef5e1;
    border-radius: 50%;
    opacity: .3;
    animation: animPulse 6s linear infinite;

    &:nth-child(1) {
        animation-delay: 0s;
    }

    &:nth-child(2) {
        animation-delay: 2s;
    }

    &:nth-child(3) {
        animation-delay: 4s;
    }

    &:nth-child(4) {
        animation-delay: 6s;
    }  


    @keyframes animPulse {
        0% {
            transform: scale(1);
        } 

        10% {
            opacity: .9;
        }  

        100% {
            opacity: 0;
            transform: scale(1.7);
        }
    }

`