"use client"
import styles from "./page.module.css";

export default function Home() {

  const handleClickGenerate = () =>{
    alert("I start")
  }

  return (
    <main className={styles.main}>

      <div className={styles.content}>
        <div className={styles.contenttitle}>SOME TITLE</div>
        <div className={styles.contenttext}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</div>
        <button onClick={handleClickGenerate} className={styles.contentbutton}>START NOW</button>
      </div>
    </main>
  );
}
