export function VacancyRequirements({ vacancyData }) {
  return (
    <div className="w-full mt-15">
      <ul className="font-kosugi w-full flex flex-col items-center">
        <div className="flex flex-col gap-6 w-full xl:max-w-[600px]">
          {vacancyData.requirements.map((requirement) => (
            <li className="t-subhead list-disc">{requirement}</li>
          ))}
        </div>
      </ul>
    </div>
  );
}
