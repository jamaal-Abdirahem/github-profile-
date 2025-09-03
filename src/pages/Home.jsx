import { Github, Search } from "lucide-react";
import Header from "../components/Header";

function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-full bg-[#20293A] overflow-y-auto font-BeVietnam">
        {/* Header takes only its natural height */}
        <Header />

        {/* Home content fills the remaining space */}
        <div className="flex flex-col text-white">
          {/* profile description */}
          <div className="flex items-center ml-10 gap-6">
            <div className="flex flex-col">
              <div className="px-4 py-4 rounded-2xl bg-[#111729] text-white -mt-8 w-fit z-10">
                <Github className="w-10 h-10" />
              </div>
              <div className="">
                <h3 className="text-xl font-semibold">GitHub</h3>
                <p className="text-gray-300">How people build software</p>
              </div>
            </div>

            {/* followers, following, location */}
            <div className="flex flex-wrap items-center gap-5">
              <div className="flex  items-center bg-[#111729] px-5 py-3 rounded-md">
                <p className="text-gray-400 text-sm">Followers | </p>
                <span className="text-white font-semibold ml-2 "> 58820</span>
              </div>

              <div className="flex  items-center bg-[#111729] px-5 py-3 rounded-md">
                <p className="text-gray-400 text-sm">Following | </p>
                <span className="text-white font-semibold ml-2 ">0</span>
              </div>

              <div className="flex  items-center bg-[#111729] px-5 py-3 rounded-md">
                <p className="text-gray-400 text-sm">Location | </p>
                <span className="text-white font-semibold ml-2 ">
                  San Francisco, CA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
