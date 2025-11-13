import Background from "../components/ui/background";
import {
    LucidePenTool,
    LucideUsers,
    LucideMessageCircle,
    LucideSparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function About_us_page() {
    const navigate = useNavigate();

    const features = [
        {
            icon: <LucidePenTool className="w-9 h-9 text-indigo-400" />,
            title: "Write & Upload",
            desc: "Empower writers to create and share their blogs with the world on our easy-to-use platform.",
        },
        {
            icon: <LucideUsers className="w-9 h-9 text-emerald-400" />,
            title: "Join the Community",
            desc: "Connect with thousands of bloggers and readers, discover fresh perspectives and inspiring stories.",
        },
        {
            icon: <LucideMessageCircle className="w-9 h-9 text-pink-400" />,
            title: "AI Blog Assistant",
            desc: "Get writing help anytime — our AI assistant supports you to craft engaging and polished blog posts.",
        },
    ];

    return (
        // Base container is scrollable and relative
        <div className="relative min-h-screen w-full overflow-hidden bg-background text-foreground">
            
            {/* FIX: Call Background directly. It contains 'fixed inset-0 z-0' internally. */}
            <Background />

            {/* Main Content: Ensure it is 'relative z-10' to float above the fixed background. */}
            <div className="w-full max-w-6xl mx-auto px-4 py-16 pt-28 md:pt-36 z-10 relative">
                
                {/* --- Header Section --- */}
                <header className="text-center mb-16 md:mb-24">
                    <LucideSparkles className="w-12 h-12 mx-auto mb-4 text-primary animate-pulse" />
                    
                    {/* Main Title using primary color/foreground and modern sizing */}
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-4 drop-shadow-lg">
                        Discover, Write & Connect
                    </h1>
                    
                    {/* Subtext using muted-foreground */}
                    <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto font-light">
                        At <span className="text-primary font-semibold">Your Blog Hub</span>, everyone can share their voice — 
                        and get inspired by our vibrant blogging community and powerful AI assistant.
                    </p>
                </header>
                
                {/* --- Features Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((item, index) => (
                        <div
                            onClick={() => navigate("/blogs")}
                            key={index}
                            // Increased opacity for better readability against the Aurora
                            className="bg-card/70 border border-border backdrop-blur-sm rounded-2xl p-8 text-center 
                                        hover:bg-card/90 transition duration-300 transform hover:scale-[1.02] cursor-pointer shadow-xl"
                            role="button"  
                        >
                            {/* Icon container with background to match the style of Home.jsx */}
                            <div className="mb-4 flex justify-center">
                                <div className="p-3 rounded-full bg-background/50 border border-border">
                                    {item.icon}
                                </div>
                            </div>
                            
                            {/* Title using primary color for emphasis */}
                            <h3 className="text-2xl font-bold mb-2 text-primary">{item.title}</h3>
                            
                            {/* Description using secondary text color */}
                            <p className="text-base text-secondary-foreground font-light">{item.desc}</p>
                        </div>
                    ))}
                </div>
                
                {/* --- Call to Action --- */}
                <div className="mt-20 text-center p-10 bg-card/70 backdrop-blur-sm rounded-2xl border border-primary/20 shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
                        Ready to share your <span className="text-primary">story</span>?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                        Join our growing network of writers and start blogging today!
                    </p>
                    <button
                        onClick={() => navigate("/signup")}
                        className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full 
                                    shadow-lg hover:bg-primary/90 transition duration-300 transform hover:scale-105"
                    >
                        Start Writing Now
                    </button>
                </div>
                
            </div>
            <div className="h-20"></div> {/* Bottom padding */}
        </div>
    );
}

export default About_us_page;