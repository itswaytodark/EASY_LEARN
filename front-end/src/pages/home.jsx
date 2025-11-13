import Background from "../components/ui/background";
// Note: Removed GraduationCap as it wasn't used
import { Users, BookOpen, Clock, MessageCircle, Heart } from "lucide-react"; 
import Courses_btn from "@/components/MyButton/Courses";
import { useSelector } from "react-redux";

function Home() {
  const userName = useSelector((state) => state.isAuth.user?.name);

  return (
    <>
      {/* Base container ensures full width and minimum screen height */}
      <div className="relative w-full min-h-screen bg-background text-foreground">
        
        {/* Background is expected to be fixed/absolute and z-0/low z-index */}
        <Background />

        {/* Main Content Container: Relative and high z-index for visibility/scrollability */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-8 pt-28 pb-20"> 
          
          {/* --- Hero Section --- */}
          {/* Use primary color for main heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-primary drop-shadow-lg">
            Hey, {userName ? userName.toUpperCase() : "SUPERSTAR!"}
          </h1>

          {/* Use secondary-foreground for contrasting light text */}
          <p className="text-xl md:text-2xl font-light mt-4 mb-2 max-w-2xl text-secondary-foreground">
            Start your blog, share your Story
           
          </p>

          <Courses_btn/>

          {/* --- Stats Section --- */}
          <div className="mt-20 flex flex-col sm:flex-row gap-7 justify-center items-center text-foreground max-w-4xl w-full">
            
            {/* Stat 1: Blogs Published (Card/Stat styling) */}
            <div className="flex flex-col items-center p-6 bg-card/50 rounded-xl shadow-2xl transition duration-300 hover:scale-[1.03] border-t-4 border-emerald-400">
              <BookOpen className="w-10 h-10 mb-2 text-emerald-300" />
              <p className="text-3xl font-black text-foreground">15,000+</p>
              <p className="text-sm font-medium text-secondary-foreground">Blogs Published</p>
            </div>
            
            {/* Stat 2: Writers & Readers */}
            <div className="flex flex-col items-center p-6 bg-card/50 rounded-xl shadow-2xl transition duration-300 hover:scale-[1.03] border-t-4 border-cyan-400">
              <Users className="w-10 h-10 mb-2 text-cyan-300" />
              <p className="text-3xl font-black text-foreground">10,000+</p>
              <p className="text-sm font-medium text-secondary-foreground">Writers & Readers</p>
            </div>
            
            {/* Stat 3: Stories Shared */}
            <div className="flex flex-col items-center p-6 bg-card/50 rounded-xl shadow-2xl transition duration-300 hover:scale-[1.03] border-t-4 border-indigo-400">
              <Heart className="w-10 h-10 mb-2 text-indigo-300" />
              <p className="text-3xl font-black text-foreground">500,000+</p>
              <p className="text-sm font-medium text-secondary-foreground">Stories Shared</p>
            </div>
          </div>


          {/* --- Features Section --- */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">

            {/* Feature Card 1 */}
            <div className="p-5 bg-card/50 backdrop-blur-sm rounded-xl shadow-md border border-border transition duration-300 hover:bg-card hover:shadow-primary-glow">
              <BookOpen className="w-8 h-8 text-emerald-300 mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-primary">Inspiring Content</h3>
              <p className="text-sm text-muted-foreground">
                Discover and share insightful blogs crafted by a passionate community.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="p-5 bg-card/50 backdrop-blur-sm rounded-xl shadow-md border border-border transition duration-300 hover:bg-card hover:shadow-primary-glow">
              <Clock className="w-8 h-8 text-cyan-300 mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-primary">Flexible Posting</h3>
              <p className="text-sm text-muted-foreground">
                Write and publish blogs at your own pace, from anywhere at any time.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="p-5 bg-card/50 backdrop-blur-sm rounded-xl shadow-md border border-border transition duration-300 hover:bg-card hover:shadow-primary-glow">
              <MessageCircle className="w-8 h-8 text-indigo-300 mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-primary">Community Support</h3>
              <p className="text-sm text-muted-foreground">
                Engage with readers through comments, discussions, and collaborations.
              </p>
            </div>
          </div>


          {/* --- CTA & Video --- */}
          <div className="w-full mt-14 px-4">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-violet-500 font-black text-6xl md:text-9xl text-start border-l-8 border-primary pl-6 leading-none tracking-tighter">
              SHARE <br /> YOUR STORY 🌱
            </h1>
          </div>

          <div className="mt-14 w-full flex justify-center max-w-4xl">
              <iframe 
                width="100%" 
                height="500" 
                src="https://www.youtube.com/embed/fo6hLNGtE-Q?si=0tmlLFxlxxEIPUI2" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="rounded-xl shadow-2xl border-2 border-primary/50"
              ></iframe>
          </div>

          <div className="h-20"></div> {/* Bottom padding */}
        </div>
      </div>
    </>
  );
}

export default Home;