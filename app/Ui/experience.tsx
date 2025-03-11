import experienceData from "../utils/experience"


export default function Experience() {
    return (
        <section className="contenedor" id="experience">
            {
                experienceData.map((experience, index) => (
                    <div className="elemento" key={index}>
                        <span className="text-nowrap py-1 w-[17%] text-xs opacity-70 max-sm:hidden">
                            {experience.employmentPeriod}
                        </span>
                        <div className="flex justify-between text-sm gap-4 w-[83%] max-sm:w-full">
                            <div className="flex flex-col gap-2 ">
                                <h3 className="text-3xl">
                                    {experience.position}
                                </h3>
                                <h2 className="text-lg opacity-80">
                                    {experience.company}
                                </h2>
                                <span className="text-nowrap py-1 w-[17%] text-xs opacity-70 hidden max-sm:block">
                                    {experience.employmentPeriod}
                                </span>
                                <div>
                                    {experience.description.map((description, index) => (
                                        <p key={index} className="opacity-70">
                                            {description}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </section>
    )
}