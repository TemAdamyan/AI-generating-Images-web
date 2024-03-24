'use client';

import styles from "../page.module.css";
import Image from "next/image";
import { ImageToImageGeneration } from "../lib/http";
import { useState } from "react";

export default function ImageToImageView() {
    const [artifacts, setArtifacts] = useState([]);
    const [inputText, setInputText] = useState('');
    const [fileState, setFileState] = useState(null);

    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    const handleFileChange = (event) => {
        var file = event.target.files[0];
        setFileState(file)
    }

    const handleClick = async () => {
        const response = await ImageToImageGeneration(inputText, fileState);
        setArtifacts(response?.data?.artifacts ?? []);
    }

    return (
        <section className={styles.section}>
            <div className={styles.sitebar}>
                <div className={styles.regenerationBlock}>
                    <input
                        placeholder="Generate..."
                        value={inputText}
                        onChange={handleChange}
                        className={styles.input} />
                    <input
                        type='file'
                        accept=".png,.jpeg,.jpg"
                        placeholder="Choose the image"
                        // value={fileState}
                        onChange={handleFileChange}
                        className={styles.input} />
                </div>

                <h2 style={{ textAlign: "center" }}>OTHER OPTIONS</h2>

                <div className={styles.regenerationOptions}>
                    <button className={styles.button2} onClick={handleClick}>Generate</button>
                </div>
            </div>

            <div className={styles.content}>
                <div className={styles.imageDiv}>
                    {artifacts.map((item, index) => (
                        <div key={index}>
                            <Image src={`data:image/png;base64,${item.base64}`} alt="Uploaded Image" className={styles.generatedimage} width={250} height={300} />
                        </div>
                    ))}

                </div>
                <div className={styles.content}>
                    <button className={styles.button2}>Download</button>
                    <button className={styles.button2}>Share</button>
                    </div>
            </div>
        </section>
    );
}
