import Pagination from "../components/addResourses/Pagination"
import styles from "./AddTextPage.module.css"
import TextsTable from "../components/addResourses/TextsTable"
import { useEffect, useState } from "react"
import AddTextForm from "../components/addResourses/AddTextForm"
import SearchForm from "../components/addResourses/SearchForm"
import { getTextByTitle, getTexts } from "../api/textService"

const RESULTS_PER_PAGES = 5

export default function AddTextPage() {
    const [texts, setTexts] = useState([])
    const [editingText, setEditingText] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)

    const handlePageChange = (page) => {
        console.log("changin to page ", page);
        setCurrentPage(page)
    }

    useEffect(() => {
        fetchTexts()
    }, [currentPage])

    const fetchTexts = async () => {
        try {
            const response = await getTexts(currentPage - 1, RESULTS_PER_PAGES)
            setTexts(response.data.content)
            setTotalPages(response.data.totalPages)
        } catch (error) {
            console.error(error)
        }
    }

    const handleSearch = async (title) => {
        const response = await getTextByTitle(title, 0, RESULTS_PER_PAGES)
        setTexts(response.data.content)
        setTotalPages(response.data.totalPages)
    }


    return (
        <main className={styles.addTextPage}>
            <section>
                <h2>Add New Texts</h2>
                <p>Expan your library by adding texts to practice with.</p>
                <AddTextForm
                    style={styles.textForm} 
                    setTexts={setTexts} 
                    editingText={editingText} 
                    setEditingText={setEditingText} 
                    fetchTexts={fetchTexts}
                    pageSize={RESULTS_PER_PAGES}
                    texts={texts}/>
            </section>
            <section>
                <h2>Your Texts</h2>
                <SearchForm style={styles.searchForm} onSearch={handleSearch} />
                <TextsTable textsData={texts} setTexts={setTexts} setEditingText={setEditingText} />
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </section>
        </main>
    )
}
