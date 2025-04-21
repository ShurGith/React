import { useEffect, useContext } from 'react';
import { BlogContext } from '../../contexts/blog.context.jsx';
import './blog.css';
const Blog = () => {
    const { posts, error, getPosts } = useContext(BlogContext);
    useEffect(() => {
        getPosts();
    })
    if (error.state) {
        return <div>Error: {error.message}</div>;
    }
    if (posts.length === 0) {
        return <div>Loading...</div>;
    }
    //console.log(posts);
    const postElements = posts.map((post) => (
        <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    ));
    return (
        <div className="blog-container">
            <h1 className="blog-title">Blog</h1>
            <div className="posts-container">
                {postElements}
            </div>
        </div>
        // <div className="blog-container">
    )
};

export default Blog;