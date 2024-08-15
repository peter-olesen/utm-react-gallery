import footer from './Footer.module.scss'

export const Footer = () => {
    return (
        <footer className={footer.container}>
            <div className={footer.left}>
                <form>
                    <p>SUBSCRIBE TO NEWSLETTER</p>
                    <input type="text" placeholder="Full name" /><br /><br />
                    <input type="text" placeholder="Email" /><br />
                    <button>SIGN UP</button>
                </form>
            </div>
            <div className={footer.right}>
                <div>
                    <p>QUICK LINKS</p>
                    <ul>
                        <li>Hjem</li>
                        <li>Om os</li>
                        <li>Prisliste</li>
                        <li>Booking</li>
                        <li>Newsletter</li>
                        <li>Kontakt</li>
                    </ul>
                    <p>FOLLOW US</p>
                    <ul className={footer.socialList}>
                        <li><span className={footer.icon}></span></li>
                        <li><span className={footer.icon}></span></li>
                        <li><span className={footer.icon}></span></li>
                    </ul>
                </div>
                <div className={footer.padded}>
                    <p>FIND US</p>
                    <p>WhatsApp <br /> + 45 23 43 43 43</p>
                    <p>Telefonnummer <br /> +45 58 84 84 84</p>
                    <p>Adresse <br /> Supergatan 56, <br /> Oslo, Norway</p>
                </div>
            </div>
        </footer>
    )
}