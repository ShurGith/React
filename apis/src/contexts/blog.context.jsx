import { createContext, useState } from "react";
const BlogContext = createContext();

const BlogProviderWrapper = (props) => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState({ state: false, message: "" });

    const getPosts = async () => {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            //console.log(data);
            if (!response.ok) {
                throw new Error("Failed to fetch posts");
            }
            setPosts(data);

        } catch (error) {
            setError({ state: true, message: error.message });
            console.error("Error fetching posts:", error);
        }
    }


    return (
        <BlogContext.Provider value={{ posts, error, getPosts }}>
            {props.children}
        </BlogContext.Provider>
    );

}
export { BlogContext, BlogProviderWrapper };