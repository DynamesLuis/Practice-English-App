export default function SearchWordForm({ style, onWordFilter }) {
    const handleWordChange = (event) => {
        const word = event.target.value
        onWordFilter(word)
    }

    return (
        <form className={style}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#8f949b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
            </svg>
            <input type="text" placeholder="Search word..." onChange={(event) => handleWordChange(event)}/>
        </form>
    )
}
