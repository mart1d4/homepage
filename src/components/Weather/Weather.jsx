import { useState, useEffect, useRef } from 'react';
const axios = require('axios');
import styles from './Weather.module.css';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Weather = () => {
    const [weather, setWeather] = useState(null);
    const [displayTooltip, setDisplayTooltip] = useState(false);
    const tempSpan = useRef(null);

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
        <section
            className={styles.weatherContainer}
        >
            <h1
                className={styles.weatherTitle}
            >
                {new Date().toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            </h1>
            <div
                className={styles.weatherContent}
            >
                <Image
                    src={weather ? `/images/${weather?.current.weather[0].icon}.png` : '/images/no-weather.png'}
                    alt={weather?.current.weather[0].description}
                    width={42}
                    height={42}
                />
                {
                    weather ? (
                        <p>
                            <span
                                onMouseEnter={() => setDisplayTooltip(true)}
                                onMouseLeave={() => setDisplayTooltip(false)}
                                ref={tempSpan}
                            >
                                {weather?.current?.temp}°C {' '}

                                <AnimatePresence>
                                    {
                                        displayTooltip && (
                                            <motion.span
                                                className={styles.feelsLikeTooltip}
                                                onMouseEnter={() => setDisplayTooltip(true)}
                                                onMouseLeave={() => {
                                                    if (!tempSpan.current.contains(event.relatedTarget)) {
                                                        setDisplayTooltip(false);
                                                    }
                                                }}
                                                initial={{ opacity: 0, transform: 'translateX(-50%) scale(0)' }}
                                                animate={{ opacity: 1, transform: 'translateX(-50%) scale(1)' }}
                                                exit={{ opacity: 0, transform: 'translateX(-50%) scale(0)' }}
                                                transition={{ duration: 0.2, ease: 'easeInOut' }}
                                            >
                                                Feels like {' ' + weather?.current?.feels_like}°C
                                            </motion.span>
                                        )
                                    }
                                </AnimatePresence>
                            </span>
                            {' | ' + weather?.current?.weather[0].description}
                        </p>
                    ) : (
                            <p>
                                Loading...
                        </p>
                    )
                }
            </div>
        </section>
    );
}

export default Weather