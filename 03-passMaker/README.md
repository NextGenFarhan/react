# Password Maker

**PassMaker** is a simple and secure password generator web application built using **React**.  
It allows users to generate strong passwords of a required length with options to include **numbers** and **special characters**.

---

## Features

- Generate passwords of customizable length
- Option to include:
  - Numbers (0–9)
  - Special characters (!@#$%^&* etc.)
- Instant password regeneration on option change
- Copy generated password to clipboard
- Clean and responsive UI


## Tech Stack
- React
- JavaScript (ES6+)
- Tailwind CSS


##  React Hooks Used

### `1. useState`
        Used to manage application state such as:
        - Password length
        - Inclusion of numbers
        - Inclusion of special characters
        - Generated password
### `2. useCallback`
        Used to memoize the password generation function to prevent unnecessary re-creation of the function on every render.
### `3. useEffect`
        Automatically regenerates the password whenever dependencies like length, number option, or character option change.
### `4. useRef`
        Used for handling direct DOM interactions such as copying the generated password to the clipboard.



## License

This project is open-source and free to use.
