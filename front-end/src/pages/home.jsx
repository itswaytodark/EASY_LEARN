import Background from "../components/ui/background";
import { GraduationCap, Users, BookOpen, Clock, MessageCircle ,Heart   } from "lucide-react";
import Courses_btn from "@/components/MyButton/Courses";
import { useSelector } from "react-redux";

function Home() {

  const userName = useSelector((state) => state.isAuth.user?.name);

  return (
    <>
      <div className="relative w-full min-h-screen overflow-hidden">
        <Background />


        <div className="absolute inset-0 top-28 z-10 flex flex-col items-center text-center px-7">

          <h1 className="text-6xl text-purple-400 font-bold">
            Hey, {userName ? userName.toUpperCase() : "superstar !"}
          </h1>

          <p className="text-white font-extralight mt-4 text-[20px]">
            Start your blog, share your{" "}
            <span className="bg-gradient-to-r from-pink-200 via-pink-500 to-red-300 bg-clip-text text-transparent font-semibold">STORY</span>
          </p>
          
          <p className="text-white font-light text-[20px] mb-6">AI BlogBot.</p>


          <Courses_btn/>


          <div className="mt-20 flex gap-7 justify-center items-center text-white">
            <div className="flex flex-col items-center">
              <BookOpen className="w-10 h-10 mb-2 text-emerald-400" />
              <p className="text-2xl font-bold">15,000+</p>
              <p className="text-sm text-gray-300">Blogs Published</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-10 h-10 mb-2 text-cyan-400" />
              <p className="text-2xl font-bold">10,000+</p>
              <p className="text-sm text-gray-300">Writers & Readers</p>
            </div>
            <div className="flex flex-col items-center">
              <Heart  className="w-10 h-10 mb-2 text-indigo-400" />
              <p className="text-2xl font-bold">500,000+</p>
              <p className="text-sm text-gray-300">Stories Shared</p>
            </div>
          </div>


          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl text-white">

            <div className="p-5 bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/10">
              
              <BookOpen className="w-8 h-8 text-emerald-300 mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-emerald-300">Inspiring Content</h3>
              <p className="text-sm text-gray-300">
                Discover and share insightful blogs crafted by a passionate community.
              </p>
            </div>

            <div className="p-5 bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/10">
              
              <Clock className="w-8 h-8 text-cyan-300 mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">Flexible Posting</h3>
              <p className="text-sm text-gray-300">
                Write and publish blogs at your own pace, from anywhere at any time.
              </p>
            </div>

            <div className="p-5 bg-white/10 backdrop-blur-md rounded-xl shadow-md border border-white/10">
              
              <MessageCircle  className="w-8 h-8 text-indigo-300 mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-indigo-300">Community Support</h3>
              <p className="text-sm text-gray-300">
                Engage with readers through comments, discussions, and collaborations.
              </p>
            </div>

          </div>


          <div className="flex items-center justify-start px-7 mt-14">

            <h1 className="text-orange-200/80 font-bold sm:text-9xl text-4xl text-start border-l-8 border-violet-600 pl-6">
              SHARE  <br /> YOUR STORY 🌱
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
