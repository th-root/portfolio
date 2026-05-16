function ProjectCard({ title, description, github, deploy }) {
  return (
    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
      
      <h2 className="text-2xl font-bold mb-4">
        {title}
      </h2>

      <p className="text-slate-300 mb-6">
        {description}
      </p>

      <div className="flex gap-4">

        <a
          href={github}
          target="_blank"
          className="bg-white text-black px-4 py-2 rounded-lg"
        >
          GitHub
        </a>

        <a
          href={deploy}
          target="_blank"
          className="border border-white px-4 py-2 rounded-lg"
        >
          Deploy
        </a>

      </div>
    </div>
  );
}

export default ProjectCard;