import { Search } from "lucide-react";
function Header({ searchTerm, setSearchTerm, suggestions, onUserSelect }) {
  return (
    <div className="relative w-full">
      <picture>
        {/* Desktop (>=1024px) */}
        <source
          media="(min-width: 1024px)"
          srcSet="images/hero-image-github-profile.jpg"
        />

        {/* Mobile (default, <768px) */}
        <img
          src="images/hero-image-github-profile-sm.jpg"
          alt="background image for header"
          className="w-full object-cover h-[200px]"
        />
      </picture>
      <div className="absolute inset-0 flex items-center justify-center h-[130px] z-100">
        <div className="flex items-center gap-2 bg-[#20293A] rounded-2xl px-4 py-3 w-[400px] shadow-lg">
          <Search className="text-white" />
          <input
            type="text"
            placeholder="Search GitHub username"
            className="text-[18px] bg-transparent outline-none text-white w-full placeholder-gray-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {suggestions.length > 0 && (
          <div className="absolute top-[100px] left-0 right-0 flex justify-center">
            <ul className="w-[400px] bg-[#111729] rounded-lg mt-1 shadow-lg max-h-80 overflow-y-auto">
              {suggestions.map((user) => (
                <li
                  key={user.id}
                  className="flex items-center px-4 py-3 cursor-pointer hover:bg-[#20293A] transition-colors z-10"
                  onClick={() => onUserSelect(user.login)}
                >
                  <img
                    src={user.avatar_url}
                    alt={user.login}
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <span className="text-white">{user.login}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
