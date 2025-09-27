import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { ImagePlus, Loader2 } from "lucide-react";
import Background from "@/components/ui/background";
import { useNavigate } from "react-router-dom";

const CreateBlogForm = () => {

  navigat = useNavigate()

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    details: "",
    image: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const baseUrl = import.meta.env.VITE_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
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
      const res = await axios.post(`${baseUrl}/api/blogs/blog-create`, data, {withCredentials: true,headers: { "Content-Type": "multipart/form-data" },});
      toast.success(res.data.message);
      navigat('/blogs')
      console.log(res);
      
    } catch (err) {
      toast.error(err.response?.data?.message || "Blog creation failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden flex justify-center items-center px-4 py-10">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Background />
      </div>

      {/* Card */}
      <div className="w-full max-w-2xl bg-black/90 border border-white/10 rounded-xl shadow-2xl p-8 text-white space-y-6">
        <h2 className="text-3xl font-bold text-center">Share Your Story</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm font-medium">Title</label>
            <input
              name="title"
              placeholder="Your blog title"
              className="w-full mt-1 px-4 py-2 rounded-md bg-neutral-900 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Short Description</label>
            <input
              name="description"
              placeholder="One-liner summary"
              className="w-full mt-1 px-4 py-2 rounded-md bg-neutral-900 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Details</label>
            <textarea
              name="details"
              rows="6"
              placeholder="Full content of your blog..."
              className="w-full mt-1 px-4 py-2 rounded-md bg-neutral-900 text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center gap-2 text-sm">
            <ImagePlus className="w-5 h-5 text-gray-400" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="text-gray-300 file:bg-indigo-600 file:text-white file:rounded-md file:px-4 file:py-1 file:border-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 rounded-md text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Uploading...
              </>
            ) : (
              "Publish Blog"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogForm;
