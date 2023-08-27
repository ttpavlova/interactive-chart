import styles from "./Column.module.scss";

interface ColumnProps {
    value: number;
}

const Column = ({ value }: ColumnProps) => {
    const columnStyle = value === 560 ? styles.item__small : styles.item__large;

    return <div className={styles.item + " " + columnStyle}></div>;
};

export default Column;
