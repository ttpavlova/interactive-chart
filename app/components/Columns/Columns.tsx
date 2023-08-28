import Column from "./Column";
import styles from "./Columns.module.scss";
import { GraphValues } from "@/app/types";

interface ColumnsProps {
    monthNumber: number;
    data: GraphValues;
}

const Columns = ({ monthNumber, data }: ColumnsProps) => {
    const getColumnList = (data: GraphValues) => {
        const entries = Object.entries(data);

        return entries.map((column) => (
            <Column key={column[0] + monthNumber} value={column[1]} />
        ));
    };

    return <div className={styles.container}>{getColumnList(data)}</div>;
};

export default Columns;
