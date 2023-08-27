import Image from "next/image";
import styles from "./page.module.css";
import MainComponent from "./components/MainComponent/MainComponent";

export default function Home() {
    return (
        <main className={styles.main}>
            <MainComponent />
        </main>
    );
}
