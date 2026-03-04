"use client"

import { useSelector } from "react-redux"

export default function MovieCard() {

  const { movie } = useSelector((state) => state.movie)

  if (!movie) return null

  return (

    <div className="bg-slate-800 p-6 rounded-2xl shadow-lg flex gap-6 mt-6">

      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-40 rounded-lg"
      />

      <div className="space-y-2">

        <h2 className="text-2xl font-bold">
          {movie.Title}
        </h2>

        <p className="text-yellow-400 font-medium">
          ⭐ IMDb Rating: {movie.imdbRating}
        </p>

        <p className="text-gray-400">
          📅 Year: {movie.Year}
        </p>

        <p className="text-gray-400">
          🎭 Genre: {movie.Genre}
        </p>

        <p className="text-gray-400">
          🎬 Cast: {movie.Actors}
        </p>

        <p className="text-gray-200 mt-2">
          {movie.Plot}
        </p>

      </div>

    </div>

  )
}