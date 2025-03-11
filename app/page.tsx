import About from "./Ui/about"
import Experience from "./Ui/experience";
import Header from "./Ui/header";
import Projects from "./Ui/projects";


export default function Home() {
    return (
        <>
            <Header />
            <main className="pb-24 flex flex-col gap-24 w-[50%]">
                <About />
                <Experience />
                <Projects />
                <footer className="text-center text-white/40 text-xs">
                    Hecho con 😎 por Lautaro Miceli
                </footer>
            </main>
        </>
    );
}
