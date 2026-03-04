"use client"

import { useState } from "react"
import { useFetchMovie } from "../hooks/useFetchMovie"

export default function SearchBar() {

  const [id, setId] = useState("")
  const { fetchMovie } = useFetchMovie()

  const handleSearch = () => {
    if (!id) return
    fetchMovie(id)
  }

  return (

    <div className="flex gap-4 w-full">

      <input
        className="flex-1 p-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
        placeholder="Enter IMDb ID (tt3896198)"
        value={id}
        onChange={(e) => setId(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />

      <button
        onClick={handleSearch}
        className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-semibold"
      >
        Search
      </button>

    </div>

  )
}