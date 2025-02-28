"use client"

import { PencilIcon, TrashIcon } from "lucide-react"
import { Employee } from "../../../Types/allTypes"



const tableData: Employee[] = [
  {
    id: 1,
    name: "Lindsey Curtis",
    email: "lindsey.curtis@example.com",
    role: "Web Designer",
    supervisor: "John Doe",
    commission: "3.9%",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Kaiya George",
    email: "kaiya.george@example.com",
    role: "Project Manager",
    supervisor: "Jane Smith",
    commission: "5.2%",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Zain Geidt",
    email: "zain.geidt@example.com",
    role: "Content Writer",
    supervisor: "Alice Johnson",
    commission: "2.7%",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Abram Schleifer",
    email: "abram.schleifer@example.com",
    role: "Digital Marketer",
    supervisor: "Bob Williams",
    commission: "4.1%",
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Carla George",
    email: "carla.george@example.com",
    role: "Front-end Developer",
    supervisor: "Charlie Brown",
    commission: "3.5%",
    image: "/placeholder.svg?height=40&width=40",
  },
]

export default function AllSalesTable() {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b  dark:text-gray-400 dark:bg-gray-800 border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Supervisor</th>
              <th className="px-4 py-3">Commission</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
            {tableData.map((employee) => (
              <tr key={employee.id} className="text-gray-700 dark:text-gray-400">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src={employee.image || "/placeholder.svg"}
                        alt=""
                        loading="lazy"
                      />
                      <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                    </div>
                    <div>
                      <p className="font-semibold">{employee.name}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">{employee.email}</td>
                <td className="px-4 py-3 text-sm">{employee.role}</td>
                <td className="px-4 py-3 text-sm">{employee.supervisor}</td>
                <td className="px-4 py-3 text-sm">{employee.commission}</td>
                <td className="px-4 py-3 text-sm">
                  <div className="flex items-center space-x-4 text-sm">
                    <button
                      className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                      aria-label="Edit"
                    >
                      <PencilIcon className="w-5 h-5" />
                    </button>
                    <button
                      className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                      aria-label="Delete"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

