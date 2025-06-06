import styles from "../styles/LineText.module.css"

export default function HeaderNav() {
    return (
        <nav className="fixed top-72 max-sm:relative max-sm:top-0 max-sm:hidden">
            <ol className="flex flex-col relative ">
                <li className={styles.lineText}>
                    <a href="#about" className="py-2">
                        Sobre mi
                    </a>
                </li>
                <li className={styles.lineText}>
                    <a href="#experience" className="py-2">
                        Experiencia
                    </a>
                </li>
                <li className={styles.lineText}>
                    <a href="#projects" className="py-2">
                        Proyectos
                    </a>
                </li>
            </ol>
        </nav>
    )
}