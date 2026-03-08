import styles from "./StudyWordSection.module.css"

export default function WordAnswers({currentWord}) {
    return (
        <div className={`${styles.wordAnswers}`}>
            <h3>{currentWord.word}</h3>
            <h4>Definitions</h4>
            <ul>
                {currentWord.definitions.map(definition => (
                    <li key={definition.id}>{definition.definition}</li>
                ))}
            </ul>
            <h4>Exampless</h4>
            <ul>
                {currentWord.examples.map(example => (
                    <li key={example.id}>{example.example}</li>
                ))}
            </ul>
        </div>
    )
}
