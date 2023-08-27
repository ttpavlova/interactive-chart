"use client";

import { useState } from "react";
import styles from "../styles/MainComponent.module.scss";
import Chart from "./Chart";
import ChartHeader from "./ChartHeader";

const MainComponent = () => {
    const [monthNumber, setMonthNumber] = useState(1);

    const changeMonthNumber = (newNumber: number) => {
        setMonthNumber(newNumber);
    };

    return (
        <div className={styles.container}>
            <ChartHeader changeMonthNumber={changeMonthNumber} />
            <Chart monthNumber={monthNumber} />
        </div>
    );
};

export default MainComponent;
