import styles from '../styles/main.module.css'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const Main = () => {
  const [t, i18n] = useTranslation("global")

  return (
    <div className={styles.main}>
      <h2 className={styles.logoTitle}>{t('principalTitle')}</h2>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <div className={styles.frames}>
            <Image
              src={'/../public/img/frames/FrameOne.png'}
              width={80}
              height={80}
              alt='Objetive Icon'
            />
          </div>
          <span>{t('point')} 1</span>
        </div>
        <div className={styles.gridItem}>
        <div className={styles.frames}>
            <Image
              src={'/../public/img/frames/FrameTwo.png'}
              width={80}
              height={80}
              alt='Target Icon'
            />
          </div>
          <span>{t('point')} 2</span>
        </div>
        <div className={styles.gridItem}>
        <div className={styles.frames}>
          <Image 
            src={'/../public/img/frames/FrameThree.png'}
            width={80}
            height={80}
            alt='Bar Icon'
          />
        </div>
          <span>{t('point')} 3</span>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.frames}>
            <Image 
              src={'/../public/img/frames/Framefour.png'}
              width={80}
              height={80}
              alt='PC Icon'
            />
          </div>
          <span>{t('point')} 4</span>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.frames}>
              <Image 
                src={'/../public/img/frames/FrameFive.png'}
                width={80}
                height={80}
                alt='Conected World Icon'
              />
          </div>
          <span>{t('point')} 5</span>
        </div>
        <div className={styles.gridItem}>
          <div className={styles.frames}>
                <Image 
                  src={'/../public/img/frames/FrameSix.png'}
                  width={80}
                  height={80}
                  alt='Shield Icon'
                />
            </div>
          <span>{t('point')} 6</span>
        </div>
      </div>
    </div>
  )
}

export default Main