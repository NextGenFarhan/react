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
