"use client"

import { useSelector } from "react-redux"

import SearchBar from "../src/components/SearchBar"
import MovieCard from "../src/components/MovieCard"
import ReviewList from "../src/components/ReviewList"
import SentimentBox from "../src/components/SentimentBox"
import AISummaryBox from "../src/components/AISummaryBox"

export default function Home() {

  const { loading, error } = useSelector((state: any) => state.movie)

  return (

    <div className="min-h-screen bg-gray-900 text-white p-8">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-8">
          AI Movie Insight Builder
        </h1>

        <SearchBar />

        {loading && (
          <p className="text-center text-blue-400 mt-4">
            Analyzing movie insights...
          </p>
        )}

        {error && (
          <p className="text-center text-red-400 mt-4">
            {error}
          </p>
        )}

        {!loading && !error && (

          <div className="space-y-6 mt-6">

            <MovieCard />

            <SentimentBox />

            <AISummaryBox />

            <ReviewList />

          </div>

        )}

      </div>

    </div>

  )

}