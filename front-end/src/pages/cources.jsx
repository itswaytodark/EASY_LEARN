import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Link added
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Heart, MoveDown, Search } from "lucide-react"; // Search icon added
import { Card, CardContent } from "../components/ui/card"; 
import Background from "../components/ui/background";
import { likeBlog, unlikeBlog } from "../REDUX/slices/isLiked";
// import { Link } from "react-router-dom"; // Already imported above

const Courses_page = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const likedBlogs = useSelector((state) => state.likedBlog.blogItem);
    const [blogs, setBlogs] = useState([]);
    const [searchQuery, setSearchQuery] = useState(""); // 1. NEW: State for search input
    const [loading, setLoading] = useState(false); // OPTIONAL: Loading state for feedback

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

    // 2. MODIFIED: Fetch blogs function now accepts a query
    const fetchBlogs = async (query = "") => {
        setLoading(true);
        try {
            let url = `${import.meta.env.VITE_BASE_URL}/api/blogs/blogs`;
            
            // If a query is present, use the new search endpoint
            if (query.trim()) {
                url = `${import.meta.env.VITE_BASE_URL}/api/blogs/search?username=${query.trim()}`;
            }

            const res = await axios.get(
                url,
                { withCredentials: true }
            );
            
            setBlogs(res.data.blogs || []);
        } catch (err) {
            console.error("Failed to fetch blogs:", err);
            // Optionally handle errors, e.g., setBlogs([])
        } finally {
            setLoading(false);
        }
    };
    
    // 3. NEW: Function to handle the search submission
    const handleSearch = (e) => {
        e.preventDefault();
        fetchBlogs(searchQuery);
    };


    // 4. MODIFIED: Fetch blogs on component mount (initial load)
    useEffect(() => {
        fetchBlogs();
    }, []);

    // 5. NEW: Function to clear search and fetch all blogs again
    const clearSearch = () => {
        setSearchQuery("");
        fetchBlogs(""); // Fetch all blogs
    }

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
            
            <Background />

            <div className="relative z-10 w-full max-w-6xl mx-auto pt-28 px-4 py-4">
                
                {/* --- Header --- */}
                <div className="flex items-baseline gap-2 mb-10">
                    <h1 className="text-4xl font-extrabold text-foreground tracking-tight">Explore Our Blogs</h1>
                    <MoveDown strokeWidth={3} className="text-primary w-6 h-6" /> 
                </div>

                {/* --- Search Bar and Upload Button Container --- */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    
                    {/* --- Search Bar (NEW) --- */}
                    <form onSubmit={handleSearch} className="flex w-full sm:w-80 space-x-2">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by author name..."
                            className="flex-grow p-3 border border-border rounded-lg bg-card/80 text-foreground 
                                       focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        />
                        <button
                            type="submit"
                            className="p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                            aria-label="Search"
                        >
                            <Search size={20} />
                        </button>
                        {searchQuery && (
                            <button
                                type="button"
                                onClick={clearSearch}
                                className="p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                                aria-label="Clear Search"
                            >
                                X
                            </button>
                        )}
                    </form>

                    {/* --- Upload Button --- */}
                    <Link to="/upload-blog" className="w-full sm:w-auto">
                        <button 
                            className="text-lg w-full sm:w-auto px-6 py-2 bg-primary text-primary-foreground font-bold uppercase 
                                       rounded-full shadow-lg hover:bg-primary/90 transition duration-300 transform hover:scale-[1.02]"
                        >
                            Upload New Blog
                        </button>
                    </Link>
                </div>
                
                {/* --- Blog Grid --- */}
                {loading ? (
                    <p className="text-center text-primary text-xl mt-12">Loading blogs...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {blogs.map((blog) => (
                            <Card
                                key={blog._id}
                                onClick={() => navigate(`/blogs/${blog._id}`)}
                                className="bg-card/90 border border-border text-foreground shadow-xl flex flex-col cursor-pointer 
                                           transition-all duration-330 hover:bg-card hover:shadow-primary-glow"
                            >
                                {/* Blog Card Content remains the same */}
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

                                    <div className="flex items-center justify-between pt-3 mt-auto border-t border-border/50 z-10">
                                        <p className="text-sm font-medium text-secondary-foreground">by {blog.owner.name}</p>
                                        
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
                )}
                
                {/* --- No Blogs Found Message --- */}
                {!loading && blogs.length === 0 && (
                    <p className="text-center text-secondary-foreground text-xl mt-12">
                        No blogs found {searchQuery ? `for author "${searchQuery}"` : "yet"}.
                    </p>
                )}
                
                <div className="h-20"></div> {/* Bottom padding */}
            </div>
        </div>
    );
};

export default Courses_page;