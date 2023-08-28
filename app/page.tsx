import MainComponent from "./components/MainComponent/MainComponent";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <MainComponent />
        </main>
    );
}
