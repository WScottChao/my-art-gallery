# **My Art Gallery**


A web application where users can explore, collect, and save art pieces from the Metropolitan Museum of Art API.


## Technologies Used
The project uses the following technologies:


### 1. Front-end:
React (with React Hooks for state management)

React Router (for page navigation)

Material UI (for modern UI components)

Axios (for API requests)


### 2. Back-end API:
Spring Boot: Project Framework
MyBatis-Plus: database operations
Redis: Cache Management
Sa-Token: user authentication and login management
RestTemplate: Calling the Metropolitan Museum API
SQLite / MySQL: Database Storage


## Prerequisites
Before running the project, ensure you have:

Node.js and npm installed.

Download Node.js here: https://nodejs.org/


## Installation and Setup

### 1. Clone the Repository:

git clone <your-repository-url>

cd my-art-gallery


### 2. Install Dependencies:

npm install


### 3. Configure API URLs:

Create a .env file at the root level and add the following configuration:

REACT_APP_API_BASE_URL=http://localhost:8083


### 4. Run the Development Server:

Front-end: npm start

Back-end: put the goview_admin-0.0.1-SNAPSHOT.jar and goview.db under the same folder

run the jar with java17, also run redis


The application will run at:

http://localhost:3000


## How to Use

### Sign Up:

Go to /sign-up and create an account.

![image](https://github.com/user-attachments/assets/59ac7046-4ded-4bf0-b2ae-89a5983d1a03)


### Sign In:

Log in with your registered credentials.

![image](https://github.com/user-attachments/assets/754fcc21-c8cc-4797-8c66-2cb5b1dc2e38)


### View Artworks:

Explore random and recommended art pieces on the home page.

![image](https://github.com/user-attachments/assets/e9dbe63e-1031-4b36-badc-0d1949ec8964)


![image](https://github.com/user-attachments/assets/f3beb62a-48b4-4d9d-9e88-4e2c07b86156)


### Artwork Details Page:
Get Big photos of Artwork and details below.

![image](https://github.com/user-attachments/assets/6949ef6d-1981-449d-9997-1b29a936c5d5)


### Add to Collection:

Click the star icon on an artwork to save it to "My Collection."


### View "My Collection":

Navigate to "My Collection" to view your saved artworks.

### Search for the artworks:

Using the searching bar for finding artworks with names.

### Personalized Recommender System:

Possibility recommendations based on exhibits that have been in a person's personal collection, recommending exhibits that are more likely to be liked based on various dimensions of the exhibit and increasing weights


_____________________________________________________________
### GITHUB LINK: https://github.com/WScottChao/my-art-gallery
### Sichao Wang sw6287@nyu.edu
### Jianhao Ge jg7942@nyu.edu
