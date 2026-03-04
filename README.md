# AI Movie Insight Builder – Frontend

## Overview

AI Movie Insight Builder is a web application where users can enter an **IMDb movie ID** and receive detailed movie insights including reviews and AI-based sentiment analysis.

The frontend is built with **Next.js and Redux Toolkit** to provide a responsive and interactive user experience.

## Tech Stack

* Next.js
* React
* Redux Toolkit
* Tailwind CSS
* Axios

## Features

* Search movie by IMDb ID
* Display movie poster and metadata
* Show cast list and release year
* AI sentiment classification (Positive / Mixed / Negative)
* AI-generated audience insight summary
* Display audience reviews
* Responsive UI design
* Error handling and loading states

## UI Components

SearchBar
MovieCard
SentimentBox
AISummaryBox
ReviewList

## Project Structure

src
│
components
hooks
redux
services
utils

app
layout.tsx
page.tsx

## Setup Instructions

1. Clone repository

git clone <repo-url>

2. Navigate to frontend folder

cd frontend

3. Install dependencies

npm install

4. Run development server

npm run dev

Application will run at:

http://localhost:3000

## Environment Variables

Create a .env file if required:

NEXT_PUBLIC_API_URL=http://localhost:5000

## API Integration

The frontend communicates with the backend API:

GET /api/movies/:id

Example:

http://localhost:5000/api/movies/tt0133093

## Assumptions

* Backend API is running locally.
* OMDb API is available.

## Future Improvements

* Search by movie title instead of IMDb ID
* Advanced AI summarization
* Movie recommendation system
* Charts for sentiment visualization

# Live link - 