import React from 'react';
import styles from './Hamburger.module.css';
function Hamburger() {
  return (
    <div className={styles.hamburger}>
        <div className={styles.hamburgerContainer}>
            <div className="hamburgerProfile">
                <img src={profile} alt={profile} className={styles.hamburgerProfileIcon} />

                <h4 className={styles.hamburgerProfileName}>frontend developer</h4>
            </div>

            <div className={styles.hamburgerCreater}>
              <img src={profile} alt={profile} className={styles.hamburgerProfileIcon} />
              <h4 className={styles.hamburgerText}>Создать группу</h4>
            </div>

            
            <div className={styles.hamburgerCreater}>
              <img src={profile} alt={profile} className={styles.hamburgerProfileIcon} />
              <h4 className={styles.hamburgerText}>Создать канал</h4>
            </div>

            
            <div className={styles.hamburgerCreater}>
              <img src={profile} alt={profile} className={styles.hamburgerProfileIcon} />
              <h4 className={styles.hamburgerText}>настройки</h4>
            </div>
        </div>
    </div>
  )
}

export default Hamburger