# Minesweeper

## Demo

[Minesweeper by Kamil](https://kamilstawik.github.io/minesweeper/)

![Project screenshot1](/src/images/screenshot1.jpg)

## About me

Hi! My name is Kamil. At the begining of 2021 I had a brilliant idea. I started to learn programming. Now I'm looking for my first job as a Frontend Developer.

## About this project

This is one of my favourite classic game - Minesweeper.
I start this project few weeks ago and I am still working on it.
Right now it has only few basic features.

## How to play

To start game left click the field that You want to check or change difficulty level under the grid.
U can't hit mine in Your first move. A timer will start counting the seconds of your game.
If a number appears, it indicates the number of mines in the eight surrounding squares.
If a square is blank, there are no mines within the eight squares surrounding it.
Minesweeper is a game of deduction. If you guess where a mine is, right-click the square to place a flag on it marking it as a mine.
Right-click a square twice to place a question mark on it if you think it might contain a bomb but you’re not sure.
If you click a square and a bomb appears the game is over and You lost. Reveal all squares without a mine to win a game.
All the hidden bombs are exposed if you hit a mine. Start a new game by clicking face over the grid, or change difficulty level under the grid.

### version: 0.2.0
Now user won't pick mine field in first move. First field is always safe and surrounded by safe fields (like in classic minesweeper game).

### version: 0.3.0
Now user can mark field as question by double right click.

### version: 0.4.0
Now if field is marked as flag it can't be clicked.
Some performance upgrade.

### version: 0.5.0
I've added Redux-Saga to my project.
Best times are now kept in localStorage.

### version: 0.6.0
Score board display now five best times on each difficulty level instead of one.

### version: 0.7.0
User no longer have to use emoji in browser to run this game.
Emoji was changed for .png files.

## Technologies and conventions used in project:
* HTML
* CSS
* JS/ES6+
* React.js
* [Create React App](https://github.com/facebook/create-react-app).
* Redux
* Styled-components
* CamelCase

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.