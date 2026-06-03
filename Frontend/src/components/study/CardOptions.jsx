import { useQueryClient } from "@tanstack/react-query";
import styles from "./CardOptions.module.css"
import { queryKeys } from "../../api/queryKeys"

export default function CardOptions({ fetchRandomWord, fetchRandomText, isPracticeWord, setAnswerIsShow }) {
    const queryClient = useQueryClient();

    const handleNext = async () => {
        if (isPracticeWord) {
            await fetchRandomWord()
            queryClient.invalidateQueries({
                queryKey: queryKeys.dashboard
            })
        } else {
            await fetchRandomText()
            queryClient.invalidateQueries({
                queryKey: queryKeys.dashboard
            })
        }
        setAnswerIsShow(false)
    }

    return (
        <div className={styles.cardOptions}>
            <button className={styles.previousBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M5 12l6 6" />
                    <path d="M5 12l6 -6" />
                </svg>
                Previous
            </button>

            <button className={styles.nextBtn} onClick={handleNext}>
                Next
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M13 18l6 -6" />
                    <path d="M13 6l6 6" />
                </svg>
            </button>
        </div>
    )
}
