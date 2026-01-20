import AddWordForm from "../components/addResourses/AddWordForm"
import WordsTable from "../components/addResourses/WordsTable"
import Pagination from "../components/addResourses/Pagination"
import styles from "./AddWordPage.module.css"
import { useState } from "react"
import wordsData from "../../words.json"
import SearchWordForm from "../components/addResourses/SearchWordForm"

const RESULTS_PER_PAGE = 5
export default function AddWordPage() {
  const [wordToFilter, setWordToFilter] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const wordsFilterByWord = wordToFilter === ""
    ? wordsData :
    wordsData.filter(word => word.word.toLocaleLowerCase().includes(wordToFilter.toLocaleLowerCase()))

  const pageResults = wordsFilterByWord.slice((currentPage - 1) * RESULTS_PER_PAGE, RESULTS_PER_PAGE * currentPage)
  const totalPages = Math.ceil(wordsFilterByWord.length / RESULTS_PER_PAGE)
  const handleWordFilter = (wordToFilter) => {
    setCurrentPage(1)
    setWordToFilter(wordToFilter)
  }
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }
  return (
    <main className={styles.addWordPage}>
      <section>
        <h2>Add New Word</h2>
        <AddWordForm style={styles.wordForm} />
      </section>
      <section>
        <h2>Your Vocabylary List</h2>
        <SearchWordForm style={styles.searchForm} onWordFilter={handleWordFilter} />
        <WordsTable wordsData={pageResults} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </section>
    </main>
  )
}
