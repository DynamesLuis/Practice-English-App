import { useState } from "react"

export default function AddTextForm({ style }) {
    const [formValues, setFormValue] = useState({
        title: "",
        text: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValue(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setFormValue({
            title: "",
            text: ""
        })
    }

    return (
        <form className={style}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" value={formValues.title} onChange={(event => handleChange(event))} />
            <label htmlFor="text">Text</label>
            <textarea id="text" name="text" value={formValues.text} onChange={(event => handleChange(event))}></textarea>
            <button onClick={(event) => handleSubmit(event)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                </svg>
                Add Text
            </button>
        </form>
    )
}
