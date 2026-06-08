import { useEffect } from "react";
import { Loader } from "../Global/Loader.jsx";
import { UserPersonalInformationForm } from "./UserPersonalnformationForm.jsx";
import { UserLoginDetailsForm } from "./UserLoginDetailsForm.jsx";
import { useUserAccount } from "./hooks/useUserAccount.js";

export function UserAccount({ userRole }) {
  const { user, loading, error, fetchUserData } = useUserAccount(userRole);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  if (loading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col w-full mt-8 mb-8 xl:mt-[57px] xl:mb-[57px]">
      <div className="flex flex-col gap-4 pb-5 xl:pb-9 border-b-1 border-black/10">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center w-full gap-3">
          <div className="flex flex-row items-center gap-3 w-fit bg-black text-white t-display px-7">
            <h1>My Profile</h1>
            <img src="/icons/Me.svg" alt="My profile" className="" />
          </div>

          {userRole === "ROLE_USER" ? (
            <div className="flex flex-row py-3 px-6.5 gap-1 bg-green rounded-2xl transition-colors ease-in-out hover:bg-green/80 w-fit">
              <a href="/cv-details" className="text-black font-konkhmer">
                My CV details
              </a>
              <img src="/icons/Document.svg" alt="" className="" />
            </div>
          ) : null}
        </div>

        <div className="flex flex-row gap-3 items-center">
          <h3 className="t-heading">Email:</h3>
          <p className="t-body">{user?.email || "Loading email..."}</p>
        </div>
      </div>

      <UserPersonalInformationForm userPersonalData={user} />
      <UserLoginDetailsForm userLoginDetails={user} />
    </div>
  );
}
