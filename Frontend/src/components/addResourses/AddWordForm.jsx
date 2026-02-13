import { useState } from "react"
import { postWord } from "../../api/wordService"

function generateId() {
    return crypto.randomUUID()
}

const INITIAL_DEFINITIONS_STATE = [{
    definition: "",
    renderId: generateId(),
    dbId: null,
}]

const INITIAL_EXAMPLES_STATE = [{
    example: "",
    renderId: generateId(),
    dbId: null
}]

export default function AddWordForm({ style, setWords }) {
    const [word, setWord] = useState("")

    const [definitions, setDefinitions] = useState(INITIAL_DEFINITIONS_STATE)

    const listDefinitions = definitions.map((definition, index) => {
        const isFirst = index === 0
        return (
            <div key={definition.renderId}>
                {!isFirst && (
                    <button type="button" onClick={() => handleDeleteDefinition(definition.renderId)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec3e13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                    </button>
                )}
                <textarea value={definition.definition} onChange={(event) => handleChangeDefinition(definition.renderId, event.target.value)}></textarea>
            </div>
        )
    });

    const handleAddDefinition = () => {
        setDefinitions(prev => [...prev, {
            definition: "",
            renderId: generateId(),
            dbId: null,
        }])
    }

    const handleDeleteDefinition = (renderId) => {
        setDefinitions(definitions.filter(definition => definition.renderId !== renderId))
    }

    const handleChangeDefinition = (renderId, newValue) => {
        setDefinitions(prev =>
            prev.map(definition =>
                definition.renderId === renderId ? { ...definition, definition: newValue } : definition
            ))
    }

    const [examples, setExamples] = useState(INITIAL_EXAMPLES_STATE)

    const listExamples = examples.map((example, index) => {
        const isFirst = index === 0
        return (
            <div key={example.renderId} >
                {!isFirst && (
                    <button type="button" onClick={() => handleDeleteExample(example.renderId)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec3e13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                    </button>
                )}
                <textarea value={example.example} onChange={(event) => handleChangeExample(example.renderId, event.target.value)}></textarea>
            </div>
        )
    });

    const handleAddExample = () => {
        setExamples(prev => [...prev, {
            example: "",
            renderId: generateId(),
            dbId: null,
        }])
    }

    const handleDeleteExample = (renderId) => {
        setExamples(examples.filter(example => example.renderId !== renderId))
    }

    const handleChangeExample = (renderId, newValue) => {
        setExamples(prev =>
            prev.map(example =>
                example.renderId === renderId ? { ...example, example: newValue } : example
            ))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const payload = {
            word: word,
            definitions: definitions.map(definition => ({ definition: definition.definition })),
            examples: examples.map(example => ({ example: example.example }))
        }
        setWord("")
        setDefinitions(INITIAL_DEFINITIONS_STATE)
        setExamples(INITIAL_EXAMPLES_STATE)
        addWord(payload)
        //console.log(payload);
        
    }

    const addWord = async(newWord) => {
        try {
            const response = await postWord(newWord)
            const createWord = response.data
            setWords(prev => [...prev, createWord])
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <form className={style} onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="word">Word</label>
            <input type="text" id="word" value={word} onChange={(event) => setWord(event.target.value)} />
            <label htmlFor="meaning">Meaning</label>
            <div className="meaning-container">
                {listDefinitions}
            </div>
            <button className="addMeaningBtn" type="button" onClick={handleAddDefinition} >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                </svg>
            </button>
            <label htmlFor="example">Example</label>
            <div className="examplesContainer">
                {listExamples}
            </div>
            <button className="addExampleBtn" type="button" onClick={handleAddExample}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                </svg>
            </button>
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                </svg>
                Add word
            </button>
        </form>
    )
}
