import { Card, CardContent } from "../components/ui/card";
import Background from "../components/ui/background";
import { Heart } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { unlikeBlog } from '../REDUX/slices/isLiked';

const LikedBlogs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const likedBlogs = useSelector((state) => state.likedBlog.blogItem);

  const handleUnlike = (blog) => {
    dispatch(unlikeBlog(blog));
  };
  
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Background />
      </div>

      <div className="relative z-10 pt-32 max-w-6xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-10">Fav Blogs</h1>

        {likedBlogs.length === 0 ? (
          <p className="text-white/70 text-lg">You haven't liked any blogs yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {likedBlogs.map((blog, index) => (
              <Card
                key={index}
                onClick={() => navigate(`/blogs/${blog._id}`)}
                className="bg-white/5 border border-white/10 backdrop-blur-xl text-white shadow-md flex flex-col"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-40 object-cover"
                />

                <CardContent className="p-4 flex flex-col justify-between grow">
                  <div>
                    <h3 className="text-lg font-semibold">{blog.title}</h3>
                    <p className="text-sm text-white/70 line-clamp-3">{blog.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); 
                        handleUnlike(blog);
                      }}
                    >
                      <Heart
                        size={24}
                        fill="#c084fc"
                        color="#c084fc"
                        className="transition-colors hover:fill-white hover:text-white cursor-pointer"
                      />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LikedBlogs;
