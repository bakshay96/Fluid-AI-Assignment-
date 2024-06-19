# Fluid-AI-Assignment
# 🎬 Movie Flix - Movie Search Web Application

Welcome to **Movie Flix**, your go-to web application for searching movies. This application allows users to search for movies by their name and offers filtering and sorting options to enhance the search experience. Dive into the details of your favorite movies with just a click!

# Objective
   Create a basic prototype of a movie search web application using React.js. The prototype should demonstrate the ability to fetch movie data from an external API and          display it in a simple user interface.

 
## Submission Guidelines:
- Display a list of popular movies by default.
- Display a list of popular movies by default.
- Implement the ability to fetch movie data from the OMDB API (http://www.omdbapi.com/) or any other movie database API of your choice.
- Display search results in a basic format, including movie titles and release years.
- When users click on a movie title from the search results, display a modal with additional details about the selected movie, such as plot summary, genre, and ratings.
## 🚀 Features

- **Search Functionality**: Find movies by entering their name.
- **IMDB API Integration**: Leverage the power of the IMDB API to fetch accurate and comprehensive movie data.
[- **Filter and Sort**: Refine your search results with filtering options and sort them by name or year.](url)
- **Detailed Movie Pages**: Click on any movie card to be redirected to a detailed page with more information about the movie.

## 🛠️ Tech Stack

- **HTML**: Structuring the content of the application.
- **CSS**: Styling the application for a visually appealing user experience.
- **React.js**: Building the dynamic and interactive user interface.
- **React Router DOM**: Managing the application's routing to navigate between pages.
- **Context API**: State management for sharing data across the application.
- **Chakra UI**: A modern UI component library for creating a responsive and accessible design.

## 📸 Screenshots

### Home Page
![Home Page](./moviflix/public/home-page.png)

### Search Results
![Search Results](./moviflix/public/search-result.png)

### Movie Details
![Movie Details](./moviflix/public/movie-details.png)

## 🏁 Getting Started

Follow these steps to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:
- Node.js
- npm (Node Package Manager)

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/bakshay96/Fluid-AI-Assignment-.git

2. **Navigate to the project directory**:
   ```sh
   cd moviflix

## Setting Up Project in local

### Frontend

#### 1) Setting up node environment

    1) navigate to the Frontend directory
    2) use node version 16 or 18.12.1 is recommended
    3) run the command npm install or npm i --legacy-peer-deps it will install all the required Dependencies with no errors.

### Setting Up Environment Variables
   Create a .env file in the root directory and add your OMDB API key:
  
   .env
 ```sh
    REACT_APP_OMDB_API_KEY=your_api_key_here
```

#### 2) Starting frontend on localhost

(make sure you are confirming the URL of the server)

    npm dev /*or*/ npm run dev

#### 3) Making a Production-ready folder

    npm run build

🌳 API Endpoints
Here's a brief summary of the available endpoints in the Movie Flix API:
```sh
GET [/api/search?query=<movie_name>&year=<year>](http://www.omdbapi.com/?t=iron+man&y=2016&plot=full): Search for movies by name (and optionally year).
```
```
GET [/api/movie/:id:](http://www.omdbapi.com/?i=tt6073592&plot=full) Get detailed information about a specific movie by its IMDB ID.
```
📂 Directory Structure
** Here's an overview of the project's directory structure:**
 ```sh
  movie-flix/
   ├── public/
   │   ├── index.html
   │   └── ...
   ├── src/
   │   ├── components/
   │   │   ├── InputSearch.jsx
   │   │   ├── Movie.jsx
   │   │   ├── useFetch.js
       |   └── ...
   │   ├── context/
   │   │   └── Context.jsx
   │   ├── pages/
   │   │   ├── Home.jsx
   │   │   ├── SingleMovie.jsx
   │   │   └── ...
   |   ├── Routes/
   │   │   ├── MainRoutes.jsx
   │   │   └── ...
   │   ├── App.js
   │   ├── main.js
   │   ├── index.css
   │   └── ...
   ├── .env
   ├── package.json
   └── README.md
```
## Tools used on this project

- Visual Studio Code
- Vite-JS template
- Netlify for frontend deployment

<br />

  ## Contact

If you want to contact me, you can reach me through the below handles. <br />


[![linkedin](https://img.shields.io/badge/Akshay_Bombatkar-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](www.linkedin.com/in/akshayb-profile)
[![GitHub](https://img.shields.io/badge/Akshay_Bombatkar-20232A?style=for-the-badge&logo=Github&logoColor=white)](https://github.com/bakshay96)

Thank you for using Movie Flix! We hope you enjoy discovering movies as much as we enjoyed building this application.


