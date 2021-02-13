import styled, { css } from 'styled-components'

const LabelChecked = ({ fill }) => {
    return (
        <Wrapper fill={fill} width={13} height={14} viewBox="0 0 13 14" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
                <path d="M6.5 0C2.91576 0 0 2.95543 0 6.58844C0 10.2214 2.91576 13.1769 6.5 13.1769C10.0842 13.1769 13 10.2214 13 6.58844C13 2.95543 10.0842 0 6.5 0ZM9.79443 5.19225L6.27357 8.76092C6.16794 8.86799 6.02928 8.92187 5.89062 8.92187C5.75197 8.92187 5.61331 8.86799 5.50768 8.76092L3.7473 6.97659C3.53545 6.76195 3.53545 6.41492 3.7473 6.20028C3.95905 5.98555 4.30133 5.98555 4.51318 6.20028L5.89062 7.59647L9.02855 4.41595C9.2403 4.20121 9.58258 4.20121 9.79443 4.41595C10.0062 4.63058 10.0062 4.97752 9.79443 5.19225Z" />
            </g>

            <defs>
                <clipPath id="clip0">
                    <rect width={13} height="13.1769" fill="white" />
                </clipPath>
            </defs>
        </Wrapper>
    )
}

export default LabelChecked

const Wrapper = styled.svg`        
        width: 14px;
        height: 14px;
        fill: #0DB10A;
        margin-right: 10px;

    ${props => props.fill === 'orange' && css`
        fill: #FFC107;
    `}

    ${props => props.fill === 'purple' && css`
        fill: #8B75C8;
    `}
`