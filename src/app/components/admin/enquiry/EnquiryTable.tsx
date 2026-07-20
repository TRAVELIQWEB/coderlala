import React from "react";
import { Pencil } from "lucide-react";

const enquiries = [
  {
    _id: "1",
    fullName: "Rohan Kumar",
    phoneNumber: "+91 9876512345",
    companyName: "Innovate Solutions India",
    email: "rohan.k@example.com",
    budget: "₹50,000 - ₹2,00,000",
    projectDetails:
      "Looking for a custom e-commerce platform with integrated payment gateways and inventory management.",
    createdAt: "2023-11-20",
  },
  {
    _id: "2",
    fullName: "Priya Singh",
    phoneNumber: "+91 8877665544",
    companyName: "Digital Spark Pvt. Ltd.",
    email: "priya.s@digispark.in",
    budget: "₹2,00,000 - ₹5,00,000",
    projectDetails:
      "Require a mobile application for a food delivery service, including user and restaurant interfaces.",
    createdAt: "2023-11-19",
  },
  {
    _id: "3",
    fullName: "Amit Gupta",
    phoneNumber: "+91 7788990011",
    companyName: "",
    email: "amit.g@webmail.com",
    budget: "Less than ₹50,000",
    projectDetails:
      "Need a simple portfolio website to showcase my photography work with a contact form.",
    createdAt: "2023-11-18",
  },
  {
    _id: "4",
    fullName: "Sneha Reddy",
    phoneNumber: "+91 9911223344",
    companyName: "Global Tech Solutions",
    email: "sneha.r@globaltech.co.in",
    budget: "₹5,00,000+",
    projectDetails:
      "Seeking development of a comprehensive SaaS platform for HR management with advanced analytics.",
    createdAt: "2023-11-17",
  },
  {
    _id: "5",
    fullName: "Neha Singh",
    phoneNumber: "+91 9012345678",
    companyName: "NS Marketing",
    email: "neha@gmail.com",
    budget: "(Skip) Not sure yet",
    projectDetails:
      "Consultation needed for integrating AI-driven chatbots into our existing customer support system.",
    createdAt: "2023-11-16",
  },
];

const EnquiryTable = () => {
  // const handleEditClick = (enquiry: (typeof enquiries)[0]) => {
  //   console.log(enquiry);
  // };

  return (
    <div className="overflow-hidden rounded-xl border! border-border bg-background shadow-sm mt-5">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="bg-muted">
              <th className="w-14 px-4 py-3 text-left font-semibold text-nowrap">
                S. No
              </th>

              <th className="min-w-[180px] px-4 py-3 text-left font-semibold text-nowrap">
                Full Name
              </th>

              <th className="min-w-[150px] px-4 py-3 text-left font-semibold text-nowrap">
                Phone Number
              </th>

              <th className="min-w-[180px] px-4 py-3 text-left font-semibold text-nowrap">
                Company Name
              </th>

              <th className="min-w-[220px] px-4 py-3 text-left font-semibold text-nowrap">
                Email
              </th>

              <th className="min-w-[180px] px-4 py-3 text-left font-semibold text-nowrap">
                Budget
              </th>

              <th className="min-w-[320px] px-4 py-3 text-left font-semibold text-nowrap">
                Project Details
              </th>

              <th className="w-32 px-4 py-3 text-left font-semibold text-nowrap">
                Created At
              </th>

              {/* <th className="w-20 px-4 py-3 text-center font-semibold text-nowrap">
                Actions
              </th> */}
            </tr>
          </thead>

          <tbody className="divide-y divide-border">
            {enquiries.length === 0 ? (
              <tr>
                <td
                  colSpan={9}
                  className="py-10 text-center text-muted-foreground"
                >
                  No enquiries found
                </td>
              </tr>
            ) : (
              enquiries.map((enquiry, index) => (
                <tr
                  key={enquiry._id}
                  className="transition-colors hover:bg-muted/50"
                >
                  <td className="px-4 py-4">{index + 1}</td>

                  <td className="px-4 py-4 font-medium text-nowrap">
                    {enquiry.fullName}
                  </td>

                  <td className="px-4 py-4 text-nowrap">
                    {enquiry.phoneNumber}
                  </td>

                  <td className="max-w-[180px] px-4 py-4">
                    <div
                      className="truncate"
                      title={enquiry.companyName || "-"}
                    >
                      {enquiry.companyName || "-"}
                    </div>
                  </td>

                  <td className="max-w-[220px] px-4 py-4">
                    <div className="truncate" title={enquiry.email}>
                      {enquiry.email}
                    </div>
                  </td>

                  <td className="px-4 py-4 text-nowrap">
                    <span className="rounded-full bg-blue-100 px-2.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/20 dark:text-blue-400">
                      {enquiry.budget}
                    </span>
                  </td>

                  <td className="max-w-[320px] px-4 py-4">
                    <div
                      className="truncate text-muted-foreground"
                      title={enquiry.projectDetails}
                    >
                      {enquiry.projectDetails}
                    </div>
                  </td>

                  <td className="px-4 py-4 text-nowrap">
                    {new Date(enquiry.createdAt).toLocaleDateString()}
                  </td>

                  {/* <td className="px-4 py-4">
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleEditClick(enquiry)}
                        className="rounded-md p-2 text-blue-600 transition hover:bg-blue-100 dark:hover:bg-blue-500/20"
                      >
                        <Pencil size={16} />
                      </button>
                    </div>
                  </td> */}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnquiryTable;