import { useState } from "react"
import { NavLink } from "react-router-dom"

const navItems = [
    { path: "/home", label: "Home" },
    { path: "/addPage", label: "Add" },
    { path: "/practicePage", label: "Practice" }
]

export default function PageNavigation({ styles }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav>
            <button onClick={handleMenuClick}>
                {isMenuOpen ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>}
            </button>
            <div className={isMenuOpen ? styles.isOpen : ""}>
                {navItems.map(page => (
                    <NavLink
                        to={page.path}
                        key={page.label}
                        className={({ isActive }) => (
                            isActive ? `${styles.isActive}` : ""
                        )}>
                        {page.label}
                    </NavLink>
                ))}
            </div>
        </nav>
    )
}
