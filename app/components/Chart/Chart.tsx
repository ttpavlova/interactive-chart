import styles from "./Chart.module.scss";
import XAxis from "../XAxis/XAxis";
import YAxis from "../YAxis/YAxis";

interface ChartProps {
    monthNumber: number;
}

const Chart = ({ monthNumber }: ChartProps) => {
    return (
        <div className={styles.container}>
            <YAxis />
            <XAxis monthNumber={monthNumber} />
        </div>
    );
};

export default Chart;
