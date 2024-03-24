import React from 'react';
import styles from "../page.module.css";

const ProfilePage = () => {
    return (
        <section className={styles.section}>
            <div className={styles.sitebar}>
                <img className={styles.profilepic} src="#" alt="Profile Picture" />
                <button className={styles.button3}>Edit Profile</button>
                <br />
                <button className={styles.button2}>Invite Your Friends</button>
                <button className={styles.button2}>Back to Homepage</button>
            </div>
            <div className={styles.content}>
                <h3>YOUR IMAGES</h3>
                <div className={styles.grid}>
                    <div className={styles.row}>
                        <div className={styles.cell}><img className={styles.imgs} src="#" alt="Image 1" /></div>
                        <div className={styles.cell}><img className={styles.imgs} src="#" alt="Image 2" /></div>
                        <div className={styles.cell}><img className={styles.imgs} src="#" alt="Image 3" /></div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.cell}><img className={styles.imgs} src="#" alt="Image 4" /></div>
                        <div className={styles.cell}><img className={styles.imgs} src="#" alt="Image 5" /></div>
                        <div className={styles.cell}><img className={styles.imgs} src="#" alt="Image 6" /></div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.cell}><img className={styles.imgs} src="#" alt="Image 7" /></div>
                        <div className={styles.cell}><img className={styles.imgs} src="#" alt="Image 8" /></div>
                        <div className={styles.cell}><img className={styles.imgs} src="#" alt="Image 9" /></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfilePage;
