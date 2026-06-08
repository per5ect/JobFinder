import { useSelector, useDispatch } from "react-redux";
import {
  fetchFavorites,
  toggleFavorite,
} from "../../store/favoriteVacanciesSlice";
import { useEffect } from "react";

export function VacancyElement({ vacancyData, userRole }) {
  const favoriteVacancies = useSelector((state) =>
    Array.isArray(state.favorites.items) ? state.favorites.items : [],
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const isFavorite = favoriteVacancies.some((fav) => fav.id === vacancyData.id);

  const handleToggleFavorite = () => {
    dispatch(
      toggleFavorite({ vacancy: vacancyData, isCurrentlyFavorite: isFavorite }),
    );
  };

  return (
    <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center w-full px-7 py-8 border border-black/30 rounded-2xl gap-6">
      <div className="flex flex-col items-start gap-6">
        <a href={"/all-vacancies/" + vacancyData.id} className="t-heading">
          {vacancyData.title}
        </a>
        <a
          href="#"
          className="flex flex-row items-center font-konkhmer gap-2 px-5 py-2 border border-black rounded-[20px]"
        >
          <img src="/icons/Company.svg" alt="" />
          {vacancyData.companyName}
        </a>
        <div className="flex flex-row flex-wrap gap-3 items-center">
          <span className="flex flex-row items-center gap-2 bg-black px-5 py-2.5 rounded-[20px] text-white font-konkhmer">
            <img src="/icons/Compass.svg" alt="" />
            {vacancyData.location}
          </span>
          <span className="bg-blue text-white font-konkhmer px-5 py-2.5 rounded-[20px]">
            {vacancyData.knowledgeLevel}
          </span>
          <span className="bg-blue text-white font-konkhmer px-5 py-2.5 rounded-[20px]">
            {vacancyData.typeOfEmployment}
          </span>
          <span className="bg-blue text-white font-konkhmer px-5 py-2.5 rounded-[20px]">
            {vacancyData.workExperience === 0
              ? "No experience"
              : vacancyData.workExperience + "+ years"}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-5 xl:items-end xl:min-w-[220px]">
        <p className="text-black t-heading">{vacancyData.salary} $/ month</p>
        {userRole !== "ROLE_COMPANY" ? (
          <a
            href={"/all-vacancies/" + vacancyData.id}
            className="text-center bg-green font-kosugi rounded-xl py-3.5 px-6 w-full"
          >
            More about job
          </a>
        ) : (
          <a
            href={
              "/vacancy-applications/" +
              vacancyData.title +
              "/" +
              vacancyData.id
            }
            className="text-center bg-green font-kosugi rounded-xl py-3.5 px-6 w-full"
          >
            Job Applications
          </a>
        )}
        {userRole === "ROLE_COMPANY" || userRole === "ROLE_ADMIN" ? (
          <button className="bg-red button-kosugi rounded-xl py-3.5 px-6 w-full">
            Delete
          </button>
        ) : (
          <>
            {userRole === "ROLE_USER" && (
              <button
                onClick={handleToggleFavorite}
                className={`rounded-xl py-3.5 px-6 button-kosugi ${
                  isFavorite ? "bg-red text-white" : "bg-blue text-white"
                }`}
              >
                {isFavorite ? "Remove from favorite" : "Add to favorite"}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
