# Chatter-bot
Create posts and chat rooms with this web app.

## Features
- Create custom posts up to 255 characters in length
- Create custom rooms for topical discussion
- Create user accounts with password hashing

## Technology
Frontend
- React
- styled-components

API
- Express
- MySQL
- Node.js

## How It's Made
Brief overview of how each technology is used.

## Frontend
Client side uses create-react-app command to set up a React project.

#### Function Components & Hooks
React function components use the useState Hook for managing state,
and the useEffect Hook for making AJAX requests to the backend with the Fetch API.
All forms have their data and state controlled using Hooks.

#### Forms
Three text input forms enable user sign-up, log-in and chat room creation features.
An additional textarea input form adds posts to the backend.
All forms are validated before being sent to ensure correct data enters the database.

#### styled-components
Styling uses styled-components with most layout and spacing accomplished with CSS flex. 
The HiddenWindow component reveals all forms and can be assigned to drop up or down with props. 
Keyframe animations provide the transitions for when the HiddenWindow's child components are active.

## Backend
Backend is a REST API set up with the express-generator command using a MySQL database.

#### Routing
HTTP Request URLs are separated by feature. 
Ergo /users handles all query requests to the users table and 
likewise for the /posts and /rooms routes.
All data queried from the database returns to the frontend as JSON.

#### Database
Database consists of three tables to store data for each corresponding feature.
The user_id and room_id foreign keys connect posts to specific chat rooms and users for sorting and displaying.
All user passwords are hashed with the bcrypt library for secure storage.
