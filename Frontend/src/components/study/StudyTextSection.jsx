import { useEffect, useState } from "react"
import styles from "./StudyTextSection.module.css"



export default function StudyTextSection({currentText, fetchRandomText}) {
    const [fontSize, setFontSize] = useState(14)

    const handleChange = (e) => {
        setFontSize(e.target.value)
    }

    useEffect(() => {
        fetchRandomText()
    }, [])

    return (
        <section className={styles.textPractice}>
            <h3>{currentText.title}</h3>
            <p style={{ fontSize: `${fontSize}px` }}>
                {currentText.text}
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
