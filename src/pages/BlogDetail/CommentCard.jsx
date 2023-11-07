import React from 'react';

const CommentCard = ({comment}) => {
    return (
        <div>
            <div className='rounded-lg bg-blue-800 text-white'>{ comment?.user_name ? comment?.user_name : comment?.email }</div>
            <p>{ comment.comment }</p>
        </div>
    );
};

export default CommentCard;