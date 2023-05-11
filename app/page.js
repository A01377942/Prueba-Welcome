"use client";
import Sidebar from '../components/sidebar'
import Main from '../components/main'
import RootLayout from './layout'
import styles from '../styles/page.module.css'

export const metadata = {
  title: 'Explore the world as an International Travel Agent',
  description: 'Become a travel agent and get great prices with Volindo. Discover a new way of traveling and save money on your next adventures.',
  keywords: 'travel, internacional travel, airplane'
}


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
