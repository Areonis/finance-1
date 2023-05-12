import { useNavigate } from 'react-router-dom'
import CustomLink from '../../links/CustomLink'
import styles from './Header.module.scss'
export const logo =
  'https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn'
export const companyName = 'MyCompany'

export default function Header() {
  const navigate = useNavigate()
  return (
    <div className={styles.header}>
      <div className={styles.companyBlock} onClick={() => navigate('/')}>
        Geodetic and cadastral service
      </div>
      <div className={styles.logoBlock} onClick={() => navigate('/')}>
        {/* <ImageBlock size='logo' src={logo}/> */}
      </div>

      <nav className={styles.navMenu}>
        <div> </div>
        <div></div>
        <div>
          {/* {' '}
          <CustomLink to="/requisites">Реквизиты</CustomLink> */}
          <CustomLink to="/policy-page">Политика конфиденциальности</CustomLink>
        </div>
      </nav>
    </div>
  )
}
