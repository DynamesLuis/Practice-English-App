import styles from "./StudyWordSection.module.css"
import { capitalize } from "../../utils/text"

export default function WordAnswers({currentWord}) {
    return (
        <div className={`${styles.wordAnswers}`}>
            <h3>{capitalize(currentWord.word)}</h3>
            <h4>Definitions</h4>
            <ul>
                {currentWord.definitions.map(definition => (
                    <li key={definition.id}>{capitalize(definition.definition)}</li>
                ))}
            </ul>
            <h4>Exampless</h4>
            <ul>
                {currentWord.examples.map(example => (
                    <li key={example.id}>{capitalize(example.example)}</li>
                ))}
            </ul>
        </div>
    )
}
