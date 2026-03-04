import { useDispatch } from "react-redux"
import { getMovie } from "../redux/movieSlice"

export const useFetchMovie = () => {

  const dispatch = useDispatch()

  const fetchMovie = (id) => {
    dispatch(getMovie(id))
  }

  return { fetchMovie }
}