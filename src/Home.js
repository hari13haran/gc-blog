import { useState } from "react";
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

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">

            {/* <h2>Home Page</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button> */}
            {/* <button onClick={(event) => {
                handleClickArgument('hari', event)
            }}>Click Name</button> */}

            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />

            {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" /> */}

        </div>
     );
}
 
export default Home;