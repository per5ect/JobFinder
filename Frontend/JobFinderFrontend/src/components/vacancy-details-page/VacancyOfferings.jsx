export function VacancyOfferings({ vacancyData }) {
  return (
    <div className="w-full mt-15">
      <ul className="font-kosugi w-full flex flex-col items-center">
        <div className="flex flex-col gap-6 w-full xl:max-w-[600px]">
          {vacancyData.offerings.map((offerings) => (
            <li className="t-subhead list-disc">{offerings}</li>
          ))}
        </div>
      </ul>
    </div>
  );
}
