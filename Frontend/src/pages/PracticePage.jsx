import { useState } from "react"
import styles from "./PracticePage.module.css"
import StudyWordSection from "../components/study/StudyWordSection";
import StudyTextSection from "../components/study/StudyTextSection";
import CardOptions from "../components/study/CardOptions";

export default function PracticePage() {
  const [isPracticeWord, setIsPracticeWord] = useState(true)

  const handleClickBtn = (boolean) => {
    setIsPracticeWord(boolean);
  }

  return (
    <main className={styles.practicePage}>
      <h2>Practice area</h2>
      <p>What would you like to practice today?</p>
      <div className={styles.practiceOptions}>
        <button className={isPracticeWord ? styles.active : ""} onClick={() => handleClickBtn(true)}>Vocabulary</button>
        <button className={!isPracticeWord ? styles.active : ""} onClick={() => handleClickBtn(false)}>Reading</button>
      </div>

      {isPracticeWord && <StudyWordSection/>}
      {!isPracticeWord && <StudyTextSection/>}

      <CardOptions/>
    </main>

  )
}
