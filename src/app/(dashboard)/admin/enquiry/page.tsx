import EnquiryFilters from "@/app/components/admin/enquiry/EnquiryFilter";
import EnquiryTable from "@/app/components/admin/enquiry/EnquiryTable";

const EnquiryPage = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Latest Enquiries
        </h1>
        <p className="mt-2 text-muted-foreground">
          Manage client enquiries
        </p>
      </div>
      <div className="space-y-5 mt-5">
        <EnquiryFilters />
        <EnquiryTable />
        {/* <StatsGrid /> */}
      </div>
    </div>
  )
}

export default EnquiryPage;