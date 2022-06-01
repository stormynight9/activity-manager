import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ],
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

const TextEditor = () => {
    const [body, setBody] = useState("")

    const handleBody = (e) => {
        console.log(e)
        setBody(e)
    }

    return (
        <div>
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