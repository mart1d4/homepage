import Head from 'next/head';
import { Time, Weather, Cards, Lists } from '../components';
import styles from '../styles/main.module.css';
import { motion, AnimatePresence } from 'framer-motion';

const Main = () => {
    return (
        <>
            <Head>
                <title>Home Page</title>
                <link rel='icon' href='/images/favicon.svg' />
            </Head>
            <AnimatePresence>
                <motion.main
                    className={styles.main}
                    initial={{
                        opacity: 0,
                        y: 100,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        y: 100,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                >
                    <Time />
                    <Weather />
                    <Cards />
                    <Lists />
                </motion.main>
            </AnimatePresence>
        </>
    );
}

export default Main