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
        title: 'Spotim',
        icon: icons.spotim,
        url: 'https://admin.spot.im/spot/sp_ANQXRpqH/moderation/comments/folder/pending/tag/all?priority=true&sortBy=newest',
    },
    {
        title: 'UPEC',
        icon: icons.upec,
        url: 'https://eprel.u-pec.fr/my/',
    },
];

const Cards = () => {
    const [displayTooltip, setDisplayTooltip] = useState(null);
    const tooltip = useRef(null);

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
                            if (!tooltip?.current?.contains(document.activeElement)) {
                                setDisplayTooltip(null);
                            }
                        }}
                    >
                        {cardEntry.icon}
                        <Tooltip
                            show={displayTooltip === cardEntry.title}
                            ref={tooltip}
                            position={index < 3 ? 'top' : 'bottom'}
                        >
                            {cardEntry.title}
                        </Tooltip>
                    </a>
                ))
            }
        </section>
    );
}

export default Cards