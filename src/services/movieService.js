import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:5000/api"
})

export const fetchMovieInsights = async (id) => {
  const res = await API.get(`/movies/${id}`)
  return res.data
}