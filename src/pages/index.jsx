import Head from 'next/head';
import { Time, Weather, Cards, Lists } from '../components';
import styles from '../styles/main.module.css';

const Main = () => {
    return (
        <>
            <Head>
                <title>Home Page</title>
                <link rel='icon' href='/images/favicon.svg' />
            </Head>
            <main
                className={styles.main}
            >
                <Time />
                <Weather />
                <Cards />
                <Lists />
            </main>
        </>
    );
}

export default Main