import styles from "../styles/ChartHeader.module.scss";
import Dropdown from "./Dropdown";

const ChartHeader = () => {
    return (
        <div className={styles.header}>
            <Dropdown />
        </div>
    );
};

export default ChartHeader;
