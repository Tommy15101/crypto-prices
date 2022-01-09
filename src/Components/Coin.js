import React from 'react'
import { 
    CoinContainer,
    CoinRow,
    CoinId,
    CoinnH1,
    CoinnImg,
    CoinData,
    CoinPrice,
    PriceRed,
    PriceGreen
} from '../Styles/CoinStyled'

const Coin = ({ image, name, price, priceChange }) => {
    return (
        <CoinContainer>
            <CoinRow>
                <CoinId>
                    <CoinnImg src={image} alt={crypto} />
                    <CoinnH1>{name}</CoinnH1>
                </CoinId>
                <CoinData>
                    {priceChange < 0 ? (<PriceRed>24 hrs / {priceChange.toFixed(2)}%</PriceRed>) : (<PriceGreen>24 hrs / {priceChange.toFixed(2)}%</PriceGreen>)}
                </CoinData>
                <CoinPrice>$ {price}</CoinPrice>
            </CoinRow>
        </CoinContainer>
    )
}

export default Coin
