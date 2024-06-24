# Contact Manager

## Overview

This project is a small contact manager application designed to demonstrate the integration of a Flask backend with a React frontend. The application allows users to perform basic CRUD (Create, Read, Update, Delete) operations on their contact list, providing a simple and efficient way to manage contact information.

## Technologies Used

- **Backend**: Flask
  - A lightweight WSGI web application framework in Python.
  - Manages the API endpoints for CRUD operations.
  - Handles data storage and retrieval.
- **Frontend**: React
  - A JavaScript library for building user interfaces.
  - Provides a dynamic and responsive UI for managing contacts.
  - Communicates with the Flask backend through RESTful APIs.

## Features

- **Add Contacts**: Users can add new contacts with details like name, phone number, and email.
- **View Contacts**: Display a list of all contacts with their details.
- **Update Contacts**: Edit the information of existing contacts.
- **Delete Contacts**: Remove contacts from the list.
- **Search Contacts**: Search through the contact list for specific entries.

## Setup and Installation

### Prerequisites

- Python 3.x
- Node.js and npm

### Backend (Flask)

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>/backend
   ```
2. **Create a virtual environment**:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. **Install the required packages**:
   ```bash
   pip install -r requirements.txt
   ```
4. **Run the Flask server**:
   ```bash
   flask run
   ```

### Frontend (React)

1. **Navigate to the frontend directory**:
   ```bash
   cd ../frontend
   ```
2. **Install the required packages**:
   ```bash
   npm install
   ```
3. **Run the React development server**:
   ```bash
   npm start
   ```

## Usage

Once the setup is complete, open your web browser and navigate to `http://localhost:3000` to access the contact manager application. The React frontend will interact with the Flask backend to perform the desired operations.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure your code follows the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgements

- Flask documentation: https://flask.palletsprojects.com/
- React documentation: https://reactjs.org/docs/getting-started.html

Feel free to reach out if you have any questions or suggestions. Enjoy managing your contacts efficiently with this Flask-React contact manager!
