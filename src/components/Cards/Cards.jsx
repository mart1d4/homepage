import styles from './Cards.module.css';
import { motion } from 'framer-motion';

const cardEntries = [
    {
        title: 'YouTube',
        icon: <>
                <rect x='3' y='5' width='18' height='14' rx='4'></rect>
                <path d='M10 9l5 3l-5 3z'></path>
            </>,
        url: 'https://youtube.com',
    },
    {
        title: 'GitHub',
        icon: <>
                <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
            </>,
        url: 'https://github.com',
    },
    {
        title: 'Whimsical',
        icon: <>
                <rect x='8' y='8' width='8' height='8' rx='1'></rect>
                <line x1='3' y1='8' x2='4' y2='8'></line>
                <line x1='3' y1='16' x2='4' y2='16'></line>
                <line x1='8' y1='3' x2='8' y2='4'></line>
                <line x1='16' y1='3' x2='16' y2='4'></line>
                <line x1='20' y1='8' x2='21' y2='8'></line>
                <line x1='20' y1='16' x2='21' y2='16'></line>
                <line x1='8' y1='20' x2='8' y2='21'></line>
                <line x1='16' y1='20' x2='16' y2='21'></line>
            </>,
        url: 'https://whimsical.com',
    },
    {
        title: 'Figma',
        icon: <>
                <circle cx='15' cy='12' r='3'></circle>
                <rect x='6' y='3' width='12' height='6' rx='3'></rect>
                <path d='M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3v-15'></path>
            </>,
        url: 'https://figma.com',
    },
    {
        title: 'Spotim',
        icon: <>
                <rect x='3' y='7' width='18' height='13' rx='2'></rect>
                <path d='M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2'></path>
                <line x1='12' y1='12' x2='12' y2='12.01'></line>
                <path d='M3 13a20 20 0 0 0 18 0'></path>
            </>,
        url: 'https://admin.spot.im/spot/sp_ANQXRpqH/moderation/comments/folder/pending/tag/all?priority=true&sortBy=newest',
    },
    {
        title: 'UPEC',
        icon: <>
                <path d='M22 9l-10 -4l-10 4l10 4l10 -4v6'></path>
                <path d='M6 10.6v5.4a6 3 0 0 0 12 0v-5.4'></path>
            </>,
        url: 'https://eprel.u-pec.fr/my/',
    },
];

const Cards = () => {
    return (
        <section
            className={styles.cardsContainer}
        >
            {
                cardEntries.map((cardEntry, index) => (
                    <motion.a
                        href={cardEntry.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        key={cardEntry.title}
                        className={styles.card}
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                            transition: {
                                duration: 0.05,
                            },
                        }}
                        whileTap={{
                            scale: 0.95,
                            transition: {
                                duration: 0.05,
                            },
                        }}
                        
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                        >
                            {cardEntry.icon}
                        </svg>
                    </motion.a>
                ))
            }
        </section>
    );
}

export default Cards