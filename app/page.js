"use client";
import Sidebar from '../components/sidebar'
import Main from '../components/main'
import RootLayout from './layout'
import styles from '../styles/page.module.css'


export default function Home() {

  return (
    <RootLayout>
        <div className={styles.background}></div>
        <div className={styles.container}>
          <div>
            <Sidebar/>
          </div>
          <div>
            <Main/>  
          </div>  
        </div>
    </RootLayout>
  )
}
