import { useEffect, useState } from "react"
import { postText, putText } from "../../api/textService"

export default function AddTextForm({ style, setTexts, editingText, setEditingText, fetchTexts, pageSize, texts }) {
    const isEditing = editingText !== null
    const submitBtnText = isEditing ? "Edit text" : "Add text"
    const [errors, setErrors] = useState({})

    const [formValues, setFormValues] = useState({
        title: "",
        text: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormValues(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        if (isEditing) {
            editText()
        } else {
            addNewText()
        }

        setFormValues({
            title: "",
            text: ""
        })
    }

    const editText = async () => {
        const textId = editingText.id
        const { title, text } = formValues
        try {
            const response = await putText(textId, title, text)
            const updatedText = await response.data
            setTexts(prev => prev.map(prevText => prevText.id === updatedText.id ? { ...prevText, title: title, text: text } : prevText))
            setEditingText(null)
        } catch (error) {
            console.error(error)
        }
    }

    const addNewText = async () => {
        try {
            const response = await postText(formValues)
            const textAdded = response.data
            console.log(textAdded);
            if (texts.length < pageSize) {
                fetchTexts()
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (editingText) {
            setFormValues(editingText)
        }
    }, [editingText])

    const validate = () => {
        const errors = {}

        if (!formValues.text.trim()) {
            errors.text = "Text must not be empty"
        }
        if (!formValues.title.trim()) {
            errors.title = "Title must not be empty"
        }

        return errors
    }

    return (
        <form className={style} onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" value={formValues.title} onChange={(event => handleChange(event))} />
            <p>{errors.title}</p>
            <label htmlFor="text">Text</label>
            <textarea id="text" name="text" value={formValues.text} onChange={(event => handleChange(event))}></textarea>
            <p>{errors.title}</p>
            <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-plus">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                </svg>
                {submitBtnText}
            </button>
        </form>
    )
}
