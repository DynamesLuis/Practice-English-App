import { useNavigate } from "react-router-dom";
import styles from "./AddPage.module.css"

export default function AddPage() {
  const navigate = useNavigate();
  const navigateToHref = (link) => {
    navigate(link);
  }

  return (
    <main className={styles.addPage}>

      <h2>What would you like to add?</h2>
      <p>Choose an option to continue</p>
      <div className={styles.addOptions}>
        <article onClick={() => navigateToHref("/addWordPage")}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="#13a4ec" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-letter-case">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17.5 15.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0" />
              <path d="M3 19v-10.5a3.5 3.5 0 0 1 7 0v10.5" />
              <path d="M3 13h7" />
              <path d="M21 12v7" />
            </svg>
          </span>
          <h3>Add word</h3>
          <p>Expand your vocabulary by adding new words, their meanings, and examples.</p>
        </article>
        <article onClick={() => navigateToHref("/addTextPage")}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="#13a4ec" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-book">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
              <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
              <path d="M3 6l0 13" />
              <path d="M12 6l0 13" />
              <path d="M21 6l0 13" />
            </svg>
          </span>
          <h3>Add text</h3>
          <p>Improve your reading and comprehension by adding new texts to practice.</p>
        </article>
      </div>

    </main>
  )
}
