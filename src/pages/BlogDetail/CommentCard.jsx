import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const CommentCard = ({ comment }) => {
    const { user } = useContext(AuthContext);
    return (
        <div className='mb-7 border p-2 bg-white rounded-lg'>
            <p className=''>{comment?.comment}</p>

            <div className='flex  items-center ml-10'>
                <div className="w-8 rounded-full bg-blue-700">
                    {
                        
                            <div className='font-bold text-2xl text-white text-center'>{comment?.email.slice(0, 1)}</div>
                    }

                </div>
                <span className='rounded-lg font-bold'>{comment?.user_name ? comment?.user_name : comment?.email}</span>
            </div>
        </div>
    );
};

export default CommentCard;