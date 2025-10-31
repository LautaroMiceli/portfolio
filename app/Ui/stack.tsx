import CssSVG from "../lib/svg/css";
import ExpressSVG from "../lib/svg/express";
import HtmlSVG from "../lib/svg/html";
import JavascriptSVG from "../lib/svg/javascript";
import NodeSVG from "../lib/svg/node";
import ReactSVG from "../lib/svg/react";
import TailwindSVG from "../lib/svg/tailwind";

export default function Stack() {
    return (
        <section className="flex flex-col gap-4 text-center text-white/80" >
            <h2 className="text-3xl">Mi stack tecnológico</h2>
            <h3 className="text-center">Lenguajes</h3>
            <ol className="flex gap-2 justify-center">
                <li><HtmlSVG className="hover:scale-110 hover:duration-100" /></li>
                <li><CssSVG className="hover:scale-110 hover:duration-100" /></li>
                <li><JavascriptSVG className="hover:scale-110 hover:duration-100" /></li>
            </ol>
            <h3 className="text-center">Frameworks Front End</h3>
            <ol className="flex gap-2 justify-center">
                <li><ReactSVG className="hover:scale-110 hover:duration-100" /></li>
                <li><TailwindSVG className="hover:scale-110 hover:duration-100" /></li>
            </ol>
            <h3 className="text-center">Frameworks Back End</h3>
            <ol className="flex gap-3 justify-center">
                <li><NodeSVG className="hover:scale-110 hover:duration-100" /></li>
                <li><ExpressSVG className="hover:scale-110 hover:duration-100" /></li>
            </ol>
        </section>
    )
}
