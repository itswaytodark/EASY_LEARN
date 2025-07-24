import blogModel from '../Models/blog.models.js'; 


export const createBlog = async (req, res) => {
  try {
    const { image, title, description, link, details } = req.body;


    const newBlog = new blogModel({ image, title, description, link, details });

    await newBlog.save();

    res.status(201).json({ message: "Blog created successfully", blog: newBlog });

  } catch (error) {
      return res.status(400).json({ message: "Title must be unique" });
  }
};


export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await blogModel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json({ message: "Blog deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Prevent updating title to duplicate
    if (updates.title) {
      const existing = await blogModel.findOne({ title: updates.title, _id: { $ne: id } });

      if (existing) {
        return res.status(400).json({ message: "Title must be unique" });
      }
    }

    const updatedBlog = await blogModel.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

    if (!updatedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json({ message: "Blog updated successfully", blog: updatedBlog });
    
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
