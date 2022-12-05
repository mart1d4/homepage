import styles from './Lists.module.css';

const listCards = [
    {
        icon: <>
                <path d='M21 19h-18l9 -15'></path>
                <path d='M20.615 15.171h.015'></path>
                <path d='M19.515 11.771h.015'></path>
                <path d='M17.715 8.671h.015'></path>
                <path d='M15.415 5.971h.015'></path>
            </>,
        content: [
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
        ]
    },
    {
        icon: <>
                <polyline points='7 8 3 12 7 16'></polyline>
                <polyline points='17 8 21 12 17 16'></polyline>
                <line x1='14' y1='4' x2='10' y2='20'></line>
            </>,
        content: [
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
    }
];

const Lists = () => {
    return (
        <section
            className={styles.listsContainer}
        >
            {
                listCards.map((list, index) => (
                    <div
                        key={index}
                        className={styles.list}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            className={styles.listIcon}
                        >
                            {list.icon}
                        </svg>
        
                        <ul
                            className={styles.listContent}
                        >
                            {
                                list.content.map((item) => (
                                    <li
                                        key={item.name}
                                    >
                                        <a
                                            href={item.url}
                                            target='_blank'
                                            className={styles.listItem}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                ))
            }
        </section>
    );
}

export default Lists