import AboutPage from "../components/AboutPage";
import Contact from "../components/Contact";
import DiscussSuggest from "../components/DiscussSuggest";
import Portfolio from "../components/Portfolio";
import WhatIDo from "../components/WhatIDo";
import WorkProcess from "../components/WorkProcess";

export default function Home() {
    return (
        <main className="2xl:px-[300px] xl:px-[100px] px-[20px] scroll-smooth">
            <AboutPage />
            <WorkProcess />
            <Portfolio />
            <DiscussSuggest />
            {/* <Blog /> */}
            <WhatIDo />
            <Contact />
        </main>
    );
}
