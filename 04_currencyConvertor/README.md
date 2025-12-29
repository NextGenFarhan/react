# Currency Converter Project
A simple React application to convert amounts between different currencies using real-time exchange rates.

---
## Project Aim
The main goal of this project is to provide a simple and interactive way for users to convert amounts from one currency to another. It fetches the latest exchange rates and allows users to swap currencies or select their desired currencies from dropdowns.

---
## Features
    - Convert amounts between multiple currencies
    - Real-time exchange rates using a custom hook
    - Swap functionality to quickly switch "From" and "To" currencies
    - User-friendly and responsive UI
    - Controlled inputs for better state management
    - Reusable components for scalability

---
## App Component
The main component of the project. Handles state, conversion logic, and renders the UI.
### Purpose
- Handles currency conversion logic
- Renders two `InputBox` components for "From" and "To" currencies
- Fetches exchange rates using the `useCurrencyInfo` hook
- Converts the amount on button click
- Allows swapping between "From" and "To" currencies
### Main Functions
- `swap()` → swaps "From" and "To" currencies and their amounts
- `convert()` → calculates the converted amount using the current exchange rate
### Usage
- Renders two `InputBox` components for user input
- Includes a swap button to exchange "From" and "To" currencies
- Includes a convert button to calculate and display the converted amount

---
## useCurrencyInfo (Custom Hook)
A custom React hook to fetch currency exchange rates.
### Purpose
- Takes a currency code as input (e.g., USD, INR, EUR)
- Fetches the latest exchange rates for the given currency
- Returns exchange rate data for use in components
### React Hooks Used
1. `useState` → stores fetched currency data
2. `useEffect` → calls the API whenever the input currency changes

---
## InputBox Component
A reusable component for entering amounts and selecting currencies.
### Purpose
- Displays an input box for the amount
- Displays a dropdown to select a currency
- Works as a controlled component (parent handles state)
### Usage
- Used in the App component to take user input for "From" and "To" currencies

---
## Tech Stack
- React (Functional Components & Hooks)
- Tailwind CSS for styling
- Custom hooks for API integration
- JavaScript (ES6+)


### flow
App
 ├─ useCurrencyInfo(from) → fetches currencyInfo
 ├─ InputBox (From) → updates amount & from
 ├─ Swap Button → swaps from/to & amounts
 ├─ InputBox (To) → shows converted amount, can change 'to' currency
 └─ Convert Button → calculates convAmount using currencyInfo
