import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('hari');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('New blog added!')
            setIsPending(false);
            history.push('/');
        });
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
            { !isPending && <button>Add Blog</button> }
            { isPending && <button>Adding Blog...</button>}
        </form>
       </div> 
    );
}
 
export default Create;