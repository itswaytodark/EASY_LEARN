import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Background from "@/components/ui/background";
import ConfirmDeleteCard from "@/components/MyButton/ConfirmDeleteCard";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [myBlogs, setMyBlogs] = useState([]);
  const [showConfirm, setShowConfirm] = useState(false);
  const [toDeleteBlogId, setToDeleteBlogId] = useState(null);
  const navigate = useNavigate()

  // Fetch user's blogs
  const fetchMyBlogs = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/api/blogs/my-blogs`,
        { withCredentials: true }
      );
      setMyBlogs(res.data.blogs || []);
    } catch (error) {
      console.error("Error fetching my blogs:", error);
    }
  };

  useEffect(() => {
    fetchMyBlogs();
  }, []);

  // Delete blog
  const handleDelete = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/blogs/delete/${toDeleteBlogId}`, {
        withCredentials: true,
      });
      setMyBlogs((prev) => prev.filter((blog) => blog._id !== toDeleteBlogId));
    } catch (err) {
      console.error("Failed to delete:", err);
    } finally {
      toast('Blog Deleted !')
      setShowConfirm(false);
      setToDeleteBlogId(null);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Background />
      </div>

      {/* Main content */}
      <div className="w-full max-w-6xl mx-auto mt-32 px-4 py-4">
        <h1 className="text-4xl font-bold mb-10">Your Blogs</h1>

        {myBlogs.length === 0 ? (
          <p className="text-white/60">You haven't posted any blogs yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {myBlogs.map((blog) => (
              <Card
                key={blog._id}
              onClick={() => navigate(`/blogs/${blog._id}`)}
                className="bg-white/5 border border-white/10 backdrop-blur-xl text-white shadow-md flex flex-col cursor-pointer"
              >
                <img
                  src={blog.image || "https://via.placeholder.com/400x200?text=No+Image"}
                  alt={blog.title}
                  className="w-full h-40 object-cover rounded-t-md"
                />
                <CardContent className="p-4 flex flex-col justify-between grow">
                  <div>
                    <h3 className="text-lg font-semibold">{blog.title}</h3>
                    <p className="text-sm text-white/70 line-clamp-3">{blog.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-auto">
                    <p className="text-xs text-gray-400">By you</p>
                    <Trash2
                      size={26}
                      className="text-red-500 hover:text-red-600 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        setToDeleteBlogId(blog._id);
                        setShowConfirm(true);
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Confirmation Popup */}
      <ConfirmDeleteCard
        isOpen={showConfirm}
        onCancel={() => setShowConfirm(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default ProfilePage;
