"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Dropdown.module.scss";

const Dropdown = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <div className={styles.container}>
            <span className={"text " + styles.text_positioned}>
                За последний месяц
            </span>
            <Image
                src="/arrow.svg"
                alt="arrow"
                width={28}
                height={17}
                className={styles.arrow + (open ? " " + styles.hidden : "")}
                onClick={handleClick}
            ></Image>
        </div>
    );
};

export default Dropdown;
