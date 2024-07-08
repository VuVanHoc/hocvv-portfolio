import {
    AnalyzeIcon,
    DesignIcon,
    LaunchIcon,
    ResearchIcon,
} from "../app/icons";

export default function WorkProcess() {
    return (
        <div
            className="flex xl:gap-36 gap-10 items-center flex-col xl:flex-row"
            id="process"
        >
            <div className="flex-1">
                <h3 className="md:text-5xl font-semibold">Work Process</h3>
                <br />
                <p>
                    My work process ensures a streamlined approach to creating
                    high-quality websites.
                </p>
                <br />
                <p>
                    It starts with understanding your project requirements and
                    planning accordingly.
                </p>
                <br />
                <p>
                    I then design and develop the site, followed by thorough
                    testing to ensure functionality and user experience.
                </p>
                <br />
                <p>
                    Finally, I deploy the website and provide ongoing support to
                    keep it running smoothly.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 flex-[2] gap-x-8">
                <div className="shadow-xl bg-white rounded-xl p-8 md:mb-8 cursor-pointer hover:scale-105 transition-all duration-300">
                    <div className="p-5 rounded-md bg-blue-100 w-fit">
                        <ResearchIcon />
                    </div>
                    <br />
                    <h5 className="text-xl font-semibold">
                        1. Discovery & Planning
                    </h5>
                    <p>
                        I collaborate with you to understand your project
                        requirements and goals through thorough research and
                        planning.
                    </p>
                </div>
                <div className="shadow-xl bg-white rounded-xl p-8 mt-8 mb-8 md:mb-0 cursor-pointer hover:scale-105 transition-all duration-300">
                    <div className="p-5 rounded-md bg-blue-100 w-fit">
                        <AnalyzeIcon />
                    </div>
                    <br />
                    <h5 className="text-xl font-semibold">
                        2. Design & Development
                    </h5>
                    <p>
                        I create wireframes and prototypes, then develop the
                        website using HTML, CSS, JS/TS to build a responsive and
                        user-friendly site.
                    </p>
                </div>
                <div className="shadow-xl bg-white rounded-xl p-8 md:mb-8 cursor-pointer hover:scale-105 transition-all duration-300">
                    <div className="p-5 rounded-md bg-blue-100 w-fit">
                        <DesignIcon />
                    </div>
                    <br />
                    <h5 className="text-xl font-semibold">3. Testing</h5>
                    <p>
                        I conduct rigorous testing across various devices and
                        browsers to ensure full functionality and a seamless
                        user experience.
                    </p>
                </div>
                <div className="shadow-xl bg-white rounded-xl p-8 mt-8 cursor-pointer hover:scale-105 transition-all duration-300">
                    <div className="p-5 rounded-md bg-blue-100 w-fit">
                        <LaunchIcon />
                    </div>
                    <br />
                    <h5 className="text-xl font-semibold">
                        4. Deployment & Support
                    </h5>
                    <p>
                        I deploy the website to the live server and provide
                        ongoing maintenance and support to keep your website
                        up-to-date, secure, and performing optimally.
                    </p>
                </div>
            </div>
        </div>
    );
}
