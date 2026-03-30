import { useState } from "react"
import styles from "./StudyTextSection.module.css"
import { capitalize } from "../../utils/text"

export default function StudyTextSection({ text, error, isLoading, isError, isRefetching }) {
    let h3Text = ""
    if (!isRefetching) {
        h3Text = capitalize(text.title)
    }

    const [fontSize, setFontSize] = useState(14)

    const handleChange = (e) => {
        setFontSize(e.target.value)
    }

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error: {error.message}</p>

    return (
        <section className={styles.textPractice}>
            <h3>{h3Text}</h3>
            <p style={{ fontSize: `${fontSize}px` }}>
                {text.text}
            </p>
            <h4>Lecture options</h4>
            <div className={styles.fontsizeOptions}>
                <p>Font size</p>
                <div>
                    <input type="range" name="" id="slider" className={styles.slider} step={1} value={fontSize} min={12} max={18} onChange={handleChange} />
                    <label htmlFor="slider-range">{fontSize}</label>
                </div>
            </div>
        </section>
    )
}
