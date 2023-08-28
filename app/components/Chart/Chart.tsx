import useSWR from "swr";
import styles from "./Chart.module.scss";
import XAxis from "../XAxis/XAxis";
import YAxis from "../YAxis/YAxis";
import Columns from "../Columns/Columns";

interface ChartProps {
    monthNumber: number;
}

const fetcher = (input: RequestInfo, init: RequestInit, ...args: any[]) =>
    fetch(input, init).then((res) => res.json());

const Chart = ({ monthNumber }: ChartProps) => {
    const getQuery = (monthNumber: number): string => {
        const data = {
            1: "month",
            6: "half_year",
            12: "year",
        };

        return data[monthNumber as keyof typeof data];
    };

    const query = getQuery(monthNumber);

    const { data, error, isLoading } = useSWR(`/api/${query}`, fetcher);

    if (error)
        return (
            <div className={styles.container + " " + styles.container__message}>
                Failed to load
            </div>
        );

    return (
        <div className={styles.container}>
            <YAxis />
            <XAxis monthNumber={monthNumber} />
            {data && <Columns monthNumber={monthNumber} data={data} />}
        </div>
    );
};

export default Chart;
