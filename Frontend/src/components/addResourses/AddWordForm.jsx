import { useState } from "react"

export default function AddWordForm({ style }) {
    const [definitions, setDefinitions] = useState([["", "1414"]])

    const listDefinitions = definitions.map((definition, index) => {
        const isFirst = index === 0
        return (
            <div key={definition[1]}>
                {!isFirst && (
                    <button type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec3e13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                    </button>
                )}
                <textarea></textarea>
            </div>
        )
    });

    const handleAddDefinition = () => {
        setDefinitions(definitions.concat([["", "1415"]]))
    }

    const [examples, setExanples] = useState([["", "1420"]])

    const listExamples = examples.map((example, index) => {
        const isFirst = index === 0
        return (
            <div key={example[1]} >
                {!isFirst && (
                    <button type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec3e13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                    </button>
                )}
                <textarea></textarea>
            </div>
        )
    });

    const handleAddExample = () => {
        setExanples(examples.concat([["", "1425"]]))
    }

    return (
        <form action="" className={style}>
            <label htmlFor="word">Word</label>
            <input type="text" id="word" />
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
            <button>
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
