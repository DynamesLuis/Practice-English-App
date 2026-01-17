import Pagination from "../components/addResourses/Pagination"
import styles from "./AddTextPage.module.css"
import textsData from "../../texts.json"
import TextsTable from "../components/addResourses/TextsTable"
import { useState } from "react"
import AddTextForm from "../components/addResourses/AddTextForm"

const RESULTS_PER_PAGES = 5

export default function AddTextPage() {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(textsData.length / RESULTS_PER_PAGES)
    const pageResults = textsData.slice((currentPage - 1) * RESULTS_PER_PAGES, RESULTS_PER_PAGES * currentPage)
    const handlePageChange = (page) => {
        console.log("changin to page ", page);
        setCurrentPage(page)
    }

    return (
        <main className={styles.addTextPage}>
            <section>
                <h2>Add New Texts</h2>
                <p>Expan your library by adding texts to practice with.</p>
                <AddTextForm style={styles.textForm}/>
            </section>
            <section>
                <h2>Your Texts</h2>
                <form action="" className={styles.searchForm}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="#8f949b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                    <input type="text" placeholder="Search text..." />
                </form>
                <TextsTable textsData={pageResults} />
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </section>
        </main>
    )
}
