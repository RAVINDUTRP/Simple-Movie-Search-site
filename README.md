# Movie Book

🎬 Movies Book – Simple Movie Search Web App
RV Movies is a lightweight and beginner-friendly movie search app built using HTML, CSS, and JavaScript.
It uses the OMDb API to fetch real-time movie details based on user input.
Type any movie name, hit Search, and instantly see the poster + IMDb rating.
Perfect starter project for anyone learning APIs and JavaScript DOM manipulation.

🚀 Features


🔍 Search movies by title


🖼️ Displays real movie poster


⭐ Shows IMDb rating instantly


⚡ Uses XMLHttpRequest for API calls


📱 Clean and minimal UI


🎯 Beginner-friendly code structure



🛠️ Technologies Used


HTML5


CSS3


JavaScript (Vanilla JS)


OMDb API



📂 Project Structure
/
├── index.html
├── index.css
├── index.js
└── README.md


🔧 How It Works


User enters a movie name.


JavaScript sends a GET request:
https://www.omdbapi.com/?apikey=YOUR_API_KEY&t=movie_name



API returns JSON containing movie details.


Poster + IMDb rating are displayed in the UI.



▶️ Getting Started
1. Clone the repository
git clone https://github.com/YOUR_USERNAME/RV-Movies.git

2. Open the project
Simply open index.html in your browser.
3. Replace the API key (optional)
If you want your own:
let url = "https://www.omdbapi.com/?apikey=YOUR_KEY&t=" + movieName


⭐ Improvements You Can Add (Future Upgrades)
You can also list these in your README:


✔ Dark/light mode


✔ Display more details (genre, year, actors)


✔ Search suggestions


✔ Loading animation


✔ Error message when movie not found


✔ Replace XMLHttpRequest with fetch()



📸 Screenshots (Optional Section)
Add images of your UI here:
![Screenshot](./assets/screenshot.png)


🙌 Author
Ravindu
Simple movie app built for learning APIs + JS.

If you want, I can also create a polished GitHub repo description, tags, or even shields badges (like version, license, tech stack).
