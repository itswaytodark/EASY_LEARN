import { Card, CardContent } from "../components/ui/card";
import Background from "../components/ui/background";
import { MoveDown } from 'lucide-react';
import { useNavigate,  } from "react-router-dom";
const courses = [
  {
    title: "React for Beginners",
    description: "Master the fundamentals of React with hands-on examples.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    price: "799",
    id:'reactDetailPage'
  },
  {
    title: "Full Stack Web Dev",
    description: "Build real-world apps with MERN stack from scratch.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    price: "1499",
    id:'FullStackWebDevDetailPage'

  },
  {
    title: "AI with Python",
    description: "Learn machine learning and AI using Python and real projects.",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80",
    price: "1199",
    id:'AIwithPythonDetailPage'

  },
];






const Courses_page = () => {

  
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <Background />
      </div>

      <div className="w-full max-w-6xl mx-auto mt-30 px-4 py-4">

    <div className="flex items-baseline gap-1">
        <h1 className="text-4xl font-bold mb-10 ">
          Explore Our Courses
        </h1>
        <MoveDown strokeWidth={3}/>
    </div>
         

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
        <Card
        onClick={() => {navigate(`/Courses/${course.id}`)}}
        key={index}
        className="bg-white/5 border border-white/10 backdrop-blur-xl text-white shadow-md flex flex-col"
        >
        <img
            src={course.image}
            alt={course.title}
            className="w-full h-40 object-cover "
        />
        
        <CardContent className="p-4 flex flex-col justify-between grow">
            <div>
            <h3 className="text-lg font-semibold">{course.title}</h3>
            <p className="text-sm text-white/70 line-clamp-3">{course.description}</p>
            </div>

            <div className="flex items-center justify-between pt-4 mt-auto">
            <span className="font-medium text-2xl text-emerald-500 ">₹{course.price}</span>
            </div>
        </CardContent>
        </Card>

          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses_page;
