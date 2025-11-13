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
  const navigate = useNavigate();

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
    // Check if ID exists before proceeding
    if (!toDeleteBlogId) {
      setShowConfirm(false);
      return;
    }

    try {
      await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/blogs/delete/${toDeleteBlogId}`, {
        withCredentials: true,
      });
      // Update state to remove deleted blog
      setMyBlogs((prev) => prev.filter((blog) => blog._id !== toDeleteBlogId));
      toast.success('Blog Deleted Successfully!'); // Use toast.success
    } catch (err) {
      console.error("Failed to delete:", err);
      toast.error('Failed to delete blog.'); // Use toast.error for failures
    } finally {
      setShowConfirm(false);
      setToDeleteBlogId(null);
    }
  };

  return (
    // Base container uses theme colors
    <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Background />
      </div>

      {/* Main content */}
      <div className="w-full max-w-6xl mx-auto pt-32 px-4 py-4">
        <h1 className="text-4xl font-extrabold text-primary mb-10 tracking-tight">Your Blogs</h1>

        {myBlogs.length === 0 ? (
          <p className="text-muted-foreground text-xl">You haven't posted any blogs yet. Time to create one!</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {myBlogs.map((blog) => (
              <Card
                key={blog._id}
                onClick={() => navigate(`/blogs/${blog._id}`)}
                // Theme-compliant card styling
                className="bg-card/70 border border-border backdrop-blur-sm text-foreground shadow-xl flex flex-col cursor-pointer 
                           transition-all duration-300 hover:bg-card/90 hover:shadow-primary-glow"
              >
                <img
                  src={blog.image || "https://via.placeholder.com/400x200?text=No+Image"}
                  alt={blog.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />
                <CardContent className="p-4 flex flex-col justify-between grow space-y-2">
                  <div>
                    {/* Title uses primary color */}
                    <h3 className="text-lg font-semibold text-primary">{blog.title}</h3>
                    {/* Description uses muted color */}
                    <p className="text-sm text-muted-foreground line-clamp-3">{blog.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 mt-auto border-t border-border/50">
                    {/* Owner text uses muted color */}
                    <p className="text-xs text-muted-foreground">By you</p>
                    
                    {/* Delete Icon */}
                    <Trash2
                      size={20}
                      // Uses theme destructive color for delete actions
                      className="text-destructive hover:text-destructive/80 cursor-pointer transition-colors"
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
        onCancel={() => {
            setShowConfirm(false);
            setToDeleteBlogId(null);
        }}
        onConfirm={handleDelete}
      />
      <div className="h-20"></div> {/* Bottom padding */}
    </div>
  );
};

export default ProfilePage;