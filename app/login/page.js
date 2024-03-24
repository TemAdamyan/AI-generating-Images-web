'use client'

import styles from "../page.module.css";
import Image from "next/image";
import Logo from "../../public/logo.jpg";
import React, { useState } from 'react';
import {LoginRequest} from '../lib/http'
import CookieJS from 'js-cookie'
import { useRouter } from 'next/navigation'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e) => { 

        const res = await LoginRequest(username, password)
        console.log(res.data.token)
        if(res.data.token) {
            CookieJS.set('token', res.data.token)
            router.push('/generate')
        }
    };
    return (
        <section className={styles.section}>
            <div className={styles.login}>
                <h1>LOG IN</h1>
                <input id="username" placeholder="username/email" type="text" value={username} onChange={handleUsernameChange} className={styles.inputtext}
                />
                <input id="password" placeholder="password" type="password" value={password} onChange={handlePasswordChange} className={styles.inputtext}
                />
                <button className={styles.button2} onClick={handleSubmit}>Login</button>
                <h5> Don't have an account yet? <a style={{ fontWeight: "bold" }}>Sign up here!</a></h5>
            </div>
        </section>
    );
};

export default Login;