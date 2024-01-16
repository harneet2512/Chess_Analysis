# Chess Web Application

Welcome to the Chess Web Application! This application is built using Django for the backend, React for the frontend, and incorporates HTML, CSS, and JavaScript for a seamless chess-playing experience. The project also utilizes the Stockfish chess engine to suggest the three best possible moves after each move made by the player.


<p align="center">
  <img src="https://github.com/harneet2512/Chess_Analysis/assets/62827797/9ede0a40-4034-4593-a6f7-21c220279b11" width="500" alt="Demo GIF">
</p>



## Features

- **Custom Game Logic:** The chess application implements custom logic for each chess piece without relying on external chess libraries.
- **Stockfish Integration:** The backend communicates with the Stockfish chess engine to provide insightful suggestions for the three best moves in response to player moves.
- **User Authentication:** The application includes a secure user authentication system with a signup and signin flow.

## Setup Instructions

 ### Clone the Repository:
   bash <br>
   git clone https://github.com/your-username/chess-web-app.git  <br>
   cd chess-web-app <br>

## Backend Setup:

### Create a virtual environment and install dependencies:
bash  <br>
Copy code  <br>
python -m venv venv  <br>
source venv/bin/activate  # On Windows, use 'venv\Scripts\activate'  <br>
pip install -r requirements.txt  <br>

### Apply migrations and start the Django development server:
bash  <br>
Copy code  <br>
python manage.py migrate  <br>
python manage.py runserver  <br>

## Frontend Setup:  
### Navigate to the frontend directory:
bash  <br>
Copy code  <br>
cd frontend  <br>

### Install dependencies and start the React development server:  <br>
bash <br>
Copy code <br>
npm install <br>
npm start <br>
Connect with Stockfish:  <br>

Ensure that the Stockfish chess engine is installed on your system.
Update the configuration in the backend to point to the Stockfish executable.
Access the Application:

Open your browser and go to http://localhost:3000 to access the chess web application.


## Note:
Currently working on deploying the web application with new features like learning chess openings and playing against engine.
