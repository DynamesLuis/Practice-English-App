import { useState } from "react"
import styles from "./LoginPage.module.css"
import { useAuth } from "../auth/hooks/useAuth"
import { Navigate, useNavigate } from "react-router-dom";

export default function LoginPage() {
    const { handleLogin, isAuthenticated } = useAuth()
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        try {
            await handleLogin(username, password);
            navigate("/home");

        } catch (err) {
            const message = err.response?.data.error || "Login failed";
            setError(message);
        }

    }

    if (isAuthenticated) {
        return <Navigate to="/home" replace />;
    }

    return (
        <main className={styles.loginPage}>
            <div className={styles.authCard}>
                <div className={styles.authHeader}>
                    <h2>Welcome Back</h2>
                    <p>Sign in to continue your language journey</p>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>

                    <div className={styles.inputGroup}>
                        <input type="text" placeholder="username" value={username} required onChange={(e) => setUsername(e.target.value)} />
                        <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        {error && <p style={{ color: "red",marginTop: "5px" }}>{error}</p>}
                    </div>
                    <div className={styles.formOptions}>
                        <label className={styles.checkbox}>
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className={styles.link}>Forgot your password?</a>
                    </div>
                    <div className={styles.formActions}>
                        <button className={`${styles.btn} ${styles.primary}`} type="submit">Log In</button>
                        <button className={`${styles.btn} ${styles.secondary}`} type="button">Create Account</button>
                    </div>
                </form>
                <p className={styles.terms}>
                    By signing up, you agree to our
                    <a href="#"> Terms</a> and
                    <a href="#"> Privacy Policy</a>.
                </p>
            </div>
        </main>
    )
}
