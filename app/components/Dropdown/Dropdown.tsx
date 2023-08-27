"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Dropdown.module.scss";

interface DropdownProps {
    changeMonthNumber: (newNumber: number) => void;
}

const Dropdown = ({ changeMonthNumber }: DropdownProps) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("За последний месяц");

    const dropdownOptionsAll = [
        { id: 1, text: "За последний месяц", monthNumber: 1 },
        { id: 2, text: "За последние 6 месяцев", monthNumber: 6 },
        { id: 3, text: "За последний год", monthNumber: 12 },
    ];

    const dropdownOptions = dropdownOptionsAll.filter(
        (option) => option.text !== value
    );

    const openDropdown = () => {
        setOpen((prevState) => !prevState);
    };

    const changeValue = (text: string, monthNumber: number) => {
        setValue(text);
        setOpen(false);
        changeMonthNumber(monthNumber);
    };

    return (
        <div className={styles.dropdown_container}>
            <span className={"text " + styles.text_positioned}>{value}</span>
            <Image
                role="button"
                src="/arrow.svg"
                alt="arrow"
                width={28}
                height={17}
                className={
                    styles.arrow + (open ? " " + styles.arrow__flipped : "")
                }
                onClick={openDropdown}
                aria-expanded={open}
            ></Image>

            <div
                className={
                    styles.dropdown_options +
                    (open ? "" : " " + styles.dropdown_options__hidden)
                }
            >
                <ul className={styles.dropdown_list}>
                    {dropdownOptions.map((option) => (
                        <button
                            key={option.id}
                            className={styles.dropdown_item}
                            onClick={() =>
                                changeValue(option.text, option.monthNumber)
                            }
                        >
                            <span
                                className={"text " + styles.dropdown_item__text}
                            >
                                {option.text}
                            </span>
                        </button>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dropdown;
