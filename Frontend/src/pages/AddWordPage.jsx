import AddWordForm from "../components/addResourses/AddWordForm"
import WordsTable from "../components/addResourses/WordsTable"
import Pagination from "../components/addResourses/Pagination"
import styles from "./AddWordPage.module.css"
import { useState, useEffect } from "react"
import SearchWordForm from "../components/addResourses/SearchWordForm"
import { getWords } from "../api/wordService"

const RESULTS_PER_PAGE = 3
export default function AddWordPage() {
  const [words, setWords] = useState([])
  //const [wordToFilter, setWordToFilter] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(null)
  // const wordsFilterByWord = wordToFilter === ""
  //   ? wordsData :
  //   wordsData.filter(word => word.word.toLocaleLowerCase().includes(wordToFilter.toLocaleLowerCase()))
 
  const handleWordFilter = (wordToFilter) => {
    setCurrentPage(1)
    setWordToFilter(wordToFilter)
  }
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await getWords(currentPage - 1, RESULTS_PER_PAGE);
        console.log(response);
        setWords(response.data.content)
        setTotalPages(response.data.totalPages)
      } catch (error) {
        console.error(error)
      }
    }

    fetchWords()
  }, [currentPage])

  return (
    <main className={styles.addWordPage}>
      <section>
        <h2>Add New Word</h2>
        <AddWordForm style={styles.wordForm} setWords={setWords} />
      </section>
      <section>
        <h2>Your Vocabylary List</h2>
        <SearchWordForm style={styles.searchForm} onWordFilter={handleWordFilter} />
        <div className={styles.tableContainer}>
          <WordsTable wordsData={words} setWords={setWords} />
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </section>
    </main>
  )
}
