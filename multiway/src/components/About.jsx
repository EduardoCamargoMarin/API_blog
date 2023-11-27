import {Link} from 'react-router-dom'
import styles from '../modules/About.module.css'
import companycrew from './images/companycrew.png'
import Footer from './Footer'
import logo from './images/logo.png'

export function About() {
    return(
        <div>
            <header className={styles.container}>
            <img src={logo} alt='logo'/>

        <nav>
            <Link to="/"><button>Voltar</button></Link>
        </nav>
            </header>
            <div className={styles.aboutContainer}>
                <section><img className={styles.companyImage} src={companycrew} alt='imageAbout' /></section>
                <section>
                <div><h1>Nossa história</h1></div>
                <div>
                    <p>
                    Quatro amigos, dispersos por diferentes lugares do mundo, 
                    uniram-se virtualmente com uma paixão em comum: contar histórias. 
                    Inspirados pela distância que os separava, criaram um serviço exclusivo 
                    para compartilhar suas aventuras e memórias. Assim, mesmo distantes, mantiveram 
                    viva a chama da amizade, narrando juntos as páginas de suas vidas e estabelecendo 
                    uma conexão única através de suas histórias.
                    </p>
                </div>
            </section>
            </div>
            <Footer/>      
        </div>
    )
}