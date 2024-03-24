'use client'

import styles from "../page.module.css";
import Image from "next/image";
import Logo from "../../public/logo.jpg";
import React, { useState } from 'react';

const SignUp = () => {
    const [fullname, setFullname] = useState('');
    const [gender, setGender] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [country, setCountry] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleFullnameChange = (e) => {
        setFullname(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleBirthdateChange = (e) => {
        setBirthdate(e.target.value);
    };

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    };

    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

   const handleSubmit = (e) => { };

    return (
        <section className={styles.section}>
            <div className={styles.login}>
                <h1>SIGN UP</h1>
                <input id="fullname" placeholder="Full Name" value={fullname} onChange={handleFullnameChange} />
                <input id="gender" placeholder="Gender" value={gender} onChange={handleGenderChange} />
                <input id="birthdate" placeholder="Birthdate" value={birthdate} onChange={handleBirthdateChange} />
                <input id="country" placeholder="Choose Your Country" value={country} onChange={handleCountryChange} />
                <input id="number" placeholder="Phone Number" value={number} onChange={handleNumberChange} />
                <input id="email" placeholder="Email" value={email} onChange={handleEmailChange} />
                <input id="username" placeholder="Username" value={username} onChange={handleUsernameChange} />
                <input id="password" placeholder="Create a Password" type="password" value={password} onChange={handlePasswordChange} />
                <button className={styles.button2} onClick={handleSubmit}>SIGN UP</button>
            </div>
        </section>
    );
};

export default SignUp;
