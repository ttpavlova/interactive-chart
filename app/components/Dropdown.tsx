"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Dropdown.module.scss";

const Dropdown = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("За последний месяц");

    const dropdownOptionsAll = [
        { id: 1, text: "За последний месяц" },
        { id: 2, text: "За последние 6 месяцев" },
        { id: 3, text: "За последний год" },
    ];

    const dropdownOptions = dropdownOptionsAll.filter(
        (option) => option.text !== value
    );

    const openDropdown = () => {
        setOpen((prevState) => !prevState);
    };

    const changeValue = (text: string) => {
        setValue(text);
        setOpen(false);
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
                    styles.arrow + (open ? " " + styles.arrow__hidden : "")
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
                            onClick={() => changeValue(option.text)}
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
