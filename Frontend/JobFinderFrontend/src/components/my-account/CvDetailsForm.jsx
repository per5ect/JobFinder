import { Loader } from "../Global/Loader.jsx";

export function CvDetailsForm({ isLoading, cvLink, cvDetails }) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-full py-20">
        <Loader />
      </div>
    );
  }
  if (cvLink === "") {
    return (
      <div>
        <div className="w-full flex justify-center">
          <div className="w-full xl:max-w-[800px] flex flex-col items-center justify-center mt-20 rounded-xl border border-black py-10 px-6 xl:py-15 xl:px-15 gap-10">
            <h1 className="t-heading text-black text-center">
              To get the Resume details, upload your resume first
            </h1>
            <a
              href="/analyze"
              className="t-heading bg-green text-black px-5 py-3 rounded-xl w-full xl:w-auto text-center"
            >
              Analyze Resume
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full xl:max-w-[744px] px-6 xl:px-18 py-8 border border-black/30 rounded-xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 border-b border-black/10">
          <h3 className="text-black t-heading">Resume:</h3>
          <a
            href={cvLink}
            className="flex flex-row gap-2 t-subhead px-12 py-3.5 rounded-2xl bg-green transition-colors ease-in-out hover:bg-green/90 justify-center"
          >
            My resume
            <img src="/icons/Document.svg" alt="" />
          </a>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pt-8 pb-8 border-b border-black/10">
          <h3 className="text-black t-heading">Years of experience:</h3>
          <p className="text-black t-heading">
            {cvDetails.experienceYears} Years
          </p>
        </div>
        <div className="flex flex-col pt-8 gap-6">
          <h3 className="text-black t-heading">Technology stack:</h3>
          <div className="flex flex-wrap gap-2.5">
            {Array.isArray(cvDetails?.techStack) &&
              cvDetails.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue font-konkhmer text-white border rounded-2xl px-7.5 py-2"
                >
                  {tech}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
