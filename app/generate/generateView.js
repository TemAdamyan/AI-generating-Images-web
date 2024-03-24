'use client';

import styles from "../page.module.css";
import Image from "next/image";
import Logo from "../../public/logo.jpg";
import { TextToImageGeneration } from "../lib/http";
import { useState } from "react";

const GenerationStyles = [
    "3d-model",
     "analog-film", 
     "anime",
     "cinematic",
     "comic-book",
     "digital-art", 
     "enhance",
     "fantasy-art",
     "isometric",
     "line-art",
     "low-poly",
     "modeling-compound",
     "neon-punk", "origami", "photographic", "pixel-art", "tile-texture"
];


export default function GenerateView() {
    const [artifacts, setArtifacts] = useState([]);
    const [inputText, setInputText] = useState('');
    const [genStyle, setGenStyle] = useState('')
    
    
    const hanldeGenStyleClick = (name) => {
        setGenStyle(name)
    }

    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    const handleClick = async () => {
        const response = await TextToImageGeneration(inputText, genStyle);
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
                </div>

                <h2 style={{ textAlign: "center" }}>OTHER OPTIONS</h2>

                <div className={styles.regenerationOptions}>
                    <div className={styles.grid}>
                        {GenerationStyles.map((name)=> {
                            if (name === genStyle) {
                                return (
                                    <div key={name} className={styles.cellSelected} onClick={() => hanldeGenStyleClick(name)}>
                                        {name}
                                    </div>
                                )
                            }
                            return (
                                <div key={name} className={styles.cell} onClick={() => hanldeGenStyleClick(name)}>
                                    {name}
                                </div>
                            )
                        })}
                    </div>

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
