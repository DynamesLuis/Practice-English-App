import { NavLink } from "react-router-dom"

const navItems = [
    { path: "/home", label: "Home" },
    { path: "/addPage", label: "Add" },
    { path: "/practicePage", label: "Practice" }
]

export default function PageNavigation({ styles }) {
    return (
        <nav>
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
        </nav>
    )
}
