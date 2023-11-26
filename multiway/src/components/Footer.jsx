import styles from "../modules/Footer.module.css";

function Footer() {
    return(
        <div className={styles.container}>
            <div>
                <p>Desenvolvido por <a href="https://eduardocamargomarin.github.io/eduardomarin/">Eduardo</a></p>
            </div>
        </div>
    )
}

export default Footer