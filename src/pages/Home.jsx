import { useState, useEffect } from "react";
import Header from "../components/Header";
import ProjectCards from "../components/ProjectCards";
import axios from "axios";
import Footer from "../components/Footer";

function Home() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
      return;
    }

    const debouncerTimer = setTimeout(() => {
      axios
        .get(`https://api.github.com/search/users?q=${searchTerm}&per_page=6`)
        .then((response) => {
          setSuggestions(response.data.items);
        })
        .catch((error) => {
          console.error("Error fetching suggestions:", error);
        });
    }, 300);
    return () => clearTimeout(debouncerTimer);
  }, [searchTerm]);

  const handleUserSelect = async (username) => {
    try {
      const [userResponse, reposResponse] = await Promise.all([
        axios.get(`https://api.github.com/users/${username}`),
        axios.get(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=8`
        ),
      ]);
      setSelectedUser(userResponse.data);
      setRepos(reposResponse.data);
      setSearchTerm("");
      setSuggestions([]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    handleUserSelect("jamaal-abdirahem");
  }, []);

  return (
    <>
      <div className="flex flex-col min-h-screen w-full bg-[#20293A] overflow-y-auto font-BeVietnam">
        {/* Header takes only its natural height */}
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          suggestions={suggestions}
          onUserSelect={handleUserSelect}
        />

        {/* Home content fills the remaining space */}
        {selectedUser && (
          <div className="flex flex-col text-white">
            {/* profile description */}
            <div className="flex items-center ml-10 gap-6">
              <div className="flex flex-col">
                <div className="px-4 py-4 rounded-2xl bg-[#111729] text-white -mt-8 w-fit z-10">
                  <img
                    src={selectedUser.avatar_url}
                    alt={selectedUser.login}
                    className="w-19 h-19 rounded-full border-2 border-green-600"
                  />
                </div>
                <div className="">
                  <h3 className="text-xl font-semibold">{selectedUser.name}</h3>
                  <p className="text-gray-300">{selectedUser.bio}</p>
                </div>
              </div>

              {/* followers, following, location */}
              <div className="flex flex-wrap items-center gap-5">
                <div className="flex  items-center bg-[#111729] px-5 py-3 rounded-md">
                  <p className="text-gray-400 text-sm">Followers | </p>
                  <span className="text-white font-semibold ml-2 ">
                    {" "}
                    {selectedUser.followers}
                  </span>
                </div>

                <div className="flex  items-center bg-[#111729] px-5 py-3 rounded-md">
                  <p className="text-gray-400 text-sm">Following | </p>
                  <span className="text-white font-semibold ml-2 ">
                    {selectedUser.following}
                  </span>
                </div>

                <div className="flex  items-center bg-[#111729] px-5 py-3 rounded-md">
                  <p className="text-gray-400 text-sm">Location | </p>
                  <span className="text-white font-semibold ml-2 ">
                    {selectedUser.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        <ProjectCards repos={repos} />
        <Footer />
      </div>
    </>
  );
}

export default Home;
