# FLIX 🎥  
A feature-rich, responsive, and user-friendly movie management platform. FLIX allows users to explore, add, and manage movies while providing a seamless experience with modern web technologies.

---

## 🌟 Features  

### Public Features  

- **Home Page**:  
  - Dynamic Navbar with login/register options (conditional rendering based on user authentication).  
  - Eye-catching Static Slider with meaningful content.  
  - **Featured Movies**: Displays top 6 highest-rated movies with a "See Details" button.   
  - Footer with essential links and information. 
  - **Dark/Light** Theme Toggle for enhanced user experience. 

### Private Features  

- **Add Movie Page**:  
  - Secure route where authenticated users can add movies using a form with validation:  
    - Movie Poster URL, Title, Genre, Duration, Release Year, Rating, and Summary.  
    - Includes star rating functionality (`react-simple-star-rating`).  
  - Data is validated, stored in the database, and displayed on the All Movies page.  

- **Movie Details Page**:  
  - Displays all details of a selected movie.  
  - Actions include:  
    - **Delete Movie**: Removes the movie and navigates to the All Movies page.  
    - **Add to Favorite**: Adds the movie to the user's favorite list. 
    - **Edit Movie**: Any published Movie's information anyone can update.  


- **Update Movie Page**:  
  - Secure route where users can edit movie details using the same form as the Add Movie page.  


- **Favorites Page**:  
  - Shows all favorite movies for the logged-in user.  
  - Includes a "Delete Favorite" button to remove movies from the favorite list.  



### Authentication  

- **Login and Register Pages**: 
  - Built with `react-hook-form` for robust form management.  
  - Login: Email and password fields with Google sign-in functionality.  
  - Registration: Name, Email, Photo URL, and Password with strong validation.  
  - Dynamic redirection based on authentication state.  
  - **React-hook-form** for Login and Register forms

### Additional Features  

- **Search Functionality**: Search movies by title on the All Movies page.   
- **Spinner**: Loading spinner for enhanced user experience during data fetch operations.  
- **Toast Notifications**: Success/error messages for all CRUD operations using SweetAlert.

---

## 🛠️ Technologies Used  

- **Frontend**:  
  - React.js with React Router for navigation.  
  - Tailwind CSS for responsive and modern UI.  
  - `react-hook-form` for efficient form management.  
  - `react-simple-star-rating` for star rating functionality.  

- **Backend**:  
  - Node.js with Express.js for API development.  
  - MongoDB for data storage and retrieval.  

- **Authentication**:  
  - Firebase Authentication for secure login and registration.  

---

 
   - [Clint side Live link:-](https://flixmovieprojectbymubin.surge.sh/)  
   - [Clint side Repo Link:-](https://github.com/programming-hero-web-course2/b10-a10-client-side-Mubin33)  
   - [Server side Repo Link:-](https://github.com/programming-hero-web-course2/b10-a10-server-side-Mubin33)  
   - [Server side API Link:-](https://server-nu-seven-78.vercel.app)  
