"use client";
import React, { useState, useEffect } from 'react';

function Date() {
    const language = 'es'
    const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const formattedDate = language === 'es' ? date.toLocaleDateString('es-ES', options) : date.toLocaleDateString('en-US', options);

  return <div><p>{formattedDate}</p></div>;
}

export default Date;
