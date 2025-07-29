import { Card, CardContent } from "../components/ui/card";
import Background from "../components/ui/background";
import { Heart, MoveDown } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { likeBlog, unlikeBlog } from '../redux/slices/isLiked';

const courses = [
  {
    title: "React for Beginners",
    description: "Master the fundamentals of React with hands-on examples.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    price: "799",
    id: 'reactDetailPage'
  },
  {
    title: "Full Stack Web Dev",
    description: "Build real-world apps with MERN stack from scratch.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    price: "1499",
    id: 'FullStackWebDevDetailPage'
  },
  {
    title: "AI with Python",
    description: "Learn machine learning and AI using Python and real projects.",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
    price: "1199",
    id: 'AIwithPythonDetailPage'
  },
];

const Courses_page = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const likedBlogs = useSelector(state => state.likedBlog.blogItem);

  const isLiked = (id) => likedBlogs.some(item => item.id === id);

  const handleToggleLike = (course) => {
    if (isLiked(course.id)) {
      dispatch(unlikeBlog(course));
    } else {
      dispatch(likeBlog(course));
    }
  };

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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Card
              onClick={() => navigate(`/blogs/${course.id}`)}
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-xl text-white shadow-md flex flex-col"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-40 object-cover"
              />

              <CardContent className="p-4 flex flex-col justify-between grow">
                <div>
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <p className="text-sm text-white/70 line-clamp-3">{course.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); 
                      handleToggleLike(course);
                    }}
                  >
                    <Heart
                      size={24}
                      fill={isLiked(course.id) ? "#c084fc" : "none"} 
                      color={isLiked(course.id) ? "#c084fc" : "gray"}
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
