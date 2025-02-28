
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import AllSalesTable from "../../components/tables/BasicTables/AllSalesTable";

export default function AllSalesPage() {
  return (
    <>
      <PageMeta
        title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
        description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Existing Sales Reps Table" />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-1">

        <AllSalesTable />
      </div >
    </>
  );
}
