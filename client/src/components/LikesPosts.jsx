import { FaRegComment } from 'react-icons/fa';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LikesPosts({ post }) {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [data, setData] = useState(post);
  
  const handleLikes = async () => {
    try {
      if (!currentUser) {
        navigate('sign-in');
        return;
      }
      const res = await fetch(`/api/post/likePost/${post._id}`, {
        method: 'PUT',
      });
      if (res.ok) {
        const data = await res.json();
        setData(data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div
      className='flex items-center gap-1 md:justify-center border-t pt-4 border-gray-500 sm:px-2'>
      <button type='button' onClick={handleLikes}
        className='text-3xl'>
        {(currentUser && data.likes.includes(currentUser._id)) ?
          <AiFillHeart className='dark:text-red-500 text-red-600'/> : <AiOutlineHeart />}
      </button>
      <span className='dark:text-gray-300 text-gray-600 h-7 font-bold'>
        {data.numOfLikes === 0 ? 'No Likes yet' : data.numOfLikes}
      </span>
    </div>
  )
};