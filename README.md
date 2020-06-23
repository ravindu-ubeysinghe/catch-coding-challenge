# Description

This is a coding challenge done for Catch.com.au

# Decisions and assumptions made

-   Despite this being a single app, most components were decided to be made pure and reusable.
-   Decided to use theme-ui (Emotion JS) with inline styling over styled components as it was faster, clearer and appropriate for a app of this scale
-   Decided to use flexbox instead of grid due to the need of supporting IE 11
-   Decided to use local component based state management as the state did not need to be shared amongst multiple components
-   Decided to do a bit of groundwork in setting up the project, including setting up a global theme and prettier to demonstrate how I would usually set up a project
-   Was required to utilise a CORS response header altering proxy to deal with CORS issues associated with the provided JSON endpoint: https://cors-anywhere.herokuapp.com/

# How to run the project

1. Download the zip file either from email or from GitHub: https://github.com/ravindu-ubeysinghe/catch-coding-challenge/archive/master.zip
2. Extract locally and navigate to the directory with a terminal
3. Run `npm start` or `npm run build` to create a deployable bundle
4. Run `npm run test` to bulk run all test suits

# Useful commands

-   `npm start` - starts the dev server
-   `npm run test` - runs all unit test suits
-   `npm run build` - creates a production build
