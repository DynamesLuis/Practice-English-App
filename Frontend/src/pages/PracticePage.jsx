import { useState } from "react"
import styles from "./PracticePage.module.css"
import StudyWordSection from "../components/study/StudyWordSection"
import StudyTextSection from "../components/study/StudyTextSection"
import CardOptions from "../components/study/CardOptions"
import { useQuery } from "@tanstack/react-query"
import { fetchRandomWord } from "../api/fetchWords"
import { fetchRandomText } from "../api/fetchText"

export default function PracticePage() {
  const [isPracticeWord, setIsPracticeWord] = useState(true)
  const [answerIsShow, setAnswerIsShow] = useState(false)

  const handleClickBtn = (boolean) => {
    setIsPracticeWord(boolean);
  }


  const {
    data: word,
    isLoading: isLoadingWord,
    isError: isErrorWord,
    error: errorWord,
    refetch: refetchWord,
    isRefetching: isRefetchingWord,
  } = useQuery({
    queryKey: ['word'],
    queryFn: fetchRandomWord,
    refetchOnMount: false,
  });

  const {
    data: text,
    isLoading: isLoadingText,
    isError: isErrorText,
    error: errorText,
    refetch: refetchText,
    isRefetching: isRefetchingText,
  } = useQuery({
    queryKey: ['text'],
    queryFn: fetchRandomText,
    refetchOnMount: false,
  });


  return (
    <main className={styles.practicePage}>
      <h2>Practice area</h2>
      <p>What would you like to practice today?</p>
      <div className={styles.practiceOptions}>
        <button className={isPracticeWord ? styles.active : ""} onClick={() => handleClickBtn(true)}>Vocabulary</button>
        <button className={!isPracticeWord ? styles.active : ""} onClick={() => handleClickBtn(false)}>Reading</button>
      </div>

      {isPracticeWord && <StudyWordSection
        setAnswerIsShow={setAnswerIsShow}
        answerIsShow={answerIsShow}
        isLoading={isLoadingWord}
        isError={isErrorWord}
        error={errorWord}
        word={word}
        isRefetching={isRefetchingWord} />}
      {!isPracticeWord && <StudyTextSection
        error={errorText}
        isError={isErrorText}
        isLoading={isLoadingText}
        text={text}
        isRefetching={isRefetchingText} />}

      <CardOptions isPracticeWord={isPracticeWord}
        fetchRandomText={refetchText}
        fetchRandomWord={refetchWord}
        setAnswerIsShow={setAnswerIsShow} />
    </main>

  )
}
