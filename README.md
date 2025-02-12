
# Book Store App  

## Overview  

The **Book Store App** is a web application designed to provide users with an intuitive platform to add, browse, search, and manage books efficiently.  

## Features  

- **Add Book**: Easily add new books with details like title, author, and genre.  
- **Book Browsing**: Explore a wide range of books categorized by genres.  
- **Search Functionality**: Quickly find books using the search feature.  
- **Delete Book**: Remove books from the collection as needed.  

## Technologies Used  

- **Frontend**: HTML, CSS, JavaScript  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  

## Installation  

1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/gaveshbatham/Book_store.git
   cd Book_store
   ```  

2. **Install Dependencies**:  
   Navigate to both the `frontend` and `backend` directories and run:  
   ```bash
   npm install
   ```  

3. **Configure Environment Variables**:  
   Create a `.env` file in the `backend` directory and add the following variables:  
   ```ini
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```  

4. **Start the Application**:  
   - Start the backend server:  
     ```bash
     cd backend
     npm start
     ```  
   - Start the frontend application:  
     ```bash
     cd frontend
     npm start
     ```  

   The application will be accessible at [http://localhost:3000](http://localhost:3000).  

## Contributing  

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.  
