import AddWordForm from "../components/addResourses/AddWordForm"
import WordsTable from "../components/addResourses/WordsTable"
import Pagination from "../components/addResourses/Pagination"
import SearchForm from "../components/addResourses/SearchForm"
import styles from "./AddWordPage.module.css"
import { useState, useEffect } from "react"
import { getWordByWord, getWords } from "../api/wordService"

const RESULTS_PER_PAGE = 5
export default function AddWordPage() {
  const [words, setWords] = useState([])
  const [editingWord, setEditingWord] = useState(null);
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(null)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    fetchWords()
  }, [currentPage])

  const fetchWords = async () => {
    try {
      const response = await getWords(currentPage - 1, RESULTS_PER_PAGE);
      setWords(response.data.content)
      setTotalPages(response.data.totalPages)
      console.log("fetching words");
      
    } catch (error) {
      console.error(error)
    }
  }

  const handleSearch = async (wordToFilter) => {
    try {
      const response = await getWordByWord(wordToFilter, 0, RESULTS_PER_PAGE)
      console.log(response);
      setWords(response.data.content)
      setTotalPages(response.data.totalPages)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className={styles.addWordPage}>
      <section>
        <h2>Add New Word</h2>
        <AddWordForm
          style={styles.wordForm}
          editingWord={editingWord}
          setEditingWord={setEditingWord}
          fetchWords={fetchWords}
          pageSize={RESULTS_PER_PAGE}
          words={words} />
      </section>
      <section>
        <h2>Your Vocabylary List</h2>
        <SearchForm style={styles.searchForm} onSearch={handleSearch} />
        <div className={styles.tableContainer}>
          <WordsTable wordsData={words} setWords={setWords} setEditingWord={setEditingWord} />
        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </section>
    </main>
  )
}
