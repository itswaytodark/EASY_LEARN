import { useState, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ImagePlus, Loader2, XCircle } from "lucide-react"; // Added XCircle for image removal
import Background from "@/components/ui/background";
import { useNavigate } from "react-router-dom";

const CreateBlogForm = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null); // Ref for file input

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    details: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null); // State for image preview
  const [isSubmitting, setIsSubmitting] = useState(false);

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file)); // Create URL for preview
    } else {
      setFormData((prev) => ({ ...prev, image: null }));
      setImagePreview(null);
    }
  };

  const handleRemoveImage = () => {
    setFormData((prev) => ({ ...prev, image: null }));
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the file input
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("details", formData.details);
    if (formData.image) data.append("image", formData.image);

    setIsSubmitting(true);

    try {
      const res = await axios.post(`${baseUrl}/api/blogs/blog-create`, data, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success(res.data.message || "Blog created successfully!");
      navigate('/blogs');
    } catch (err) {
      toast.error(err.response?.data?.message || "Blog creation failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Reusable input styling
  const InputStyle = "w-full px-4 py-3 rounded-lg bg-input/70 text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200 shadow-sm";
  const LabelStyle = "block text-sm font-medium text-secondary-foreground mb-2";

  return (
    <div className="relative mt-5 w-full min-h-screen overflow-hidden flex justify-center items-center py-16 px-4 bg-background text-foreground">
      
      {/* Background with z-index control */}
      <div className="fixed inset-0 -z-10"> {/* Changed to fixed to ensure it fills the viewport always */}
        <Background />
      </div>

      {/* Main Form Panel - Larger, more prominent, with subtle animation */}
      <div className="w-full max-w-4xl bg-card/70 backdrop-blur-xl border border-border rounded-2xl shadow-2xl p-8 md:p-12 space-y-8 animate-fade-in-up">
        
        {/* Header with gradient effect */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center bg-clip-text text-white mb-8 tracking-tight">
          Craft Your Blog Post
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Section 1: Title & Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6 border-b border-border/50">
            <div>
              <label htmlFor="title" className={LabelStyle}>Blog Title <span className="text-red-500">*</span></label>
              <input
                id="title"
                name="title"
                placeholder="A catchy title for your story"
                className={InputStyle}
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="description" className={LabelStyle}>Short Summary <span className="text-red-500">*</span></label>
              <input
                id="description"
                name="description"
                placeholder="A brief, engaging summary (for card previews)"
                className={InputStyle}
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Section 2: Main Content */}
          <div className="pb-6 border-b border-border/50">
            <label htmlFor="details" className={LabelStyle}>Full Blog Content <span className="text-red-500">*</span></label>
            <textarea
              id="details"
              name="details"
              rows="10"
              placeholder="Dive deep into your topic here..."
              className={InputStyle + " resize-y"}
              value={formData.details}
              onChange={handleChange}
              required
            />
          </div>

          {/* Section 3: Cover Image Upload */}
          <div className="pb-6 border-b border-border/50">
            <label className={LabelStyle}>Cover Image</label>
            <div 
              className="relative flex flex-col items-center justify-center p-6 border-2 border-dashed border-border rounded-xl 
                         bg-input/50 hover:bg-input/70 transition-colors duration-200 cursor-pointer group"
              onClick={() => fileInputRef.current.click()} // Click label to open file dialog
            >
              {!imagePreview ? (
                <>
                  <ImagePlus className="w-12 h-12 text-accent group-hover:scale-110 transition-transform duration-200" />
                  <p className="mt-3 text-secondary-foreground text-center">
                    Drag & drop an image here, or <span className="text-accent underline">click to browse</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">PNG, JPG, GIF up to 5MB</p>
                </>
              ) : (
                <div className="relative w-full h-48 rounded-lg overflow-hidden border border-border">
                  <img src={imagePreview} alt="Image Preview" className="w-full h-full object-cover" />
                  <button 
                    type="button" 
                    onClick={(e) => { e.stopPropagation(); handleRemoveImage(); }} 
                    className="absolute top-2 right-2 p-1 bg-destructive/80 rounded-full text-destructive-foreground hover:bg-destructive transition-colors"
                    aria-label="Remove image"
                  >
                    <XCircle size={20} />
                  </button>
                </div>
              )}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden" // Hide the default file input
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-primary hover:bg-primary/90 transition-all duration-300 rounded-lg text-primary-foreground font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-primary-glow animate-pulse-on-hover"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Publishing Your Vision...
              </>
            ) : (
              "Publish Blog Post"
            )}
          </button>
        </form>
      </div>

      {/* Custom Animations (Optional: add to your global CSS or here) */}
      <style jsx global>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }

        @keyframes pulse-on-hover {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.01); }
        }
        .animate-pulse-on-hover:hover {
            animation: pulse-on-hover 1.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default CreateBlogForm;