import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'

import styles from '../styles/sidebar.module.css'

import Clock from './Clock'
import Image from 'next/image'

const Sidebar = () => {
  const [t, i18n] = useTranslation("global")
  const [language, setLanguage] = useState(localStorage.getItem('language') || i18n.language);
  

  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    localStorage.setItem('language', lang);
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.backgroundImage}>
        <div className={styles.container}>
            <Image 
                className={styles.userIcon}
                src='/../public/img/icons/User_Icon.png'
                width={118}
                height={118}
                alt='User Icon'
            />

            <div className={styles.flexContainer}>   
                    <Image 
                        src='/../public/img/icons/Settings.png'
                        width={24}
                        height={24}
                        alt='Settings Icon'
                    />
                    <a className={styles.settings}>{t('settings')}</a>
                </div>

            <div className={styles.options}>

                <p className={styles.welcome}>{t('title')}</p>

                <div className={styles.language}>
                    <Image 
                            src='/../public/img/icons/World.png'
                            width={24}
                            height={24}
                            alt='World Icon'
                    />
                    <button 
                      onClick={() => changeLanguage('en')}
                      className={language === 'en' ? styles.active : styles.english}>EN</button>
                    <button 
                      onClick={() => changeLanguage('es')} 
                      className={language === 'es' ? styles.active : styles.spanish}>ES</button>

                </div>
                
                <button className={styles.signin}>{t('buttonResponse')}</button>
                <div className={styles.datetime}>
                    <Clock />
                    <p className={styles.date}>{t('date')}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
