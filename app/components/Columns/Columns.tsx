import Column from "./Column";
import styles from "./Columns.module.scss";
import { month, half_year, year } from "../../data";

interface ColumnsProps {
    monthNumber: number;
}

const Columns = ({ monthNumber }: ColumnsProps) => {
    let columnsNumber = 0;
    let data = [];

    switch (monthNumber) {
        case 1:
            columnsNumber = 31;
            data = Object.entries(month);
            break;
        case 6:
            columnsNumber = 6;
            data = Object.entries(half_year);
            break;
        case 12:
            columnsNumber = 12;
            data = Object.entries(year);
            break;
        default:
            columnsNumber = 31;
            data = Object.entries(month);
    }

    return (
        <div className={styles.container}>
            {data.map((column) => (
                <Column key={column[0]} value={column[1]} />
            ))}
        </div>
    );
};

export default Columns;
