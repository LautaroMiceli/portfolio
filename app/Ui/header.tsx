
import GithubSVG from "../lib/svg/github";
import LinkedinSVG from "../lib/svg/Linkedin";
import InstagramSVG from "../lib/svg/instagram";
import CurriculumSVG from "../lib/svg/curriculum";
import HeaderNav from "./headerNav";

export default function Header() {
    return (
        <header className="pt-24 w-[50%] h-96 flex flex-col gap-24 justify-between relative">
            <section className="flex flex-col gap-4 fixed">
                <h1 className="text-5xl font-bold opacity-80">
                    Lautaro Miceli
                </h1>
                <span className="text-lg font-bold opacity-80">
                    Desarrollador Full Stack
                </span>
                <span className="text-md opacity-70">
                    <p>
                        Construyo aplicaciones web de
                    </p>
                    <p>
                        punta a punta.
                    </p>
                </span>
            </section>
            <HeaderNav />
            <nav className="fixed top-[460px]">
                <ol className="flex gap-4 p-2 align-center justify-center">
                    <GithubSVG />
                    <LinkedinSVG />
                    <InstagramSVG />
                    <CurriculumSVG className="ml-5"/>
                </ol>
            </nav>
        </header>
    );
}