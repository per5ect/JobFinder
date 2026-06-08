import { Layout } from "../Global/Layout.jsx";
import { TableApplicationsElement } from "./TableApplicationsElement.jsx";
import { useParams } from "react-router";

export function MainJobApplications() {
  const { vacancyName, vacancyId } = useParams();

  console.log("vacancyName:", vacancyName); // → Junior front-end developer
  console.log("vacancyId:", vacancyId); // → 5

  return (
    <main>
      <Layout>
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mt-13 gap-4">
          <p className="text-black t-display">{vacancyName}</p>
          <h1 className="text-white bg-black px-7.5 t-display w-fit">
            Applications
          </h1>
        </div>
        <TableApplicationsElement vacancyId={vacancyId} />
      </Layout>
    </main>
  );
}
