import style from "./Navbar.module.scss"

export function Navbar () {
    return (
        <>
            <nav className={style.navbarStyle}>
                <ul className={style.navbarUl}>
                    <li>Hjem</li>
                    <li>Koncepter</li>
                    <li>UTM Loyalty</li>
                    <li>Om</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
        
        </>
    )
}