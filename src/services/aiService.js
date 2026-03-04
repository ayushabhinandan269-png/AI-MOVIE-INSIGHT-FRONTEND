export const getSentimentColor = (sentiment) => {

  if (sentiment === "Positive") return "green"
  if (sentiment === "Negative") return "red"

  return "orange"

}


export const generateAISummary = (reviews, sentiment) => {

  if (!reviews || reviews.length === 0) {
    return "No audience insights available."
  }

  if (sentiment === "Positive") {
    return "Audiences largely enjoyed the movie, praising its storytelling, performances, and overall cinematic experience."
  }

  if (sentiment === "Negative") {
    return "Audience feedback suggests that viewers found issues with the movie's pacing, storytelling, or performances."
  }

  return "Audience reactions are mixed, with some viewers appreciating certain elements while others found the film less engaging."
}