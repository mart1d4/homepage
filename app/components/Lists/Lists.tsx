import styles from './Lists.module.css';
import icons from '../../assets/icons';

const listCards = [
    [
        {
            name: 'UPEC',
            url: 'https://eprel.u-pec.fr/my/',
        },
        {
            name: 'ADE',
            url: 'https://ade.u-pec.fr/direct/',
        },
        {
            name: 'Caseine',
            url: 'https://moodle.caseine.org/',
        },
        {
            name: 'SpotIm',
            url: 'https://admin.spot.im/spot/sp_ANQXRpqH/moderation/comments/folder/pending/tag/all?priority=true&sortBy=newest',
        },
        {
            name: 'Fifth Item',
            url: 'https://www.',
        },
    ],
    [
        {
            name: 'React Docs',
            url: 'https://www.reactjs.org/docs/getting-started.html',
        },
        {
            name: 'NextJS Docs',
            url: 'https://www.nextjs.org/docs',
        },
        {
            name: 'Vercel',
            url: 'https://www.vercel.com/',
        },
        {
            name: 'The Odin Project',
            url: 'https://www.theodinproject.com/',
        },
        {
            name: 'Tabler Icons',
            url: 'https://www.tabler-icons.io/',
        },
    ]
];

const Lists = () => {
    return (
        <section className={styles.listsContainer}>
            {listCards.map((list, index) => (
                <div
                    key={index}
                    className={styles.list}
                >
                    {index === 0
                        ? icons.firstListIcon
                        : icons.secondListIcon}
        
                    <ul className={styles.listContent}>
                        {list.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.url}
                                    target='_blank'
                                    className={styles.listItem}
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    );
}

export default Lists
