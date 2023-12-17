import React from 'react'
import styles from './Sidebar.module.css';
import hamburger from './assets/iconshamburger.svg';
import chat from './assets/iconschat.png';
import kanal from './assets/iconskanal.png';
function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <div className={styles.sidebarContainer}>

            <div className={styles.sidebarHamburger}>
                <img src={hamburger} alt={hamburger} className={styles.hamburgerIcon} />
            </div>

            <div className={styles.sidebarBlock}>
                <img src={chat} alt={chat} className={styles.sidebarIcon} />
            </div>

            <div className={styles.sidebarBlock}>
                <img src={kanal} alt={kanal} className={styles.sidebarIcon} />
            </div>
        </div>
    </div>
  )
}

export default Sidebar