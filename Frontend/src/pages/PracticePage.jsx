import { useState } from "react"
import styles from "./PracticePage.module.css"
import StudyWordSection from "../components/study/StudyWordSection";
import StudyTextSection from "../components/study/StudyTextSection";
import CardOptions from "../components/study/CardOptions";
import { getRandomWord } from "../api/wordService"
import { getRandomText } from "../api/textService"

export default function PracticePage() {
  const [isPracticeWord, setIsPracticeWord] = useState(true)
  const [currentWord, setCurrentWord] = useState({})
  const [currentText, setCurrentText] = useState({})
  const [answerIsShow, setAnswerIsShow] = useState(false)

  const handleClickBtn = (boolean) => {
    setIsPracticeWord(boolean);
  }

  const fetchRandomWord = async () => {
    try {
      const response = await getRandomWord();
      setCurrentWord(response.data)
      if (answerIsShow) {
        setAnswerIsShow(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const fetchRandomText = async () => {
    try {
      const response = await getRandomText()
      setCurrentText(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className={styles.practicePage}>
      <h2>Practice area</h2>
      <p>What would you like to practice today?</p>
      <div className={styles.practiceOptions}>
        <button className={isPracticeWord ? styles.active : ""} onClick={() => handleClickBtn(true)}>Vocabulary</button>
        <button className={!isPracticeWord ? styles.active : ""} onClick={() => handleClickBtn(false)}>Reading</button>
      </div>

      {isPracticeWord && <StudyWordSection fetchRandomWord={fetchRandomWord} currentWord={currentWord} setAnswerIsShow={setAnswerIsShow} answerIsShow={answerIsShow} />}
      {!isPracticeWord && <StudyTextSection currentText={currentText} fetchRandomText={fetchRandomText}/>}

      <CardOptions fetchRandomWord={fetchRandomWord} fetchRandomText={fetchRandomText} isPracticeWord={isPracticeWord}/>
    </main>

  )
}
