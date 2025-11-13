import { Card, CardContent } from "../components/ui/card";
// Background component removed in previous context (keeping import commented)
// import Background from "../components/ui/background"; 
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
    // Base colors set using theme variables
    <div className="relative w-full min-h-screen overflow-hidden bg-background text-foreground">
      {/* Background component removed / intentionally omitted */}
      {/* <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Background />
      </div> */}

      <div className="relative z-10 pt-32 max-w-6xl mx-auto px-4">
        {/* Title uses theme colors and large font */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight mb-10">
          Your Liked Blogs
        </h1>

        {likedBlogs.length === 0 ? (
          <p className="text-secondary-foreground text-xl">
            You haven't liked any blogs yet. Go explore!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {likedBlogs.map((blog) => (
              <Card
                key={blog._id} // Using _id is safer than index for key
                onClick={() => navigate(`/blogs/${blog._id}`)}
                // Theme-compliant card styling with hover effect
                className="bg-card/70 border border-border backdrop-blur-sm text-foreground shadow-xl flex flex-col 
                           cursor-pointer transition-all duration-330 hover:bg-card/90 hover:shadow-primary-glow"
              >
                <img
                  src={blog.image || "https://via.placeholder.com/400x200?text=Blog+Image"}
                  alt={blog.title}
                  className="w-full h-40 object-cover rounded-t-lg"
                />

                <CardContent className="p-4 flex flex-col justify-between grow space-y-2">
                  <div>
                    {/* Title using primary color */}
                    <h3 className="text-lg font-semibold text-primary">{blog.title}</h3>
                    {/* Description using muted color */}
                    <p className="text-sm text-muted-foreground line-clamp-3 mt-1">{blog.description}</p>
                  </div>

                  {/* Footer Area with Unlike Button */}
                  <div className="flex items-center justify-end pt-3 mt-auto border-t border-border/50 z-10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); 
                        handleUnlike(blog);
                      }}
                      aria-label="Unlike Blog"
                      // Button styling matching the logic we finalized: border + no focus ring
                      className="p-1 rounded-full border border-border hover:bg-destructive/10 transition-colors outline-none"
                    >
                      <Heart
                        size={20}
                        // FILL: Always filled with primary color since these are liked blogs
                        fill="hsl(var(--primary))" 
                        // STROKE/COLOR: Always white for high visibility
                        color="hsl(0 0% 100%)"
                        // Hover: Change fill to red/destructive to indicate "unliking"
                        className="transition-colors hover:fill-destructive hover:text-destructive cursor-pointer"
                      />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
      <div className="h-20"></div> {/* Bottom padding */}
    </div>
  );
};

export default LikedBlogs;