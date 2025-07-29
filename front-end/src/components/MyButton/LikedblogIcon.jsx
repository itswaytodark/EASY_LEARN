import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LikedBlogsIcon = ({ setIsOpen }) => {
  const likedCount = useSelector((state) => state.likedBlog.blogItem.length);

  return (
    <div className="relative" onClick={() => setIsOpen(false)}>
    
      <p>LikedBlog</p>
        {likedCount > 0 && (
          <span className="absolute -top-1 -right-2 bg-white text-black text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md">
            {likedCount}
          </span>
        )}
      
    </div>
  );
};

export default LikedBlogsIcon;
