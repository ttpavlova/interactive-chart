import styles from "./Chart.module.scss";
import XAxis from "../XAxis/XAxis";
import YAxis from "../YAxis/YAxis";
import Columns from "../Columns/Columns";

interface ChartProps {
    monthNumber: number;
}

const Chart = ({ monthNumber }: ChartProps) => {
    return (
        <div className={styles.container}>
            <YAxis />
            <XAxis monthNumber={monthNumber} />
            <Columns monthNumber={monthNumber} />
        </div>
    );
};

export default Chart;
