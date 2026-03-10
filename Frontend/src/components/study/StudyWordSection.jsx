import { useEffect } from "react"
import styles from "./StudyWordSection.module.css"
import WordAnswers from "./WordAnswers"
import WordPreview from "./WordPreview"

export default function StudyWordSection({fetchRandomWord, currentWord, setAnswerIsShow, answerIsShow}) {

  const handleShowBtn = () => {
    setAnswerIsShow(true)
  }

  useEffect(() => {
    fetchRandomWord()
  }, [])

  return (
    <section className={styles.vocabularyPractice}>
      {!answerIsShow && <WordPreview handleShowBtn={handleShowBtn} currentWord={currentWord}/>}
      {answerIsShow && <WordAnswers currentWord={currentWord}/>}
    </section>
  )
}
