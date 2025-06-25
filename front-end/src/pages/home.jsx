import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Background from "../components/ui/background";
import { GraduationCap, Users, Briefcase, Laptop, Clock, } from "lucide-react";

function Home() {
  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
        <Background />


        <div className="absolute inset-0 top-28 z-10 flex flex-col items-center text-center px-7">

          <h1 className="text-6xl font-marcellus text-emerald-400 font ">WELCOME ARYAN</h1>
          <p className="text-white font-extralight my-1 text-[20px]">
            Learn new skills effortlessly with your personal
          </p>
          <p className="text-white font-light text-[20px] mb-6">AI teacher 😏</p>


          <Link to="/Courses">
            <Button
              className="relative px-8 py-4 text-white text-lg font-semibold bg-white/15 backdrop-blur-md border 
            border-white/20 rounded-xl transition-all duration-300 ease-in-out hover:bg-white/25 hover:shadow-lg 
            hover:scale-[1.02] active:scale-[0.98]"
            >
              Explore Courses
            </Button>


          </Link>


          <div className="mt-20 flex gap-8 justify-center items-center text-white">
            <div className="flex flex-col items-center">
              <GraduationCap className="w-10 h-10 mb-2 text-emerald-400" />
              <p className="text-2xl font-bold">12,000+</p>
              <p className="text-sm text-gray-300">Students Taught</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 mb-2 text-cyan-400" />
              <p className="text-2xl font-bold">85+</p>
              <p className="text-sm text-gray-300">Expert Instructors</p>
            </div>
            <div className="flex flex-col items-center">
              <Briefcase className="w-10 h-10 mb-2 text-indigo-400" />
              <p className="text-2xl font-bold">1,200+</p>
              <p className="text-sm text-gray-300">Jobs Secured</p>
            </div>
          </div>


          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl text-white">

            <div className="p-5 bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/10">
              <Laptop className="w-8 h-8 text-emerald-300 mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-emerald-300">Hands-on Learning</h3>
              <p className="text-sm text-gray-300">
                Practice with real-world projects guided by expert mentors and AI support.
              </p>
            </div>


            <div className="p-5 bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/10">
              <Clock className="w-8 h-8 text-cyan-300 mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">Flexible Schedule</h3>
              <p className="text-sm text-gray-300">
                Learn anytime, anywhere with personalized progress tracking and feedback.
              </p>
            </div>


            <div className="p-5 bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/10">
              <Briefcase className="w-8 h-8 text-indigo-300 mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-indigo-300">Career Support</h3>
              <p className="text-sm text-gray-300">
                From interview prep to resume building, we help you land your dream job.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start px-7 mt-14">

            <h1 className="text-orange-200/80 font-bold sm:text-9xl text-4xl text-start border-l-8 border-violet-600 pl-6">
              WE DELIVER WHAT <br /> WE OFFER 🍑
            </h1>

          </div>

          <div className=" mt-14 w-full flex justify-center">
              <iframe width="1000" height="500" src="https://www.youtube.com/embed/fo6hLNGtE-Q?si=0tmlLFxlxxEIPUI2" title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
               referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>


        </div>
      </div>


    







    </>
  );
}

export default Home;
