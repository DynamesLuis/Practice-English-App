import { useState } from "react"

function generateId() {
    return crypto.randomUUID()
}

const INITIAL_MEANINGS_STATE = [{
    meaning: "",
    renderId: generateId(),
    dbId: null,
}]

const INITIAL_EXAMPLES_STATE = [{
    example: "",
    renderId: generateId(),
    dbId: null
}]

export default function AddWordForm({ style }) {
    const [word, setWord] = useState("")

    const [meanings, setMeanings] = useState(INITIAL_MEANINGS_STATE)

    const listMeanings = meanings.map((meaning, index) => {
        const isFirst = index === 0
        return (
            <div key={meaning.renderId}>
                {!isFirst && (
                    <button type="button" onClick={() => handleDeleteMeaning(meaning.renderId)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec3e13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                    </button>
                )}
                <textarea value={meaning.meaning} onChange={(event)  => handleChangeMeaning(meaning.renderId, event.target.value)}></textarea>
            </div>
        )
    });

    const handleAddMeaning = () => {
        setMeanings(prev => [...prev, {
            meaning: "",
            renderId: generateId(),
            dbId: null,
        }])
    }

    const handleDeleteMeaning = (renderId) => {
        setMeanings(meanings.filter(meaning => meaning.renderId !== renderId))
    }

    const handleChangeMeaning = (renderId, newValue) => {
        setMeanings(prev =>
            prev.map(meaning =>
                meaning.renderId === renderId ? { ...meaning, meaning: newValue } : meaning
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
            definitions: [meanings.map(meaning => ({ definition: meaning.meaning }))],
            examples: [examples.map(example => ({ examples: example.example }))]
        }
        console.log(payload)
        setWord("")
        setMeanings(INITIAL_MEANINGS_STATE)
        setExamples(INITIAL_EXAMPLES_STATE)
    }

    return (
        <form action="" className={style}>
            <label htmlFor="word">Word</label>
            <input type="text" id="word" value={word} onChange={(event) => setWord(event.target.value)} />
            <label htmlFor="meaning">Meaning</label>
            <div className="meaning-container">
                {listMeanings}
            </div>
            <button className="addMeaningBtn" type="button" onClick={handleAddMeaning} >
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
            <button type="submit" onClick={(event) => handleSubmit(event)}>
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
