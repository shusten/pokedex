import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <div className={styles.aboutDescription}>
                <div className={styles.overlay}></div>
                <div className={styles.textAbout}>
                    <h1>Sobre o projeto</h1>
                    Bem-vindo à Pokedex, uma enciclopédia digital completa de Pokémon. 
                    Aqui, exploramos e catalogamos as várias espécies de Pokémon, 
                    fornecendo informações detalhadas sobre suas características, 
                    habilidades e muito mais. A Pokedex é uma ferramenta essencial 
                    para todos os treinadores e entusiastas que desejam aprender 
                    e se aventurar no mundo dessas incríveis criaturas.
                </div>
            </div>
        </div>
    )
}
