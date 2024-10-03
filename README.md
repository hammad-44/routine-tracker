# Routine Tracker React App

Routine Tracker is a productivity app built with React for tracking daily routines and tasks. The app allows users to add, update, delete, and complete tasks. Tasks can be synced across devices using Firebase, and it is integrated with Firebase Authentication for secure login.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Firebase Configuration](#firebase-configuration)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Demo
You can see a live demo of the app hosted on Vercel [here](https://instabyhammad.vercel.app).

## Features
- Add, update, and delete tasks
- Mark tasks as complete
- Sync tasks across devices using Firebase
- User authentication with Firebase Authentication
- Responsive design for mobile and desktop
- Optimized for performance

## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js installed on your local machine
- Firebase account and project

### Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/routine-tracker.git
    ```

2. Navigate to the project directory:
    ```bash
    cd routine-tracker
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory to store your Firebase configuration variables. Refer to [Firebase Configuration](#firebase-configuration) for the setup.

5. Start the development server:
    ```bash
    npm start
    ```

The app should now be running on `http://localhost:3000`.

## Usage

- **Adding Tasks:** Users can add new tasks with titles, descriptions, and deadlines.
- **Updating Tasks:** Users can edit existing tasks from the task list.
- **Deleting Tasks:** Users can delete tasks they no longer need.
- **Marking Tasks as Complete:** Users can mark tasks as completed, which will move the task to a completed section.

## Firebase Configuration

The app is integrated with Firebase for authentication and database functionality. To set up Firebase, follow these steps:

1. Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable Firebase Authentication (Email/Password).
3. Enable Firebase Realtime Database.
4. Copy your Firebase config credentials (API Key, Auth Domain, Database URL, etc.) from the Firebase Console.
5. Add the following variables to your `.env` file:
    ```env
    REACT_APP_FIREBASE_API_KEY=your-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
    REACT_APP_FIREBASE_DATABASE_URL=your-database-url
    REACT_APP_FIREBASE_PROJECT_ID=your-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=your-app-id
    ```
6. Initialize Firebase in your app by updating the `firebase.js` file with the environment variables.

## Technologies Used
- **React**: Frontend framework for building user interfaces.
- **Firebase**: Backend-as-a-service for authentication and real-time database.
- **Vercel**: Platform for hosting the app.
- **Chakra UI**: Component library for building accessible and responsive UIs.
- **Node.js**: Runtime environment for executing JavaScript server-side.

## Contributing

Contributions are welcome! Please follow these steps if you'd like to contribute to the project:

1. Fork the project.
2. Create a new feature branch: 
    ```bash
    git checkout -b feature/your-feature
    ```
3. Commit your changes:
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature/your-feature
    ```
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
