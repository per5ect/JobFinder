export function UserLoginDetailsForm() {
  return (
    <section className="pt-6 pb-8 xl:pt-10 xl:pb-16 border-b-1 border-black/10 flex flex-col gap-3">
      <h2 className="t-display">Login details</h2>
      <form
        action=""
        className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"
      >
        <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="currentPassword" className="t-body text-black">
            Current password
          </label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value=""
            required={false}
            placeholder="Enter your current password"
            className="py-4 p-6.5 border border-[#222A24] rounded-xl input-kosugi w-full
                                                   focus:border-blue transition-colors ease-in-out duration-300 hover:border-blue/80"
          />
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="newPassword" className="t-body text-black">
            New password
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value=""
            required={false}
            placeholder="Enter your new password"
            className="py-4 p-6.5 border border-[#222A24] rounded-xl input-kosugi w-full
                                                   focus:border-blue transition-colors ease-in-out duration-300 hover:border-blue/80"
          />
        </div>
        <button className="w-full lg:w-[359px] bg-blue py-4 text-white button-konkhmer rounded-xl">
          Save
        </button>
      </form>
    </section>
  );
}
