import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { CalendarDays, Tag, User } from "lucide-react"; 
import Background from "../components/ui/background"; // Re-imported Background

const CourseDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState("");
    const baseUrl = import.meta.env.VITE_BASE_URL;

    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`${baseUrl}/api/blogs/blog/${id}`, {
                    withCredentials: true,
                });
                setBlog(res.data.blog);
            } catch (err) {
                console.error("Failed to fetch blog:", err);
                setError("Oops! We couldn't find that blog or something went wrong.");
            }
        };
        if (id) fetchBlog();
    }, [id, baseUrl]);

    // --- Loading and Error States ---
    if (error)
        return (
            <div className="min-h-screen pt-40 flex items-center justify-center bg-background text-center text-destructive font-semibold text-xl">
                {error}
            </div>
        );
    if (!blog)
        return (
            <div className="min-h-screen pt-40 flex items-center justify-center bg-background text-center text-secondary-foreground text-xl animate-pulse">
                Fetching your story...
            </div>
        );

    return (
        // Main container uses theme background and is scrollable
        <div className="min-h-screen w-full relative overflow-hidden bg-background text-foreground">
            
            {/* Background Component: Fixed and low z-index for the Aurora effect */}
            <Background />

            {/* Centering wrapper with ample vertical padding - Needs z-index to float above BG */}
            <div className="relative z-10 flex justify-center py-10 px-4 sm:px-0 pt-24">
                
                {/* --- Main Post Card Container --- */}
                <div className="w-full max-w-xl bg-card/90 backdrop-blur-lg rounded-xl shadow-2xl shadow-primary/20 border border-border mt-8">
                    
                    {/* Image */}
                    {blog.image && (
                        <img
                            className="w-full max-h-96 object-cover bg-background rounded-t-xl"
                            src={blog.image}
                            alt={blog.title}
                        />
                    )}

                    {/* --- Content and Metadata --- */}
                    <div className="p-6 md:p-8">
                        
                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-extrabold mb-3 text-primary leading-tight">
                            {blog.title}
                        </h1>

                        {/* Metadata Row: Owner & Date */}
                        <div className="flex items-center space-x-4 mb-6 text-sm text-secondary-foreground border-b border-border pb-4">
                            {/* Owner */}
                            {blog.owner?.name && (
                                <div className="flex items-center space-x-2">
                                    <User className="w-4 h-4 text-accent" />
                                    <span className="font-medium">{blog.owner.name}</span>
                                </div>
                            )}

                            {/* Date */}
                            <div className="flex items-center space-x-2">
                                <CalendarDays className="w-4 h-4 text-accent" />
                                <span>{formatDate(blog.createdAt)}</span>
                            </div>
                        </div>
                        
                        {/* Main Content */}
                        <div className="text-foreground text-base leading-relaxed space-y-5">
                            {/* The description should render content safely */}
                            {blog.description &&
                                blog.description.split('\n').map((para, idx) => (
                                    <p key={idx} className="mb-0 last:mb-0">
                                        {para}
                                    </p>
                                ))}
                        </div>
                        
                        {/* Additional Details (Tags/Categories) */}
                        {blog.details && (
                            <div className="mt-6 py-3 px-4 bg-background/50 border border-border rounded flex items-center space-x-3">
                                <Tag className="w-5 h-5 text-accent" />
                                <span className="text-sm font-medium text-secondary-foreground">{blog.details}</span>
                            </div>
                        )}
                        
                    </div>
                </div>
            </div>
            <div className="h-20"></div> {/* Bottom padding */}
        </div>
    );
};

export default CourseDetail;