import styles from './Cards.module.css';
import icons from '../../assets/icons';
import { Tooltip } from '../Elements';
import { useState, useRef } from 'react';

const cardEntries = [
    {
        title: 'YouTube',
        icon: icons.youtube,
        url: 'https://youtube.com',
    },
    {
        title: 'GitHub',
        icon: icons.github,
        url: 'https://github.com',
    },
    {
        title: 'Whimsical',
        icon: icons.whimsical,
        url: 'https://whimsical.com',
    },
    {
        title: 'Figma',
        icon: icons.figma,
        url: 'https://figma.com',
    },
    {
        title: 'Gmail',
        icon: icons.gmail,
        url: 'https://mail.google.com/mail/u/0/?ogbl',
    },
    {
        title: 'Framer',
        icon: icons.framer,
        url: 'https://www.framer.com/motion/',
    },
];

const Cards = () => {
    const [displayTooltip, setDisplayTooltip] = useState(null);
    const tooltips = useRef([]);
    
    return (
        <section className={styles.cardsContainer}>
            {
                cardEntries.map((cardEntry, index) => (
                    <a
                        key={cardEntry.title}
                        href={cardEntry.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={styles.card}
                        onMouseEnter={() => setDisplayTooltip(cardEntry.title)}
                        onMouseLeave={() => {
                            if (!tooltips?.current[index]?.contains(document.activeElement)) {
                                setDisplayTooltip(null);
                            }
                        }}
                    >
                        {cardEntry.icon}
                        
                        <span
                            ref={el => tooltips.current[index] = el}
                        >
                            <Tooltip
                                show={displayTooltip === cardEntry.title}
                                position={index < 3 ? 'top' : 'bottom'}
                                title={cardEntry.title}
                            />
                        </span>
                    </a>
                ))
            }
        </section>
    );
}

export default Cards