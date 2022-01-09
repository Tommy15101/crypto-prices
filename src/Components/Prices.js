import React, { useState, useEffect } from 'react'
import {
    CoinWrapper,
    CoinSearch,
    CoinText,
    FormInput,
    CoinDisplay
} from "../Styles/PricesStyled"
import axios from "axios"
import Coin from './Coin'

const Prices = () => {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        axios
        .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res => {
            setCoins(res.data);
        }).catch(error => console.log(error));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLocaleLowerCase()))

    return (
        <CoinWrapper>
            <CoinSearch>
                <CoinText>Live Cryto Prices</CoinText>
                    <form>
                        <FormInput type="text" placeholder="Search . . ." onChange={handleChange} />
                    </form>
                </CoinSearch>
            <CoinDisplay>
                {filteredCoins.map(coin => {
                    return (
                        <Coin 
                            key={coin.id}
                            image={coin.image}  
                            name={coin.name} 
                            price={coin.current_price} 
                            priceChange={coin.price_change_percentage_24h}
                        />
                    )
                })}
            </CoinDisplay>
        </CoinWrapper>
    )
}

export default Prices
