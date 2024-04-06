import { AnalyzeIcon, DesignIcon, LaunchIcon, ResearchIcon } from "../icons";

export default function WorkProcess() {
  return (
    <div className="flex gap-36 items-center" id="process">
      <div className="flex-1">
        <h1 className="text-5xl font-semibold">Work Process</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
          arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices
          eget lorem ac vestibulum. Suspendis imperdiet,
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
          arcu, varius eget velit non.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 flex-1 gap-x-8">
        <div className="shadow-xl bg-white rounded-xl p-8 mb-8">
          <div className="p-5 rounded-md bg-purple-100 w-fit">
            <ResearchIcon />
          </div>
          <br />
          <h5 className="text-xl font-semibold">1. Research</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu.
          </p>
        </div>
        <div className="shadow-xl bg-white rounded-xl p-8 mt-8">
          <div className="p-5 rounded-md bg-purple-100 w-fit">
            <AnalyzeIcon />
          </div>
          <br />
          <h5 className="text-xl font-semibold">2. Analyze</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu.
          </p>
        </div>
        <div className="shadow-xl bg-white rounded-xl p-8 mb-8">
          <div className="p-5 rounded-md bg-purple-100 w-fit">
            <DesignIcon />
          </div>
          <br />
          <h5 className="text-xl font-semibold">3. Develop</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu.
          </p>
        </div>
        <div className="shadow-xl bg-white rounded-xl p-8 mt-8">
          <div className="p-5 rounded-md bg-purple-100 w-fit">
            <LaunchIcon />
          </div>
          <br />
          <h5 className="text-xl font-semibold">4. Launch</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus
            arcu.
          </p>
        </div>
      </div>
    </div>
  );
}
