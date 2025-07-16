import { useParams } from "react-router-dom";
import Background from "../components/ui/background"; 

const CourseDetail = () => {
  const { id } = useParams(); 

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <Background />
      </div>

      <div className="w-full mx-auto mt-25 text-4xl font-bold ">
         {id}
      </div>
    </div>
  );
};

export default CourseDetail;
