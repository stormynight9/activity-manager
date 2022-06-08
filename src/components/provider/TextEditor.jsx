import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const modules = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike']
    ],
}

const formats = [
    'bold', 'italic', 'underline', 'strike', 'blockquote',
]

const TextEditor = ({ formDetails, setFormDetails }) => {
    const [body, setBody] = useState("")

    const handleBody = (e) => {
        setBody(e)
        setFormDetails({ ...formDetails, details: body })
    }

    return (
        <div className='mt-4 mb-4'>
            <ReactQuill
                placeholder='Ecrire quelque chose...'
                onChange={handleBody}
                value={body}
                modules={modules}
                formats={formats}
            />
        </div>
    )
}

export default TextEditor