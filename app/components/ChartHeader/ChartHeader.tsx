import styles from "./ChartHeader.module.scss";
import Dropdown from "../Dropdown/Dropdown";

interface ChartHeaderProps {
    changeMonthNumber: (newNumber: number) => void;
}

const ChartHeader = ({ changeMonthNumber }: ChartHeaderProps) => {
    return (
        <div className={styles.header}>
            <Dropdown changeMonthNumber={changeMonthNumber} />
        </div>
    );
};

export default ChartHeader;
