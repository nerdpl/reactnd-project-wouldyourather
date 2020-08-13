# "Would You Rather" App

## Table of Contents

* [Project info](#project_info)
* [List of files](#list_of_files)
* [Installation](#installation)
* [Components](#functions)
* [Other files](#other_files)

## Project_Info

The subject of the project was to create a React app that uses Redux for state menagement. The app works as a quiz where users can log in, answer, view and create questions. It also has a leaderboard where they can compare their scores.

## List_Of_Files

src\actions\ : authedUser.js , questions.js , shared.js , users.js
src\components\ : App.js , Home.js , LeaderBoard.js , LoginPage.js , Menu.js , NewQuestion.js , NoMatch.js , Question.js , Questions.js , ViewQuestion.js
src\middleware\ : index.js , logger.js
src\reducers\ : authedUser.js , index.js , questions.js , users.js
src\utils\ : _DATA.js
src\ : index.js
src\ : index.css

public\index.html

\package-lock.json
\package.json
\README.md
\yarn.lock

## Installation

"npm install" to install the project.
"npm start" to start. 

## Components

- App.js
Main application component. Renders LoginPage and Menu. Uses React Router.

- Home.js
Component renders home page, where user can switch between viewing answered and unanswered questions (Questions component). Questions are sorted from the most recent ones.

- LeaderBoard.js
Creates a leaderboard where users are sorted from the one that has the highest score.

- LoginPage.js
Component renders a simple login page (without authentification).

- Menu.js
Top menu with access to all the app funcions including logging out.

- NewQuestion.js
Renders a form to create a new question. After submition it returns the user to the home page.

- NoMatch.js
404 page. It is rendered when the user types in non matching URL in the address bar or when the user tries to view the question that doesn't exist.

- Question.js
Renders a question with two answer options. Depending on if the logged in user already answered the question it shows an "answer" button or a "view results" button. Upon clicking one of those buttons it renders ViewQuestion component.

- Questions.js
Component renders a questions list (Question component) depending on the switch buttons a list of unanswered (default) or answered questions.

- ViewQuestion.js
Shows a question depending on if the logged in user already answered it or not. If the user alredy answered it, it will show statistics and user's chosen option. If the question is still unanswered it enables you to choose an option and submit it.

## Other_Files

- _DATA.js
Mock API file with initial data and methods to send data. This file was delivered as a startup code.