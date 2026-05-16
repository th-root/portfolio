import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

function Projects() {
  return (
    <>
      <Navbar />

      <section className="p-10">

        <h1 className="text-5xl font-bold mb-10">
          Projetos
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              github={project.github}
              deploy={project.deploy}
            />
          ))}

        </div>
      </section>
    </>
  );
}

export default Projects;