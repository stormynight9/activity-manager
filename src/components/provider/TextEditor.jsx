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

const TextEditor = () => {
    const [body, setBody] = useState("")

    const handleBody = (e) => {
        setBody(e)
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
            <div dangerouslySetInnerHTML={{ __html: body }}>

            </div>
        </div>
    )
}

export default TextEditor