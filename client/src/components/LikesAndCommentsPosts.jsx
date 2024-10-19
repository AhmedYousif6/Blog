import { Button } from 'flowbite-react';
import { FaThumbsUp, FaComment } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LikesAndCommentsPosts({ postId }) {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [likes, setLikes] = useState('');
  
  const handleLikes = async () => {
    try {
      if (!currentUser) {
        navigate('sign-in');
        return;
      }
      const res = await fetch(`/api/post/likePost/${postId}`, {
        method: 'PUT',
      });
      if (res.ok) {
        const data = await res.json();
        setLikes(data.numOfLikes);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='flex gap-2 p-3' onClick={handleLikes}>
      <Button type='button'>
        <span><FaThumbsUp /></span>
        <span>
          {likes}
        </span>
      </Button>
      <Button type='button'>
        <span><FaComment /></span>
        <span>50</span>
      </Button>
    </div>
  )
};
