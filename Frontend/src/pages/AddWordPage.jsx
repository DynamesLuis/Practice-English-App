import AddWordForm from "../components/addResourses/AddWordForm"
import styles from "./AddWordPage.module.css"

export default function AddWordPage() {
  return (
    <main className={styles.addPage}>
      <section>
        <h2>Add New Word</h2>
        <AddWordForm style={styles.wordForm}/>
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
          <input type="text" placeholder="Search word..."/>
        </form>
        <table>
          <thead>
            <tr>
              <th>Word</th>
              <th>Meanings</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Seremdipity</th>
              <th>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magnam eligendi,
                necessitatibus cum natus ipsum delectus fuga libero rerum iste.</th>
              <th>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quas autem a. Vel ipsum
                optio earum amet facere tempora ad!</th>
              <th><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="#13a4ec" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                <path d="M13.5 6.5l4 4" />
              </svg></button></th>
              <th><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="#ec3e13" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-trash">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 7l16 0" />
                <path d="M10 11l0 6" />
                <path d="M14 11l0 6" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg></button></th>
            </tr>
            <tr>
              <th>Seremdipity</th>
              <th>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magnam eligendi,
                necessitatibus cum natus ipsum delectus fuga libero rerum iste.</th>
              <th>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quas autem a. Vel ipsum
                optio earum amet facere tempora ad!</th>
              <th><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="#13a4ec" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                <path d="M13.5 6.5l4 4" />
              </svg></button></th>
              <th><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="#ec3e13" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-trash">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 7l16 0" />
                <path d="M10 11l0 6" />
                <path d="M14 11l0 6" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg></button></th>
            </tr>
            <tr>
              <th>Seremdipity</th>
              <th>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magnam eligendi,
                necessitatibus cum natus ipsum delectus fuga libero rerum iste.</th>
              <th>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quas autem a. Vel ipsum
                optio earum amet facere tempora ad!</th>
              <th><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="#13a4ec" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                <path d="M13.5 6.5l4 4" />
              </svg></button></th>
              <th><button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="#ec3e13" strokeWidth="2" strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-trash">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 7l16 0" />
                <path d="M10 11l0 6" />
                <path d="M14 11l0 6" />
                <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
              </svg></button></th>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  )
}
