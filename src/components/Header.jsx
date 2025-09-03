import { Search } from "lucide-react";
function Header() {
  return (
    <div className="relative w-full ">
      <img
        src="images/hero-image-github-profile.jpg"
        alt="background image for header"
        className="w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center h-[130px]">
        <div className="flex items-center gap-2 bg-[#20293A] rounded-2xl px-4 py-3 w-[400px] shadow-lg">
          <Search className="text-white" />
          <input
            type="text"
            placeholder="Search GitHub username"
            className="text-[18px] bg-transparent outline-none text-white w-full placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
