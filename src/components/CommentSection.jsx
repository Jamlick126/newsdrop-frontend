import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const CommentSection = ({ postId }) => {
    const { isAuthenticated, user } = useAuth();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
            const res = await fetch(`http://localhost:4000/api/posts/${postId}/comments`);
            const data = await res.json();
            setComments(data);
        };
        fetchComments();
    }, [postId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        try {
            const response = await fetch(`http://localhost:4000/api/posts/${postId}/comments`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`,
             },
            body: JSON.stringify({ content: newComment  }),
        });

        if (response.ok) {
            const savedComment = await response.json();
            setComments(prev =>[savedComment, ...prev]);
            setNewComment('');
        } else {
            console.error("Failed to post comment");
        }
    } catch (error) {
        console.error("Fetch error:", error)
    }
};
    const handleDelete = async (commentId) => {
    if(!window.confirm("Are you sure you want to delete this comment?")) return;

    try {
        const response = await fetch(`http://localhost:4000/api/posts/${postId}/comments/${commentId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`,
            },
        });

        if (response.ok) {
            setComments(prev => prev.filter(c => c.id !== commentId));
        } else {
            alert("Failed to delete comment");
        }
    } catch (error) {
        console.error("Delete fetch error:", error);
    }
};

    return (
        <div className="comment-section container">
            <h3 className="section-title">Comments({comments.length})</h3>
            {/* Conditional Rendering based on Auth status*/}
            {isAuthenticated ? (
                <form onSubmit={handleSubmit} className="comment-form">
                    <textarea 
                        placeholder="Write a comment..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="form-input" rows="4">       
                    </textarea>
                    <button type="submit" className="btn fancy-border">Post Comment</button>  
                </form>
            ) : (
                <div className="auth-prompt">
                    <p>You must be <Link to="/login" style={{color: 'var(--primary-color)'}}>Logged in</Link>to post a comment.</p>
                </div>
            )}
            <div className="comment-list">
                {Array.isArray(comments) && comments.length > 0 ?(
                     comments.map(comment => (
                        <div key={comment.id} className="comment-card">
                            <div className="comment-avatar">
                                {comment.username? comment.username.charAt(0).toUpperCase() : '?'}
                            </div>
                            <div className="comment-body">
                                <div className="comment-metadata">
                                    <h4 className="comment-author">{comment.username}</h4>
                                    <span className="comment-date">
                                        {new Date(comment.created_at).toLocaleDateString(undefined, {
                                            month:'short',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </span>
                                    <p className="comment-text">{comment.content}</p>
                                    {/* Only show delete button if user owns the comment */}
                                        {isAuthenticated && user.id === comment.user_id && (
                                            <button 
                                                onClick={() => handleDelete(comment.id)}
                                                className="delete-btn"
                                                title="Delete Comment"
                                            >
                                                Delete
                                            </button>
                                        )}
                                </div>
                            </div>   
                        </div>
                    ))
                ) : (
                    <p className="no-comments">No comments yet. Be the first to comment!</p>
                )}
            </div>
        </div>
    );
};

export default CommentSection;