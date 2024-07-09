import Image from "next/image";
import github from "/public/icons/github.png";
import facebook from "/public/icons/facebook.png";
import linkedin from "/public/icons/linkedin.png";
import email from "/public/icons/gmail.png";
import telephone from "/public/icons/telephone.png";
import telegram from "/public/icons/telegram.png";

export default function Contact() {
    return (
        <div
            id="contact"
            className="flex flex-col items-center justify-center pb-[100px] mt-[100px]"
        >
            <h3 className="md:text-5xl font-semibold">Contact me!</h3>
            <p>
                Send me a message, and I will get back to you as soon as
                possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="flex gap-2 items-center hover:text-blue-400 text-lg">
                    <Image src={email} alt="email" />
                    <a href="mailto:hocvanvu1999@gmail.com">
                        hocvanvu1999@gmail.com
                    </a>
                </div>
                <div className="flex gap-2 items-center hover:text-blue-400 text-lg">
                    <Image src={telephone} alt="email" />
                    <a href="telto:0961868528">(+84) 961 868 528</a>
                </div>
                <div className="flex gap-2 items-center hover:text-blue-400 text-lg">
                    <Image src={facebook} alt="fb" />
                    <a
                        href="https://www.facebook.com/dev.hocvv1199"
                        target="_blank"
                    >
                        https://fb.com/dev.hocvv1199
                    </a>
                </div>
                <div className="flex gap-2 items-center hover:text-blue-400 text-lg">
                    <Image src={telegram} alt="telegram" />
                    <a href="https://t.me/hocvv1199" target="_blank">
                        @hocvv1199
                    </a>
                </div>
                <div className="flex gap-2 items-center hover:text-blue-400 text-lg">
                    <Image src={linkedin} alt="email" />
                    <a
                        href="https://www.linkedin.com/in/hoc-vu-van-656102185/"
                        target="_blank"
                    >
                        My LinkedIn profile
                    </a>
                </div>
                <div className="flex gap-2 items-center hover:text-blue-400 text-lg">
                    <Image src={github} alt="github" />
                    <a href="https://github.com/VuVanHoc" target="_blank">
                        https://github.com/VuVanHoc
                    </a>
                </div>
            </div>
        </div>
    );
}
