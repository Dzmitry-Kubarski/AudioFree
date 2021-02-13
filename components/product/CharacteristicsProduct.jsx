import styled from 'styled-components'

const CharacteristicsProduct = ({ characteristics }) => {
    return (
        <Wrapper>
            <List>
                <ListItem>Bluetooth: <span>{characteristics.bluetooth}</span></ListItem>

                <ListItem>Профили Bluetooth: <span>{characteristics.profilesBluetooth}</span></ListItem>

                <ListItem>Чувствительность: <span>{characteristics.sensitivity}</span></ListItem>

                <ListItem>Диапазон воспроизводимых частот: <span>{characteristics.range}</span></ListItem>

                <ListItem>Динамик (диффузор): <span>{characteristics.speaker}</span></ListItem>

                <ListItem>Импеданс: <span>{characteristics.impedance}</span></ListItem>

                <ListItem>Радиус действия: <span>{characteristics.radius}</span></ListItem>

                <ListItem>В режиме ожидания: <span>{characteristics.sleepMode}</span></ListItem>

                <ListItem>В режиме разговора: <span>{characteristics.talkMode}</span></ListItem>

                <ListItem>В режиме воспроизведения: <span>{characteristics.playbackЬode}</span></ListItem>

                <ListItem>Время заряда от USB: <span>{characteristics.chargingЕimeUSB}</span></ListItem>

                <ListItem>Вес наушников: <span>{characteristics.weight}</span></ListItem>
            </List>

            <PhotoBlock>
                <img src='/productPage/desc-2.jpg' alt='Иллюстрация - характеристики' />
            </PhotoBlock>
        </Wrapper>
    )
}

export default CharacteristicsProduct

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0;
`

const List = styled.div`
    width: 100%;
    max-width: 544px;
`

const ListItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 16px 26px;    
    
    &:nth-child(odd) {
        background: #F7F7F7;
        border-radius: 9px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        font-weight: 500;
        font-size: 14px;
    }

    span {
        font-weight: 300;
        font-size: 12px;
        margin-top: 4px;
    }    
`

const PhotoBlock = styled.div`
    img {
        max-width: 472px;
    }

    @media (max-width: 1180px) {
        display: none;
    }
`