"use client";
import React, { useState, useEffect } from 'react';
import styles from '../styles/sidebar.module.css'

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return <div><p className={styles.time}>{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p></div>;
}

export default Clock;
