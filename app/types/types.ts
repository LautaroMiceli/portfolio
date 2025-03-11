type experience = {
    employmentPeriod: string,
    company: string,
    position: string,
    description: string[]
}

type project = {
    title: string,
    description: string[],
    image: string,
    link: string,
    technologies: string[],
    alt: string
}

export type { experience, project }