import React from 'react';
// import { useSelector } from 'react-redux';

// import { authMe } from '../redux/slices/authSlice';

export const CommentItem = ({ cmt }) => {


    return (
        <div className=' gap-3'>
            <div className=''>
                <p>e</p>
            </div>
            <div className='flex text-gray-300 text-[10px]'>{cmt.comment}</div>
        </div>
    )
}
