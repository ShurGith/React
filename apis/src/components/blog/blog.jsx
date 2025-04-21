import PostCard from './PostCard.jsx';
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


    const postElements = posts.map((post) => (
        <PostCard key={post.id} props={{ post }} />

    ));
    return (
        <div className="blog-container">
            <h1 className="blog-title">Blog</h1>
            <div className="posts-container">
                {postElements}
            </div>
        </div>
    )
};

export default Blog;