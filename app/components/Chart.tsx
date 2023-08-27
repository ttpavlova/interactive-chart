import styles from "../styles/Chart.module.scss";
import XAxis from "./XAxis";
import YAxis from "./YAxis";

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
