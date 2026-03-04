"use client"

import { useSelector } from "react-redux"
import { motion } from "framer-motion"

export default function MovieCard() {

  const { movie } = useSelector((state) => state.movie)

  if (!movie) return null

  return (

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-slate-800 p-6 rounded-2xl shadow-lg flex flex-col md:flex-row gap-6 mt-6"
    >

      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-40 rounded-lg mx-auto md:mx-0"
      />

      <div className="space-y-2 text-center md:text-left">

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

    </motion.div>

  )
}