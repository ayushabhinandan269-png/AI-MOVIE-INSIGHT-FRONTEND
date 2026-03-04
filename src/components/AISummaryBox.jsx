"use client"

import { useSelector } from "react-redux"
import { generateAISummary } from "../services/aiService"

export default function AISummaryBox() {

  const { reviews, sentiment } = useSelector((state) => state.movie)

  if (!sentiment) return null

  const summary = generateAISummary(reviews, sentiment)

  return (

    <div className="bg-slate-800 p-6 rounded-xl shadow-md">

      <h3 className="text-lg font-semibold mb-2">
        AI Audience Insight
      </h3>

      <p className="text-gray-300">
        {summary}
      </p>

    </div>

  )
}