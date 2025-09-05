import { GitBranch, Star } from "lucide-react";
function ProjectCards({ repos }) {
  return (
    // project cards
    <div className=" m-7 grid grid-cols-1 md:grid-cols-2 gap-5 font-BeVietnam">
      {repos.map((repo) => (
        <div
          key={repo.id}
          className="flex flex-col bg-gradient-to-r from-[#111729] to-[#1D1B48] px-4 py-7 rounded-2xl shadow-md gap-3"
        >
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <h2 className="text-2xl text-white hover:underline whitespace-pre-wrap break-words">
              {repo.name}
            </h2>
          </a>
          <p className="text-gray-400">
            {repo.description || "No description available."}
          </p>
          <div className="flex gap-6 text-gray-400">
            {repo.language && <span className="text-xs">{repo.language}</span>}
            <div className="flex gap-2">
              <GitBranch />
              <span>{repo.forks_count.toLocaleString()}</span>
            </div>
            <div className="flex gap-2">
              <Star />
              <span>{repo.stargazers_count.toLocaleString()}</span>
            </div>
            <span>
              updated {new Date(repo.updated_at).toLocaleDateString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCards;
