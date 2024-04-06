import AboutPage from "./components/AboutPage";
import Blog from "./components/Blog";
import DiscussSuggest from "./components/DiscussSuggest";
import Portfolio from "./components/Portfolio";
import WorkProcess from "./components/WorkProcess";

export default function Home() {
  return (
    <main className="2xl:px-[300px] xl:px-[100px] px-[20px]">
      <AboutPage />
      <WorkProcess />
      <Portfolio />
      <DiscussSuggest />
      <Blog />
    </main>
  );
}
