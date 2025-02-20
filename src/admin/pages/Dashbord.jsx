import { Users, DollarSign, TrendingUp, Download } from "lucide-react"
import { useState, useEffect } from "react"
// import TransactionsTable from "./TransactionsTable"

export default function Dashboard() {
  return (
    <div className="space-y-6">
      aearwdfs Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit modi nesciunt laudantium quae fugit deleniti vitae, aliquid ipsam sint. Asperiores illo nihil rerum vel laboriosam quaerat molestias odio ab quos.
    </div>
  )
}

function MetricCard({ title, value, change, icon }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-gray-600 dark:text-gray-400">{title}</h3>
        <div className="text-purple-600 dark:text-purple-400">{icon}</div>
      </div>
      <div className="flex items-baseline">
        <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mr-2">{value}</span>
        <span className="text-green-500 text-sm">{change}</span>
      </div>
      <div className="mt-4 bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
        <div className="bg-purple-600 h-2 rounded-full" style={{ width: "60%" }}></div>
      </div>
    </div>
  )
}

