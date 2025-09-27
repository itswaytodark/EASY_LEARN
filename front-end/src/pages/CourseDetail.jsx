import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Background from "../components/ui/background";
import { CircleUser  } from "lucide-react"; // example avatar icon

const CourseDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${baseUrl}/api/blogs/blog/${id}`, {
          withCredentials: true,
        });
        setBlog(res.data.blog);
      } catch (err) {
        setError("Blog not found or error occurred.");
      }
    };
    if (id) fetchBlog();
  }, [id]);

  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;
  if (!blog) return <div className="text-center text-white/70 mt-10">Loading...</div>;

  
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div className="absolute inset-0 -z-10"><Background /></div>

      <div className="flex justify-center py-10 px-2 sm:px-0">
        <div className="w-full max-w-xl bg-white/5 rounded-xl shadow-lg border border-white/10 p-0 sm:p-0 mt-16">
          
          {/* Image */}
          {blog.image && (
            <img
              className="w-full max-h-96 object-contain bg-black rounded-t-md"
              src={blog.image}
              alt={blog.title}
            />
          )}
          {/* Post Content */}
          <div className="p-5">
            <h1 className="text-2xl font-bold mb-2 text-white">{blog.title}</h1>
            <div className="text-white/80 text-base leading-relaxed mb-3">
              {blog.description &&
                blog.description.split('\n').map((para, idx) => (
                  <p className="mb-3 last:mb-0" key={idx}>{para}</p>
                ))}
            </div>
            {/* Details or more info */}
            {blog.details && (
              <div className="mt-4 py-3 px-4 bg-white/10 rounded">
                <span className="text-sm text-gray-200">{blog.details}</span>
              </div>
            )}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
