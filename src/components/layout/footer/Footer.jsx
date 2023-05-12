import logo from '../../../assets/app_store_logo_footer.png'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_item}>
        <div className={styles.footer_item_text}>
          Скачайте прямо сейчас и получите бонус!
        </div>
        <div className={styles.footer_item_img}>
          <img src={logo} alt="logo" />
        </div>
      </div>

      <div className={styles.footer_item}></div>

      <div className={styles.footer_item}>
        <div></div>
        <div>©2021, Geodetic and cadastral service.</div>
      </div>
    </div>
  )
}
