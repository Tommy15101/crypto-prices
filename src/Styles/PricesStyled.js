import styled from "styled-components";

export const CoinWrapper = styled.div`
    box-sizing: border-box;
    position: absolute;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 5fr;
    color: aliceblue;
    background-color: rgba(0,0,0,0.8);
    height: 100%;
    width: 100%;
`
export const CoinSearch = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const CoinDisplay = styled.div`
    max-height: 70vh;
    overflow-y: scroll;
`

export const CoinText = styled.h1`
    margin-bottom: 32px;
    text-align: center;
    color: white;
`
export const FormInput = styled.input`
    padding-left: 16px;
    width: 300px;
    height: 50px;
    border-radius: 4px;
    border: none;
    background-image: linear-gradient(-225deg, #423005 0%, #423005 48%, #573d00 100%);
    color: #e2e2e2;
    letter-spacing: 2px;
    ::placeholder {
        color: white;
    }
`