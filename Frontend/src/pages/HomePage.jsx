import styles from "./HomePage.module.css"

export default function HomePage() {
  return (
    <main className={styles.homePage}>
      <h2>Your progress</h2>
      <div className={styles.infoContainer}>
        <div className={styles.div1}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="#13a4ec" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-school">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
              <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
            </svg>
          </span>
          <div>
            <p>Words learned</p>
            <p>100</p>
          </div>
        </div>
        <div className={styles.div2}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-stopwatch">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 13a7 7 0 1 0 14 0a7 7 0 0 0 -14 0z" />
              <path d="M14.5 10.5l-2.5 2.5" />
              <path d="M17 8l1 -1" />
              <path d="M14 3h-4" />
            </svg>
          </span>
          <div>
            <p>Reading time</p>
            <p>78h 32m</p>
          </div>
        </div>
        <div className={styles.div3}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-trending-up">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 17l6 -6l4 4l8 -8" />
              <path d="M14 7l7 0l0 7" />
            </svg>
          </span>
          <div>
            <p>Current streak</p>
            <p>42 days</p>
          </div>
        </div>
        <div className={styles.div4}>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              classn="icon icon-tabler icons-tabler-outline icon-tabler-book-2">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z" />
              <path d="M19 16h-12a2 2 0 0 0 -2 2" />
              <path d="M9 8h6" />
            </svg>
          </span>
          <div>
            <p>Text read</p>
            <p>7</p>
          </div>
        </div>

        <div className={styles.div5}>
          <h4>Your week goal</h4>
          <progress max={10} value={7}></progress>
          <p>7/10 words</p>
        </div>
        <div className={styles.div6}>
          <h4>Recent activity</h4>
          <div className={styles.wordActivity}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-book">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6l0 13" />
                <path d="M12 6l0 13" />
                <path d="M21 6l0 13" />
              </svg>
            </span>
            <div>
              <p>Read "The little prince"</p>
              <p>2 hours ago</p>
            </div>
          </div>
          <div className={styles.textActivity}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#13a4ec" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
              </svg>
            </span>
            <div>
              <p>1 day ago</p>
              <p>Add word "Amateur"</p>
            </div>
          </div>
          <div className={styles.wordActivity}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                classn="icon icon-tabler icons-tabler-outline icon-tabler-book">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6l0 13" />
                <path d="M12 6l0 13" />
                <path d="M21 6l0 13" />
              </svg>
            </span>
            <div>
              <p>2 days ago</p>
              <p>Read "Good father"</p>
            </div>
          </div>
        </div>
        <div className={styles.div7}>
          <h4>Words to review</h4>
          <div className={styles.wordsToReviewContainer}>
            <p>Eloquent</p>
            <p>Eloquent</p>
            <p>Eloquent</p>
            <p>Eloquent</p>
            <p>Eloquent</p>
          </div>
          <h4>Tesxts to review</h4>
          <div className={styles.textToReviewContainer}>
            <p>"Good father"</p>
            <p>"The next world"</p>
            <p>"Great day on my work"</p>
          </div>
        </div>
      </div>
    </main >
  )
}
