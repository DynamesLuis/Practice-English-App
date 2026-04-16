import styles from "./Header.module.css"
import PageNavigation from "../components/layout/PageNavigation"
import { useAuth } from "../auth/hooks/useAuth"

export default function Header() {
    const { logout } = useAuth();

    return (
        <header className={styles.header}>
            <p className={styles.logo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#13a4ec"
                    className="icon icon-tabler icons-tabler-filled icon-tabler-star">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path
                        d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
                </svg>
                EnglishPractice
            </p>
            <PageNavigation styles={styles} />
            <button className={styles.sesion} onClick={logout}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-logout"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" /></svg>
            </button>
        </header>
    )
}
