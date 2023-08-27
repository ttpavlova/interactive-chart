"use client";

import { useState } from "react";
import styles from "./MainComponent.module.scss";
import Chart from "../Chart/Chart";
import ChartHeader from "../ChartHeader/ChartHeader";

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
