import { Link } from "react-router-dom";
import { useContext } from "react";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { ImPencil2 } from "react-icons/im";
import { UserContext } from '../../contexts/user.context.jsx';
const PostCard = ({ props }) => {
    //console.log("PostCard rendered");
    const { user } = useContext(UserContext);
    const { post } = props;

    const handleEdit = (id) => {
        console.log(`Edit post with id: ${id}`);
        // Implement edit functionality here    
    }
    const handleDelete = (id) => {
        console.log(`Delete post with id: ${id}`);
        // Implement delete functionality here
    }

    return (
        <div className="post">
            <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
            <p>{post.body}</p>
            {!user?.isAdmin && (
                <div className="post-actions">
                    <button onClick={() => handleEdit(post.id)}>
                        <ImPencil2 />   Edit
                    </button>
                    <button onClick={() => handleDelete(post.id)}>
                        <FaTrashAlt />
                        Delete
                    </button>
                </div>
            )}
        </div>
    )
}
export default React.memo(PostCard);