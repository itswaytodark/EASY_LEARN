import Background from "../components/ui/background";

function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Background />
      <div className="absolute inset-0 flex top-40 px-7 items-center z-10 flex-col ">
        <h1 className="text-6xl font-marcellus text-emerald-400">WELCOME ARYAN</h1>
        <p className="text-emerald-100 font-extralight my-1 text-[20px]">Learn new skills effortlessly with your personal</p>
        <p className="text-emerald-100 font-light text-[20px]">AI teacher. 😏</p>

      </div>
    </div>
  );
}

export default Home;
