"use client";

import { useState, useEffect, useRef } from "react";

export default function Home() {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const section1Ref = useRef<HTMLDivElement>(null);
    const section2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 } // Se activa cuando el 60% de la sección es visible
        );

        if (section1Ref.current) observer.observe(section1Ref.current);
        if (section2Ref.current) observer.observe(section2Ref.current);

        return () => {
            if (section1Ref.current) observer.unobserve(section1Ref.current);
            if (section2Ref.current) observer.unobserve(section2Ref.current);
        };
    }, []);

    return (
        <div>
            {/* Navbar */}
            <nav className="fixed top-0 w-full bg-white shadow-md py-4">
                <ul className="flex space-x-4 p-4">
                    <li>
                        <a
                            href="#section1"
                            className={`${activeSection === "section1" ? "text-black font-bold" : "text-gray-500"
                                }`}
                        >
                            Sección 1
                        </a>
                    </li>
                    <li>
                        <a
                            href="#section2"
                            className={`${activeSection === "section2" ? "text-black font-bold" : "text-gray-500"
                                }`}
                        >
                            Sección 2
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Secciones */}
            <section ref={section1Ref} id="section1" className="h-screen bg-red-200 flex items-center justify-center">
                <h1>Sección 1</h1>
            </section>

            <section ref={section2Ref} id="section2" className="h-screen bg-green-200 flex items-center justify-center">
                <h1>Sección 2</h1>
            </section>

            <section className="h-screen bg-blue-200 flex items-center justify-center">
                <h1>Sección Extra</h1>
            </section>
        </div>
    );
}
