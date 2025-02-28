import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import PageMeta from "../../components/common/PageMeta";
import HierarchyOverview from "../../components/ecommerce/HierarchyOverview";
import SalesOverTime from "../../components/ecommerce/SalesOverTime";
import TotalSales from "../../components/ecommerce/TotalSales";
import LeaderBoard from "../../components/ecommerce/LeaderBoard";

export default function Home() {
  const teamMembers = [
    {
      name: "Samantha Reynolds",
      role: "Marketing Manager",
      image: "https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar11.jpg",
    },
    {
      name: "Benjamin Martinez",
      role: "Sales Executive",
      image: "https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar2.jpg",
    },
    {
      name: "Emily Turner",
      role: "Customer Support",
      image: "https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar5.jpg",
    },
    {
      name: "Jason Anderson",
      role: "Development Engineer",
      image: "https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar24.jpg",
    },
    {
      name: "Olivia Carter",
      role: "Creative Director",
      image: "https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar23.jpg",
    },
  ];

  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">

        <div className="col-span-12  xl:col-span-7">
          <SalesOverTime />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <TotalSales />
        </div>

        <div className="col-span-12">
          <HierarchyOverview members={teamMembers} />
        </div>
        <div className="col-span-12 xl:col-span-6">
          <StatisticsChart />
        </div>

        <div className="col-span-12 xl:col-span-6">
          <LeaderBoard />
        </div>


      </div>
    </>
  );
}
