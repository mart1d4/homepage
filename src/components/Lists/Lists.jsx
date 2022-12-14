import styles from './Lists.module.css';
import icons from '../../assets/icons';

const listCards = [
    [
        {
            name: 'First Item',
            url: 'https://www.',
        },
        {
            name: 'Second Item',
            url: 'https://www.',
        },
        {
            name: 'Third Item',
            url: 'https://www.',
        },
        {
            name: 'Fourth Item',
            url: 'https://www.',
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
