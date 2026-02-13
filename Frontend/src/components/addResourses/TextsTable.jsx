import { deleteText } from "../../api/textService"

export default function TextsTable({ textsData, setTexts, setEditingText }) {
    const handleDeleteText = async (textId) => {
        try {
            await deleteText(textId)
            setTexts(prev => 
                prev.filter(text => text.id !== textId)
            )
        } catch (error) {
            console, error(error)
        }
    }

    const handleEditClick = (text) => {
        setEditingText(text)
        console.log(text);
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {textsData.map(text => (
                    <tr key={text.id}>
                        <td>{text.title}</td>
                        <td><button onClick={() => handleEditClick(text)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="#13a4ec" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-pencil">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                            <path d="M13.5 6.5l4 4" />
                        </svg></button></td>
                        <td><button onClick={() => handleDeleteText(text.id)}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="#ec3e13" strokeWidth="2" strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-trash">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 7l16 0" />
                            <path d="M10 11l0 6" />
                            <path d="M14 11l0 6" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg></button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
