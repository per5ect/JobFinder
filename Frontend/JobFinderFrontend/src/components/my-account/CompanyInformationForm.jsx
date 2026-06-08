export function CompanyInformationForm({ companyData }) {
  return (
    <section className="pt-6 pb-8 xl:pt-10 xl:pb-16 border-b-1 border-black/10 flex flex-col gap-3">
      <h2 className="t-display">Company information</h2>
      <form
        action=""
        className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"
      >
        <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="companyName" className="t-body text-black">
            Company name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={companyData.companyEmail}
            required={false}
            placeholder="Company name"
            className="py-4 p-6.5 border border-[#222A24] rounded-xl input-kosugi w-full
                                                   focus:border-blue transition-colors ease-in-out duration-300 hover:border-blue/80"
          />
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <label htmlFor="companyPhone" className="t-body text-black">
            Mobile phone
          </label>
          <input
            type="text"
            id="companyPhone"
            name="companyPhone"
            value={companyData.companyPhone}
            required={false}
            placeholder="Phone"
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
