import styles from "./StudyWordSection.module.css"
import WordAnswers from "./WordAnswers"
import WordPreview from "./WordPreview"


export default function StudyWordSection({ setAnswerIsShow, answerIsShow, isLoading, isError, error, word, isRefetching }) {



  const handleShowBtn = () => {
    setAnswerIsShow(true)
  }

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <section className={styles.vocabularyPractice}>
      {!answerIsShow && <WordPreview handleShowBtn={handleShowBtn} currentWord={word} isRefetching={isRefetching} />}
      {answerIsShow && <WordAnswers currentWord={word} />}
    </section>
  )
}
