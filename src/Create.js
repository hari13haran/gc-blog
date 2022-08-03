import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('hari');

    const handleSubmit = (event) => {
        event.preventDefault();
        const blog = { title, body, author };
        console.log(blog);
    }

    return (  
       <div className="create">
        <h2>Add a new blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input type="text" 
                   required
                   value={title}
                   onChange={(event) => setTitle(event.target.value)}
            />
            <label>Blog body:</label>
            <textarea 
                   required
                   value={body}
                   onChange={(event) => setBody(event.target.value)}
            ></textarea>
            <label>Blog author:</label>
            <select
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
            >
                <option value="hari">Hari</option>
                <option value="haran">Haran</option>
            </select>
            <button>Add Blog</button>
        </form>
       </div> 
    );
}
 
export default Create;