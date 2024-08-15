import { Navbar } from './Nav/Navbar.jsx' 
import style from './Header.module.scss'
export const Header = () => {
    return (
        
    <>
    <Navbar />
        <header className={style.headerStyle}>            
            <h1>Under The Moon</h1>
            <div className={style.headerComponent}>
                <h3>HAIRSTYLIST OG FRISØR</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique praesentium nulla tenetur fugiat, cum dolorem, mollitia laboriosam fugit corporis blanditiis odio nihil, nostrum repellendus non ipsum ad autem exercitationem possimus.</p>
            </div>
            
        </header>
    </>
    )
}
