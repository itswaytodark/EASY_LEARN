import Background from "@/components/ui/background";

const Ai_teacher_page = () => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-full -z-10">
                <Background />
            </div>

            {/* Main content overlays on top */}
            <div className="relative z-10 pt-32 flex justify-center">
                <h1 className="text-5xl font-bold text-white">AI TEACHER</h1>
            </div>
        </div>
        
    );
};

export default Ai_teacher_page;
