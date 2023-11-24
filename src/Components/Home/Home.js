import React, { useContext, useEffect } from 'react';
import "./Home.css";
import { BlogContext } from "../../App";
import Blog from "../Blog/Blog";


const Home = () => {

    // const [blogs, setBlogs] = useState([]);
    const [blogs, setBlogs] = useContext(BlogContext);

    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <section>
            <div className='blogs-container'>
                {blogs.map((blog, index) => (
                    <Blog key={index} blog={blog} />
                ))}
            </div>
        </section>
    );
};

export default Home;