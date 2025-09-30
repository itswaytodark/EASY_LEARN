import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Heart, MoveDown } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";
import Background from "../components/ui/background";
import { likeBlog, unlikeBlog } from "../REDUX/slices/isLiked";
import { Link } from "react-router-dom";

const Courses_page = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const likedBlogs = useSelector((state) => state.likedBlog.blogItem);
  const [blogs, setBlogs] = useState([]);

  const isLiked = (id) => likedBlogs.some(item => item._id === id);


 const handleToggleLike = (blog) => {
  if (isLiked(blog._id)) {
    dispatch(unlikeBlog(blog));
  } else {
    dispatch(likeBlog(blog));
  }
};

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/blogs/blogs`,
          { withCredentials: true }
        );
        console.log(res);
        
        setBlogs(res.data.blogs || []);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <Background />
      </div>

      <div className="w-full max-w-6xl mx-auto mt-30 px-4 py-4">
        <div className="flex items-baseline gap-1">
          <h1 className="text-4xl font-bold mb-10">Explore Our Blogs</h1>
          <MoveDown strokeWidth={3} />
        </div>

      <Link to="/upload-blog">
      <button className="text-2xl mb-5 py-3 w-38 bg-gradient-to-r from-purple-600 to-fuchsia-400 text-white font-bold uppercase shadow-lg hover:from-purple-700 hover:to-fuchsia-700 transition duration-300">
          Upload
        </button>
      </Link>
      
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <Card
              key={blog._id}
              onClick={() => navigate(`/blogs/${blog._id}`)}
              className="bg-white/5 border border-white/10 backdrop-blur-xl text-white shadow-md flex flex-col cursor-pointer"
            >
              <img
                src={blog.image || "https://via.placeholder.com/400x200?text=No+Image"}
                alt={blog.title}
                className="w-full h-40 object-center rounded-t-md "
              />

              <CardContent className="p-4 flex flex-col justify-between grow">
                <div>
                  <h3 className="text-lg font-semibold">{blog.title}</h3>
                  <p className="text-sm text-white/70 line-clamp-3">{blog.description}</p>
                </div>

                <p className="text-gray-400 "> {blog.owner.name}</p>

                <div className="flex items-center justify-between pt-4 mt-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleLike(blog);
                    }}
                  >
                    <Heart
                      size={24}
                      fill={isLiked(blog._id) ? "#c084fc" : "none"}
                      color={isLiked(blog._id) ? "#c084fc" : "gray"}
                      className="transition-colors hover:fill-purple-400 hover:text-purple-400 cursor-pointer"
                    />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses_page;
