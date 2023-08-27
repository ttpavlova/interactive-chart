import styles from "../styles/YAxis.module.scss";

const YAxis = () => {
    const values = ["0", "500", "1 000", "2 000", "5 000", "10 000"].reverse();

    return (
        <div className={styles.container}>
            <ul>
                {values.map((value) => (
                    <li key={value} className={"text " + styles.list__item}>
                        {value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default YAxis;
