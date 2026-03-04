"use client"

import { useSelector } from "react-redux"
import { getSentimentColor } from "../services/aiService"

export default function SentimentBox() {

  const { sentiment } = useSelector((state) => state.movie)

  if (!sentiment) return null

  const color = getSentimentColor(sentiment)

  return (

    <div className="bg-gray-800 p-5 rounded-xl shadow-lg">

      <h3 className="text-lg font-semibold mb-2 text-gray-300">
        Audience Sentiment
      </h3>

      <p
        className="text-2xl font-bold"
        style={{ color }}
      >
        {sentiment}
      </p>

    </div>

  )
}