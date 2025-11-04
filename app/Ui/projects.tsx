import projectsData from "../utils/projects"
import LinkSVG from "../lib/svg/link"

export default function Projects() {
    return (
        <section className="contenedor" id="projects">
            {projectsData.map((project, index) => (
                <a
                    href={project.link}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="elemento max-sm:flex-col-reverse max-sm:w-full">
                        <img
                            className="h-fit max-sm:w-full"
                            src={project.image}
                            alt={project.alt}

                            loading="lazy"
                        />
                        <div className="flex flex-col gap-2 w-[50%] max-sm:w-full">
                            <div className="flex gap-2 items-center">
                                <h3 className="text-xl">{project.title}</h3>
                                <LinkSVG className="link" />
                            </div>

                            {project.description.map((description, i) => (
                                <p key={i} className="text-sm text-white/80">
                                    {description}
                                </p>
                            ))}

                            <div className="mt-5 flex flex-wrap gap-2 max-sm:gap-1">
                                {project.technologies.map((technology, i) => (
                                    <span key={i} className="p-2 bg-white/15 rounded-md text-xs">
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </section>
    )
}
