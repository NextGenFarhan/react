# 1) Full library (using Create React App)
    -> npm create react-app myFolder   # create a full React project
    -> cd myFolder                     # go into project folder
    -> ls                              # package.json should be there
    -> npm run start                   # start the development server
    # You can add more folders/libraries later using various commands

# 2) Using Vite (or Parcel)
    = npm create vite@latest           # initialize a Vite project
        - projectName: 
        - framework: <react/react-ts/etc>
        - varient:   <js/ts>
    cd <projectName>
    npm install                      # install node_modules
    npm run dev                       # start the development server


# Adding tailwind
    1. npm install tailwindcss @tailwindcss/vite
    2. Add import tailwindcss from '@tailwindcss/vite' and plugin[tailwindcss()] in config.js file
    3. add @import "tailwindcss"; in index.css

# installing react router dom 
    1. npm install react-router-dom

# Installing Redux in the project
    1. npm install @reduxjs/toolkit
    2. npm install react-redux
    3. **Create a Redux Slice**  
        Create a file (e.g., `features/todoSlice.js`) and define your slice using `createSlice`. Include `initialState` and reducers for actions like add, remove, or update. Export the actions and the reducer.
    4. **Configure the Redux Store**  
        Create a file (e.g., `app/store.js`) and use `configureStore` to combine your reducers. Export the store.
    5. **Provide the Store to React App**  
        In your `main.jsx` or `index.jsx`, wrap the `<App />` component with `<Provider store={store}>` so all components can access the Redux store.
    6. **Use Redux State in Components**  
        Use `useSelector` to read state from the store and `useDispatch` to send actions. Components like Todos or AddTodo can now interact with the global state.
    7. **Dispatch Actions from Components**  
        When an event occurs (e.g., form submit or button click), call the action using `dispatch(action(payload))` to update the state in the store. All subscribed components will automatically re-render with the new state.
    8. **Result**  
        Your React app now has a centralized global state managed by Redux Toolkit. Any component can read or update state easily, making your app scalable and organized.
