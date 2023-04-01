import { makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import {CryptoState} from "../../CryptoContext"
import { TrendingCoins } from '../../config/api'
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    carousel: {
        height: "50%",
        display: "flex",
        alignItems: "center",
    },
    carouselItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        textTransform: "uppercase",
        color: "white"
    }
}))

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Carousel = () => {
    const [trending, setTrending] = useState([]);
    const classes = useStyles();

    const { currency, symbol } = CryptoState();

    const fetchTrendingCoins = async () => {
        const { data } = await axios.get(TrendingCoins(currency));
        setTrending(data);
    }

    console.log(trending); 

    useEffect(() => {
        fetchTrendingCoins();
    }, [currency])

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 4,
        },
    }

    const items = trending.map((coin) => {
        let profit = coin.price_change_percentage_24h >= 0;
        return (
            <Link className={classes.carouselItem}
            to={'/coins/${coin.id}'}>
                <img 
                src={coin.image}
                alt={coin.name}
                height="80"
                style={{marginBottom: 10}}/>
                <span>
                    {coin.symbol}
                    <span style={{
                        color: profit > 0 ? "green" : "red",
                        fontWeight: 500
                    }}>
                        {profit && "+"} {coin.price_change_percentage_24h.toFixed(2)}
                    </span>
                </span>
                <br></br>
                <span style={{fontSize: 22, fontWeight: 500}}>
                    {symbol} {numberWithCommas(coin.current_price.toFixed(2))}

                </span>
            </Link>
        )
    })

    return (
        <div className={classes.carousel}>
            <AliceCarousel mouseTracking infinite autoPlayInterval={1000} 
            animationDuration={1500} disableDotsControls responsive={responsive}
            autoPlay items={items} disableButtonsControls/>
        </div>
    )
}

export default Carousel
