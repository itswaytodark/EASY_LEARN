import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Background from "../components/ui/background";

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
        console.log(res);
        
        setBlog(res.data.blog);
      } catch (err) {
        console.error("Failed to fetch blog:", err);
        setError("Blog not found or error occurred.");
      }
    };

    if (id) fetchBlog();
  }, [id]);

  if (error) {
    return (
      <div className="text-center text-red-500 mt-10">
        {error}
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center text-white/70 mt-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <Background />
      </div>

      {/* Hero Image */}
      <div className="w-full h-[60vh] mt-20">
        <img
          src={blog.image || "https://via.placeholder.com/1200x600"}
          alt={blog.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Blog Content */}
      <div className=" px-6 py-8">
        
        {/* Title */}
        <h1 className="text-4xl font-bold">{blog.title}</h1>

        {/* Description / Content */}
        <p className="text-white/90 text-lg leading-relaxed">
          {blog.description}
        </p>

        {/* Optional details (author, date, etc.) */}
        <div className="text-sm text-white">
        <p>{blog.details}</p>
        </div>







      </div>
    </div>
  );
};

export default CourseDetail;
