import { useState } from "react"
import styles from "./StudyWordSection.module.css"
import WordAnswers from "./WordAnswers"
import WordPreview from "./WordPreview"

export default function StudyWordSection() {
  const [answerIsShow, setAnswerIsShow] = useState(false)
  const handleShowBtn = () => {
    setAnswerIsShow(true)
  }

  return (
    <section className={styles.vocabularyPractice}>
      {!answerIsShow && <WordPreview handleShowBtn={handleShowBtn}/>}
      {answerIsShow && <WordAnswers />}
    </section>
  )
}
