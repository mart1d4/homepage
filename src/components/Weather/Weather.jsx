import { useState, useEffect, useRef } from 'react';
const axios = require('axios');
import styles from './Weather.module.css';
import Image from 'next/image';
import { Tooltip } from '../Elements';

const Weather = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `https://api.openweathermap.org/data/3.0/onecall?lat=${process.env.NEXT_PUBLIC_LAT}&lon=${process.env.NEXT_PUBLIC_LON}&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`,
            );
            setWeather(result.data);
        };

        fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, 120000);
        
        return () => clearInterval(interval);
    }, []);

    return (
        <section className={styles.weatherContainer}>
            <h1>
                {new Date().toLocaleString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                })}
            </h1>

            <div>
                <Image
                    src={weather
                            ? `/images/${weather?.current.weather[0].icon}.png`
                            : '/images/no-weather.png'}
                    alt={weather?.current.weather[0].description ?? 'No weather data'}
                    width={42}
                    height={42}
                />
                {weather ? (
                    <div className={styles.weather}>
                        <Tooltip
                            text={`Feels like ${weather?.current?.feels_like}°C`}
                            arrow
                        >
                            <span>
                                {weather?.current?.temp}°C,
                            </span>
                        </Tooltip>
                        <p>{weather?.current?.weather[0].description}</p>
                    </div>
                ) : (
                        <p>
                            Loading...
                    </p>
                )}
            </div>
        </section>
    );
}

export default Weather