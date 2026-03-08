import { useEffect, useState } from "react"
import styles from "./StudyWordSection.module.css"
import WordAnswers from "./WordAnswers"
import WordPreview from "./WordPreview"
import { getRandomWord } from "../../api/wordService"

export default function StudyWordSection() {
  const [answerIsShow, setAnswerIsShow] = useState(false)
  const [currentWord, setCurrentWord] = useState({});
  const handleShowBtn = () => {
    setAnswerIsShow(true)
  }

  useEffect(() => {
    const fetchRandomWord = async() => {
      try {
        const response = await getRandomWord();
        setCurrentWord(response.data)
        console.log(response);
      } catch (error) {
        console.error(error)
      }
    }

    fetchRandomWord()
  }, [])

  return (
    <section className={styles.vocabularyPractice}>
      {!answerIsShow && <WordPreview handleShowBtn={handleShowBtn} currentWord={currentWord}/>}
      {answerIsShow && <WordAnswers currentWord={currentWord}/>}
    </section>
  )
}
