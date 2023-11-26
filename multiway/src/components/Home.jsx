import styles from '../modules/Home.module.css'
import { Link } from 'react-router-dom'
import CardInfo from './CardInfo'
import Footer from './Footer'
import logo from './images/logo.png'


export function Home() {
    return(
        <div>

        
        <div className={styles.container}>
            <img src={logo} alt='logo'/>

            <nav>
                <Link to="/about"><button>Sobre</button></Link>
                <Link to="/Message"><button>Postar</button></Link>
            </nav>
        </div>
        <CardInfo/>
        <Footer/>
        </div>
        
    )
}