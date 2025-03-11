import About from "./Ui/about"
import Experience from "./Ui/experience";
import Header from "./Ui/header";
import Projects from "./Ui/projects";
import Stack from "./Ui/stack";


export default function Home() {
    return (
        <>
            <Header />
            <main className="pb-24 flex flex-col gap-24 w-[50%] max-sm:w-full max-sm:pb-0">
                <About />
                <Stack />
                <Experience />
                <Projects />
                <footer className="text-center text-white/40 text-xs">
                    Hecho con 😎 por Lautaro Miceli
                </footer>
            </main>
        </>
    );
}
