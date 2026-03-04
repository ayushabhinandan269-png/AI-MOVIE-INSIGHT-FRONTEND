"use client"

import { useSelector } from "react-redux"

export default function ReviewList() {

  const { reviews } = useSelector((state) => state.movie)

  if (!reviews || reviews.length === 0) return null

  return (

    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">

      <h3 className="text-xl font-bold mb-4">
        User Reviews
      </h3>

      <div className="space-y-3">

        {reviews.map((review, index) => (

          <p
            key={index}
            className="bg-gray-700 p-3 rounded-lg text-gray-200"
          >
            {review}
          </p>

        ))}

      </div>

    </div>

  )
}