import Pagination from "../components/addResourses/Pagination"
import styles from "./AddTextPage.module.css"
import textsData from "../../texts.json"
import TextsTable from "../components/addResourses/TextsTable"
import { useEffect, useState } from "react"
import AddTextForm from "../components/addResourses/AddTextForm"
import SearchTextForm from "../components/addResourses/SearchTextForm"
import { getTexts } from "../api/textService"

const RESULTS_PER_PAGES = 5

export default function AddTextPage() {
    const [texts, setTexts] = useState([])
    const [editingText, setEditingText] = useState(null) 
    const [textToFilter, setTextToFilter] = useState("")
    const [currentPage, setCurrentPage] = useState(1)
    const textsFilterByTitle = textToFilter === ""
        ? textsData : textsData.filter(text =>
            text.title.toLowerCase().includes(textToFilter.toLowerCase())
        )
    const totalPages = Math.ceil(textsFilterByTitle.length / RESULTS_PER_PAGES)
    const pageResults = textsFilterByTitle.slice((currentPage - 1) * RESULTS_PER_PAGES, RESULTS_PER_PAGES * currentPage)
    const handleTextFilter = (textToFilter) => {
        setCurrentPage(1)
        setTextToFilter(textToFilter)
    }
    const handlePageChange = (page) => {
        console.log("changin to page ", page);
        setCurrentPage(page)
    }

    useEffect(() => {
        const fetchTexts = async () => {
            try {
                const response = await getTexts()
                setTexts(response.data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchTexts()
    }, [])


    return (
        <main className={styles.addTextPage}>
            <section>
                <h2>Add New Texts</h2>
                <p>Expan your library by adding texts to practice with.</p>
                <AddTextForm style={styles.textForm} setTexts={setTexts} editingText={editingText} setEditingText={setEditingText}/>
            </section>
            <section>
                <h2>Your Texts</h2>
                <SearchTextForm style={styles.searchForm} onTextFilter={handleTextFilter} />
                <TextsTable textsData={texts} setTexts={setTexts} setEditingText={setEditingText}/>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </section>
        </main>
    )
}
