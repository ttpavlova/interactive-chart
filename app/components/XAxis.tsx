import styles from "../styles/XAxis.module.scss";

interface XAxisProps {
    monthNumber: number;
}

const XAxis = ({ monthNumber }: XAxisProps) => {
    const valuesMonth = ["01", "05", "10", "15", "20", "25", "30"];
    const valuesYear = [
        "Янв",
        "Фев",
        "Март",
        "Апр",
        "Май",
        "Июнь",
        "Июль",
        "Авг",
        "Сент",
        "Окт",
        "Нояб",
        "Дек",
    ];

    const today = new Date();
    const month = today.getMonth();

    const getValues6Months = (month: number) => {
        if (month >= 5) {
            return valuesYear.slice(month - 5, month + 1);
        } else {
            return valuesYear
                .slice(month - 5)
                .concat(valuesYear.slice(0, month + 1));
        }
    };

    const values6Months = getValues6Months(month);

    let values = [];

    switch (monthNumber) {
        case 1:
            values = valuesMonth;
            break;
        case 6:
            values = values6Months;
            break;
        case 12:
            values = valuesYear;
            break;
        default:
            values = valuesMonth;
    }

    return (
        <div className={styles.container}>
            <ul className={styles.list_items}>
                {values.map((value) => (
                    <li key={value} className={"text " + styles.list__item}>
                        {value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default XAxis;
