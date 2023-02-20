import logo from '../../assets/images/logo.png'
import search from '../../assets/images/search.png'
import styles from './Header.module.scss'

function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo Space Gallery" />
            <div className={styles.header__container}>
                <input className={styles.header__input} type="text" placeholder="O que você procura?" />
                <img src={search} alt="Icone Lupa" />
            </div>
        </header>
    )
}

export default Header;