import styled from "styled-components";

export const CoinContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CoinRow = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    height: 70px;
    border-bottom: 1px solid grey;
    width: 90%;
    text-align: center;
    align-items: center;
`
export const CoinId = styled.div`
    display: flex;
    align-items: center;
    padding-right: 24px;
`
export const CoinnH1 = styled.h1`
    font-size: 16px;
`
export const CoinnImg = styled.img`
    height: 30px;
    margin-right: 10px;
`
export const CoinData = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
`
export const CoinPrice = styled.p`
    font-size: 15px;
`
export const PriceRed = styled.div`
    color: Red;
`
export const PriceGreen = styled.div`
    color: Green;
`