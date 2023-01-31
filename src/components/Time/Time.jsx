import { useState, useEffect, useRef } from 'react';
import styles from './Time.module.css';

const Time = () => {
    const [time, setTime] = useState('');
    const [search, setSearch] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        setTime(new Date().toLocaleTimeString());

        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        inputRef.current.focus();

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className={styles.timeContainer}
        >
            <p
                className={styles.time}
            >
                {time}
            </p>

            <form
                action={`https://www.google.com/search?q=${search}`}
                method='GET'
                target='_blank'
                onSubmit={() => {
                    setTimeout(() => {
                        setSearch('');
                    }, 1000);
                }}
                className={styles.search}
            >
                <input
                    ref={inputRef}
                    name='q'
                    type='text'
                    placeholder='Search Google'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className={styles.searchInput}
                    autoFocus
                    maxLength={2048}
                    required
                />

                <button
                    type='submit'
                    className={styles.searchButton}
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                    >
                        <circle cx='10' cy='10' r='7'></circle>
                        <line x1='21' y1='21' x2='15' y2='15'></line>
                    </svg>
                </button>
            </form>
        </section>
    );
}

export default Time