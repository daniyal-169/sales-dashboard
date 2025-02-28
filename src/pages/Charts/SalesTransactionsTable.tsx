"use client"

import { SalesTransaction } from "../../Types/allTypes"



const tableData: SalesTransaction[] = [
    {
        id: 1,
        date: "2023-07-01",
        amount: "$5,000",
        salesRep: "Lindsey Curtis",
        commissionEarned: "$195",
    },
    {
        id: 2,
        date: "2023-07-02",
        amount: "$7,500",
        salesRep: "Kaiya George",
        commissionEarned: "$390",
    },
    {
        id: 3,
        date: "2023-07-03",
        amount: "$3,000",
        salesRep: "Zain Geidt",
        commissionEarned: "$81",
    },
    {
        id: 4,
        date: "2023-07-04",
        amount: "$6,200",
        salesRep: "Abram Schleifer",
        commissionEarned: "$254.20",
    },
    {
        id: 5,
        date: "2023-07-05",
        amount: "$4,800",
        salesRep: "Carla George",
        commissionEarned: "$168",
    },
]

export default function SalesTransactionsTable() {
    return (
        <div className="w-full overflow-hidden rounded-lg shadow-xs border-gray-200 ]">
            <div className="w-full overflow-x-auto">
                <table className="w-full whitespace-nowrap">
                    <thead>
                        <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:text-gray-400  border-gray-200  dark:border-gray-800 ">
                            <th className="px-4 py-3">Date</th>
                            <th className="px-4 py-3">Amount</th>
                            <th className="px-4 py-3">Sales Rep</th>
                            <th className="px-4 py-3">Commission Earned</th>
                        </tr>
                    </thead>
                    <tbody className="border-gray-200  dark:border-gray-800 ">
                        {tableData.map((transaction) => (
                            <tr key={transaction.id} className="text-gray-700 dark:text-gray-400">
                                <td className="px-4 py-3 text-sm">{transaction.date}</td>
                                <td className="px-4 py-3 text-sm">{transaction.amount}</td>
                                <td className="px-4 py-3 text-sm">{transaction.salesRep}</td>
                                <td className="px-4 py-3 text-sm">{transaction.commissionEarned}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

