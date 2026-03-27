import styles from "./LoginPage.module.css"

export default function LoginPage() {
    return (
        <main className={styles.loginPage}>
            <div className={styles.authCard}>
                <div className={styles.authHeader}>
                    <h2>Welcome Back</h2>
                    <p>Sign in to continue your language journey</p>
                </div>
                <form className={styles.form}>

                    <div className={styles.inputGroup}>
                        <input type="email" placeholder="Email address" required />
                        <input type="password" placeholder="Password" required />
                    </div>
                    <div className={styles.formOptions}>
                        <label className={styles.checkbox}>
                            <input type="checkbox" />
                            <span>Remember me</span>
                        </label>
                        <a href="#" className={styles.link}>Forgot your password?</a>
                    </div>
                    <div className={styles.formActions}>
                        <button className={`${styles.btn} ${styles.primary}`}>Log In</button>
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
