import BarChart from '../Charts/BarChart'
import SalesTransactionsTable from '../Charts/SalesTransactionsTable'
import PageMeta from '../../components/common/PageMeta'
import PageBreadcrumb from '../../components/common/PageBreadCrumb'
import ComponentCard from '../../components/common/ComponentCard'

function SalesReports() {
    return (
        <>
            <PageMeta
                title="React.js Basic Tables Dashboard | TailAdmin - Next.js Admin Dashboard Template"
                description="This is React.js Basic Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
            />
            <PageBreadcrumb pageTitle="Sales Report" />

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-1">

                <BarChart />
                <ComponentCard title="Individual Transactions">
                    <SalesTransactionsTable />
                </ComponentCard>
            </div>
        </>
    )
}

export default SalesReports