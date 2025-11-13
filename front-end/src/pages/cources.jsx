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

    // Check if a blog is liked
    const isLiked = (id) => likedBlogs.some(item => item._id === id);

    // Toggle like status
    const handleToggleLike = (blog) => {
        if (isLiked(blog._id)) {
            dispatch(unlikeBlog(blog));
        } else {
            dispatch(likeBlog(blog));
        }
    };

    // Fetch blogs on component mount
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
        // 1. BACKGROUND COMPONENT: Added directly, relying on its internal 'fixed inset-0 z-0' properties.
        // The outer div is just a container for the page structure.
        <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
            
            <Background /> {/* FIX: Call Background directly */}

            {/* 2. MAIN CONTENT WRAPPER: Needs 'relative z-10' to float above the fixed background. 
                (Your current structure is already implicitly doing this, but 'relative z-10' is best practice) */}
            <div className="relative z-10 w-full max-w-6xl mx-auto pt-28 px-4 py-4">
                
                {/* --- Header --- */}
                <div className="flex items-baseline gap-2 mb-10">
                    <h1 className="text-4xl font-extrabold text-foreground tracking-tight">Explore Our Blogs</h1>
                    <MoveDown strokeWidth={3} className="text-primary w-6 h-6" /> 
                </div>

                {/* --- Upload Button --- */}
                <Link to="/upload-blog">
                    <button 
                        className="text-lg mb-8 px-6 py-2 bg-primary text-primary-foreground font-bold uppercase 
                                    rounded-full shadow-lg hover:bg-primary/90 transition duration-300 transform hover:scale-[1.02]"
                    >
                        Upload New Blog
                    </button>
                </Link>
                
                {/* --- Blog Grid --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {blogs.map((blog) => (
                        <Card
                            key={blog._id}
                            onClick={() => navigate(`/blogs/${blog._id}`)}
                            // FIX: Increased Card opacity (bg-card/90) for better text readability against the Aurora
                            className="bg-card/90 border border-border text-foreground shadow-xl flex flex-col cursor-pointer 
                                     transition-all duration-330 hover:bg-card hover:shadow-primary-glow"
                        >
                            <img
                                src={blog.image || "https://via.placeholder.com/400x200?text=No+Image"}
                                alt={blog.title}
                                className="w-full h-40 object-cover rounded-t-lg"
                            />

                            <CardContent className="p-4 flex flex-col justify-between grow space-y-2">
                                <div>
                                    <h3 className="text-lg font-semibold text-primary">{blog.title}</h3>
                                    <p className="text-sm text-muted-foreground line-clamp-3 mt-1">{blog.description}</p>
                                </div>

                                {/* --- Blog Card Footer: Owner Name and Like Button --- */}
                                <div className="flex items-center justify-between pt-3 mt-auto border-t border-border/50 z-10">
                                    {/* Owner name on the left */}
                                    <p className="text-sm font-medium text-secondary-foreground">by {blog.owner.name}</p>

                                    {/* Like Button on the right */}
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation(); 
                                            handleToggleLike(blog);
                                        }}
                                        aria-label={isLiked(blog._id) ? "Unlike" : "Like"}
                                        className="p-1 rounded-full border border-border hover:bg-border transition-colors outline-none"
                                    >
                                        <Heart
                                            size={20}
                                            fill={isLiked(blog._id) ? "hsl(var(--primary))" : "none"} 
                                            color={"hsl(0 0% 100%)"}
                                            className="transition-colors hover:fill-primary cursor-pointer"
                                        />
                                    </button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {blogs.length === 0 && (
                    <p className="text-center text-secondary-foreground text-xl mt-12">
                        No blogs found. Be the first to upload one!
                    </p>
                )}
                
                <div className="h-20"></div> {/* Bottom padding */}
            </div>
        </div>
    );
};

export default Courses_page;