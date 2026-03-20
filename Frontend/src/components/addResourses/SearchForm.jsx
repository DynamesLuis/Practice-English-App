import { useEffect, useState } from "react"
import {normalize} from "../../utils/text"

export default function SearchForm({ style, onSearch }) {
    const [wordToFilter, setWordToFilter] = useState("")
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            const normalizeWord = normalize(wordToFilter);
            onSearch(normalizeWord)
        }, 300)

        return () => clearTimeout(timeout)
    }, [wordToFilter])

    return (
        <form className={style}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#8f949b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
            </svg>
            <input type="text" placeholder="Search text..." value={wordToFilter} onChange={(e) => setWordToFilter(e.target.value)} />
        </form>
    )
}
