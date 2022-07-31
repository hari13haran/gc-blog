import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {

    // const [name, setName] = useState('Hari');
    // const [age, setAge] = useState(25)

    // const handleClick = () => {
    //     setName('GC');
    //     setAge(27);
    // }

    // event property is a default property that can be passed & accessed
    // const handleClickArgument = (name, event) => {
    //     console.log('Hello, '+ name, event.target);
    // }

    // const [blogs, setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    // ]);

    const [blogs, setBlogs] = useState(null);

    const [isPending, setIsPending] = useState(true);

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    // const [name, setName] = useState('mario');

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data);
            setBlogs(data);
            setIsPending(false);
        })
    }, []);

    return ( 
        <div className="home">

            {/* <h2>Home Page</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={(event) => {
                handleClickArgument('hari', event)
            }}>Click Name</button> */}

            { isPending && <div>Loading...</div> }

            {blogs && <BlogList blogs={blogs} title="All Blogs" />}

            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" /> */}

            {/* useEffect hook example */}
            {/* <button onClick={() => setName('hari')}>Change Name</button>
            <p>{name}</p> */}

        </div>
     );
}
 
export default Home;