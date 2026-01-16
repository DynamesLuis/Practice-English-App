import AddWordForm from "../components/addResourses/AddWordForm"
import WordsTable from "../components/addResourses/WordsTable"
import Pagination from "../components/addResourses/Pagination"
import styles from "./AddWordPage.module.css"
import { useState } from "react"
import wordsData from "../../words.json"

const RESULTS_PER_PAGE = 5

export default function AddWordPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(wordsData.length / RESULTS_PER_PAGE)
  const pageResults = wordsData.slice((currentPage - 1) * RESULTS_PER_PAGE, RESULTS_PER_PAGE * currentPage)
  const handlePageChange = (page) => {
    console.log("changing to page", page)
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
        <form action="" className={styles.searchForm}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="#8f949b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-search">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
            <path d="M21 21l-6 -6" />
          </svg>
          <input type="text" placeholder="Search word..." />
        </form>
        <WordsTable wordsData={pageResults} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </section>
    </main>
  )
}
