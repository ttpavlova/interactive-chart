import styles from "../styles/MainComponent.module.scss";
import Chart from "./Chart";
import ChartHeader from "./ChartHeader";

const MainComponent = () => {
    return (
        <div className={styles.container}>
            <ChartHeader />
            <Chart />
        </div>
    );
};

export default MainComponent;
