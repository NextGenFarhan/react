# React Login/Profile App
A simple React app demonstrating **login functionality** using **Context API**. Users can log in with a username and password, and the profile will display a welcome message after login.

---
## Features
- Login form with username and password
- Profile component shows login status
- Uses React **Context API** to manage global user state
- Simple and easy to understand


# React Login/Profile App

A simple React application that demonstrates **user login functionality** using the **Context API**. The app allows users to log in with a username and password, and displays a personalized welcome message on a profile page after login.

---

## Project Overview

This project is designed to showcase:
1. **React Context API** for global state management  
   - Allows sharing user data (like username and password) across different components without passing props manually.
2. **Login functionality**  
   - Users can input their username and password.  
   - After submission, the user data is saved in the global state.
3. **Profile component**  
   - Displays a welcome message if the user is logged in.  
   - Shows a "please login" message if no user has logged in yet.

---
## How It Works
1. **Context Provider**  
   - A special component that stores the current user’s data.  
   - It wraps the entire app, so all components can access the user state easily.
2. **Login Form**  
   - Users enter their username and password.  
   - On clicking the submit button, the data is saved in the Context Provider.  
3. **Profile Display**  
   - Reads the user data from Context.  
   - If a user is logged in, it shows a welcome message with the username.  
   - If no user is logged in, it prompts the user to log in first.

---
## Key Concepts Demonstrated
- **React State (`useState`)**: To manage the form inputs and user login status.  
- **React Context (`createContext`, `useContext`)**: To share data globally across components.  
- **Conditional Rendering**: Profile component shows different messages based on whether the user is logged in.  
- **Event Handling (`onSubmit`)**: Captures the login form submission and updates the user state.  

---
## Learning Outcomes
After exploring this project, a user can:
- Understand how to manage global state in React using Context API.  
- Build a simple login system in React.  
- Use conditional rendering to show different UI based on user state.  
- Understand the flow of data from form inputs → state → context → display.  

---

## Summary

This app is a **beginner-friendly React project** for learning:

- How to handle forms and input values.  
- How to share data across components without prop drilling.  
- How to conditionally render content based on state.  

It’s a great starting point for anyone wanting to learn **React state management** and **basic login systems**.


#### Note
To learn about context read the readme file in context folder