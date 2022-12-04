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
                <path d='M12 15h-6.5a2.5 2.5 0 1 1 0 -5h.5'></path>
                <path d='M15 12v6.5a2.5 2.5 0 1 1 -5 0v-.5'></path>
                <path d='M12 9h6.5a2.5 2.5 0 1 1 0 5h-.5'></path>
                <path d='M9 12v-6.5a2.5 2.5 0 0 1 5 0v.5'></path>
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