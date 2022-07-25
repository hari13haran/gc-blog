const Home = () => {

    const handleClick = () => {
        console.log('hello there!')
    }

    // event property is a default property that can be passed & accessed
    const handleClickArgument = (name, event) => {
        console.log('Hello, '+ name, event.target);
    }

    return ( 
        <div className="home">
            <h2>Home Page</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(event) => {
                handleClickArgument('hari', event)
            }}>Click Name</button>
        </div>
     );
}
 
export default Home;