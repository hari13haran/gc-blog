import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('Hari');
    const [age, setAge] = useState(25)

    const handleClick = () => {
        setName('GC');
        setAge(27);
    }

    // event property is a default property that can be passed & accessed
    // const handleClickArgument = (name, event) => {
    //     console.log('Hello, '+ name, event.target);
    // }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={(event) => {
                handleClickArgument('hari', event)
            }}>Click Name</button> */}
        </div>
     );
}
 
export default Home;