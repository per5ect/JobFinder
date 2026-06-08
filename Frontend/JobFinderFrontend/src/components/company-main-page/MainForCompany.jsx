import { Layout } from "../Global/Layout.jsx";

export function MainForCompany() {
  return (
    <main>
      <Layout>
        <div className="xl:hidden flex flex-col gap-10 py-8">
          <div className="flex flex-col items-center text-center gap-8">
            <p className="text-black t-heading leading-snug">
              Welcome to JobFinder a platform that helps companies find the
              perfect candidates
            </p>
            <a
              href="/create-work"
              className="w-full py-5 bg-blue t-heading text-white underline underline-offset-7 text-center"
            >
              Create a job
            </a>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                n: "1",
                title: "Create your account",
                desc: "All you need is an email address to create an account and post a job.",
              },
              {
                n: "2",
                title: "Build your job offer",
                desc: "Then just add a title, description and location to your job posting and you're done.",
              },
              {
                n: "3",
                title: "Publish your job offer",
                desc: "Once the position is posted, use our state-of-the-art tools to find your ideal candidate.",
              },
            ].map(({ n, title, desc }) => (
              <div key={n} className="border">
                <div className="flex flex-col px-6 py-6 gap-4">
                  <p className="text-black t-subhead">{n}</p>
                  <p className="t-heading">{title}</p>
                  <p className="t-subhead leading-7">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-black px-6 py-4 w-fit">
              <p className="t-heading text-white whitespace-nowrap">
                How it works<span className="font-kosugi">?</span>
              </p>
            </div>
            <p className="t-subhead text-black">
              We use modern technology to automatically process resumes in PDF
              format, allowing you to:
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-row bg-blue py-6 px-6 gap-4 items-start">
              <img
                src="/icons/Search-Document.svg"
                alt=""
                className="shrink-0 mt-1"
              />
              <div className="flex flex-col gap-1">
                <p className="t-heading text-white">
                  Quickly find suitable specialists
                </p>
                <p className="t-subhead text-white">
                  the system analyzes documents and suggests candidates that
                  meet your requirements.
                </p>
              </div>
            </div>
            <div className="flex flex-row bg-black py-6 px-6 gap-4 items-start">
              <img src="/icons/watch.svg" alt="" className="shrink-0 mt-1" />
              <div className="flex flex-col gap-1">
                <p className="t-heading text-white">Save time on selection</p>
                <p className="t-subhead text-white">
                  smart algorithms match applicants with the right skills and
                  experience.
                </p>
              </div>
            </div>
            <div className="flex flex-row bg-green py-6 px-6 gap-4 items-start">
              <img
                src="/icons/Group-person.svg"
                alt=""
                className="shrink-0 mt-1"
              />
              <div className="flex flex-col gap-1">
                <p className="t-heading text-black">Filter and sort resumes</p>
                <p className="t-subhead text-black">
                  choose the best by key criteria.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 items-center text-center">
            <a
              href="#"
              className="w-full py-5 bg-blue t-heading text-white underline underline-offset-7 text-center"
            >
              Start right now
            </a>
            <p className="t-subhead text-black">
              You have control over your offers 24/7 — you can edit, add or
              close them whenever you want.
            </p>
          </div>
        </div>

        <div className="hidden xl:block">
          <div className="flex flex-row mt-10 items-end justify-between">
            <div className="flex flex-col items-start gap-[67px]">
              <p className="text-black t-heading leading-13">
                Welcome to JobFinder a <br />
                platform that helps companies <br />
                find the perfect candidates
              </p>
              <a
                href="/create-work"
                className="px-[115px] py-[30px] bg-blue t-heading text-white underline underline-offset-7"
              >
                Create a job
              </a>
            </div>
            <img src="/company.jpg" alt="" />
          </div>

          <div className="flex flex-row justify-between mt-27">
            <div className="border max-w-[360px]">
              <div className="flex flex-col px-[33px] py-[33px] gap-[24px]">
                <p className="text-black t-subhead">1</p>
                <p className="t-heading">Create your account</p>
                <p className="t-subhead leading-7">
                  All you need is an email address to create an account and post
                  a job.
                </p>
              </div>
            </div>
            <div className="border max-w-[360px]">
              <div className="flex flex-col px-[33px] py-[33px] gap-[24px]">
                <p className="text-black t-subhead">2</p>
                <p className="t-heading">Build your job offer</p>
                <p className="t-subhead leading-7">
                  Then just add a title, description and location to your job
                  posting and you're done.
                </p>
              </div>
            </div>
            <div className="border max-w-[360px]">
              <div className="flex flex-col px-[33px] py-[33px] gap-[24px]">
                <p className="text-black t-subhead">3</p>
                <p className="t-heading">Publish your job offer</p>
                <p className="t-subhead leading-7">
                  Once the position is posted, use our state-of-the-art tools to
                  find your ideal candidate.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[67px] mb-[67px] flex flex-row items-center gap-x-4">
            <p className="t-heading text-white bg-black px-[43px] py-[29px] whitespace-nowrap shrink-0">
              How it works<span className="font-kosugi">?</span>
            </p>
            <p className="t-subhead text-black">
              We use modern technology to automatically process resumes in PDF
              format, allowing you to:
            </p>
          </div>

          <div className="flex flex-col gap-[32px]">
            <div className="flex flex-row bg-blue py-[35px] px-[41px] gap-[13px]">
              <img src="/icons/Search-Document.svg" alt="" />
              <div className="flex flex-col">
                <p className="t-heading text-white">
                  Quickly find suitable specialists
                </p>
                <p className="t-subhead text-white">
                  the system analyzes documents and suggests candidates that
                  meet your requirements.
                </p>
              </div>
            </div>
            <div className="flex flex-row bg-black py-[35px] px-[41px] max-w-[996px] gap-[13px]">
              <img src="/icons/watch.svg" alt="" />
              <div className="flex flex-col">
                <p className="t-heading text-white">Save time on selection</p>
                <p className="t-subhead text-white">
                  smart algorithms match applicants with the right skills and
                  experience.
                </p>
              </div>
            </div>
            <div className="flex flex-row bg-green py-[35px] pl-[33px] max-w-[552px] gap-[20px]">
              <img src="/icons/Group-person.svg" alt="" />
              <div className="flex flex-col">
                <p className="t-heading text-black">Filter and sort resumes</p>
                <p className="t-subhead text-black">
                  choose the best by key criteria.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-[67px] mb-[67px] flex flex-row items-center justify-between">
            <a
              href="#"
              className="px-[115px] py-[30px] bg-blue t-heading text-white underline underline-offset-7"
            >
              Start right now
            </a>
            <p className="t-subhead text-black">
              You have control over your offers 24/7 - you can <br />
              edit, add or close them whenever you want.
            </p>
          </div>
        </div>
      </Layout>
    </main>
  );
}
