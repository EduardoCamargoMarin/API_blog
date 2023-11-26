import {  Link } from 'react-router-dom'
import styles from "../modules/CardInfo.module.css"
import images from "./images/imageblog.gif"
import companyImage from './images/aboutimage.png'
function CardInfo() {
    return(
        <div className={styles.container}>

            <section><img className={styles.imageBlog} src={images}  alt='Imagem blog'/></section>

            <section className={styles.info}>
                <div><h1>A mais nova forma de registrar os seus melhores momentos</h1></div>
                <div>
                    <p>
                    Seu próprio local seguro para escrever todos
                     os seus pensamentos e compartilhar informações 
                     valiosas com apenas aqueles que você deseja que acessem
                    </p>
                </div>
            </section>
            
            <div className={styles.companyContainer}>

            <section><img className={styles.imageCompany} src={companyImage}  alt='Imagem blog'/></section>

            <section className={styles.companyInfo}>
                <div><h1>A mais nova forma de registrar os seus melhores momentos</h1></div>
                <div>
                    <p>
                    Este refúgio virtual é concebido como um santuário pessoal, 
                    um lugar seguro onde cada pensamento encontra sua expressão. 
                     Ao utilizar esta plataforma, você se beneficia de uma atmosfera acolhedora 
                     e privativa, protegida dos olhares indesejados. Este ambiente cuidadosamente criado 
                     serve como um aliado na jornada da autoexpressão e comunicação seletiva, proporcionando 
                     um meio onde seus pensamentos ganham vida com segurança e respeito.
                    </p>
                </div>
                <Link to="/Message"><button>Postar</button></Link>
            </section>
            </div>
            
            

        </div>
    )
}

export default CardInfo