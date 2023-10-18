import { useState, useEffect } from "react";
import styles from "./Weather.module.css";
import { Tooltip } from "@components";
import Image from "next/image";

export default function Weather() {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
            const url = "https://api.openweathermap.org";
            const lat = process.env.NEXT_PUBLIC_LAT;
            const lon = process.env.NEXT_PUBLIC_LON;

            const result = await fetch(
                `${url}/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${token}`
            ).then((res) => res.json());

            setWeather(result.current);
        };

        fetchData();

        const interval = setInterval(() => {
            fetchData();
        }, 120000);

        return () => clearInterval(interval);
    }, []);

    const icon = weather?.weather[0].icon;
    const iconUrl = "/assets/weather";

    return (
        <section className={styles.weatherContainer}>
            <h1>
                {new Date().toLocaleString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                })}
            </h1>

            <div>
                <Image
                    src={weather ? `${iconUrl}/${icon}.png` : `${iconUrl}/no-weather.png`}
                    alt={weather?.weather[0].description || "No weather data"}
                    width={42}
                    height={42}
                />

                {weather ? (
                    <div className={styles.weather}>
                        <Tooltip text={`Feels like ${weather?.feels_like}°C`} arrow>
                            <span>{weather?.temp}°C,</span>
                        </Tooltip>

                        <p>{weather?.weather[0].description}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </section>
    );
}
