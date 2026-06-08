export function VacancyCompanyContacts({vacancyData}) {
    return (
        <div className="px-6.5 py-8 border border-black w-full max-w-[600px] rounded-[20px]">
            <div className="flex flex-col gap-6">
                <div className="flex flex-row justify-between items-center">
                    <p className="t-heading">Company:</p>
                    <p className="t-heading">{vacancyData.companyName}</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <p className="t-heading">Phone:</p>
                    <p className="t-body">{vacancyData.companyPhone}</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <p className="t-heading">Email:</p>
                    <p className="t-body">{vacancyData.companyEmail}</p>
                </div>
            </div>
        </div>
    )
}
