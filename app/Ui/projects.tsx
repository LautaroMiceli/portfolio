"use client"

import Image from "next/image"
import projectsData from "../utils/projects"
import { MouseEventHandler } from "react"
import LinkSVG from "../lib/svg/link"

export default function Projects() {

    const handleClick = (e: any, url: string) => {
        e.preventDefault()
        window.open(url, "_blank")
    }

    return (
        <section className="contenedor" id="projects">
            {
                projectsData.map((project, index) => (
                    <div className="elemento cursor-pointer" key={index} onClick={(e) => handleClick(e, project.link)}>
                        <Image className="h-fit" src={project.image} width={200} height={200} alt="Proyecto de Slack clon" />
                        <div className="flex flex-col gap-2 w-[50%]">
                            <div className="flex gap-2">
                                <h3 className="text-xl">
                                    {project.title}
                                </h3>
                                <LinkSVG className="link"/>
                            </div>
                            {project.description.map((description, index) => {
                                return (
                                    <p key={index} className="text-sm text-white/80">
                                        {description}
                                    </p>
                                )
                            })}
                            <div className="mt-5 flex flex-wrap gap-2">
                                {
                                    project.technologies.map((technology, index) => {
                                        return (
                                            <span key={index} className="p-2 bg-white/15 rounded-md text-xs">
                                                {technology}
                                            </span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
                )
            }
        </section>
    )
}