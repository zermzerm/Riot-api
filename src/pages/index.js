import styles from "./Main.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.searchContainer}>
          <input className={styles.searchBar} placeholder="Search..." />
          <Image
            src="/searchIcon.png"
            alt="Search Icon"
            width={50}
            height={50}
          />
        </div>
      </main>
    </>
  );
}
