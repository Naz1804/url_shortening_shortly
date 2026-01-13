# Shortly
## Overview
An API-driven web application built with React and Tailwind CSS that allows users to shorten URLs and view link-related data through a clean, responsive interface.

This project focuses on aysnc API integration, UI state management, and user feedback, reflecting common frontend patterns used in production applications.

## Why this project
This project was built to demonstrate how frontend aplications interact with third-party APIs, handle asynchronous data, and present results clearly to users while maintaining a simple and maintainable codebase.

## Key Features
- URL shortening via external API
- Async request handling with loading and error states
- Responsive layout built with Tailwind CSS
- Clean UI feedback for user actions

## Technical Decisions
- React was used for component-based UI development and predictable state handling.
- Vite was chosen for fast project setup, development speed, and modern tooling.
- Tailwind CSS enabled rapid styling while keeping styles consistent and maintainable.
- API logic is isolated to a dedicated file to keep UI components focused and readable.

## API
This project uses an external URL shortening API.
To know more about the API go on this `API documentation` _[link](https://tinyurl.com/app/dev)_.

The API integration logic can be found in:
```bash
src/api.js
```
This file handles request configuration and keeps api-related logic separate from UI components.

## Challengs & Solutions
- Async state handling: Managing loading, success, and error states required careful UI updates to ensure clear feedback for users.
- Error handling: Implemented graceful fallbacks when API requests fail to avoid broken UI states.
- Separation of concerns: Abstracted API calls into a dedicated module to keep components simple and reusable.

## Improvements
- Add link analytics and usage history
- Persist shortened links using local storage or a backend
- Introduce automated tests for API interactions
- Improve accessiblity for form inputs and feedback states

# Installation
First thing first is you need `node.js` installed. Use this _[Link](https://nodejs.org/)_ to be sent to the `node.js` downloads.

1. Then you can clone the code locally by copying the `HTTPS` from the `<> Code` button.

![image](https://github.com/Naz1804/url_shortening_shortly/assets/121124109/88d634c1-da23-4311-b5b5-5038c4b12047)

2. Open a terminal window or open your code editor that you can open up a terminal.
3. Navigate to the directory where you want to clone the repository.
4. Then type `git clone` paste the `HTTPS` after that.
   
```sh
git clone https://github.com/Naz1804/url_shortening_shortly.git
```


To install the dependencies, run the following command in your terminal:

```sh
npm install
```

Then:

```sh
npm run dev
```

Next you will see this:

![image](https://github.com/Naz1804/todolist/assets/121124109/10254502-15b6-43a2-b1dc-ede50c3cd804)

You have two options to either `ctrl` + click on the `http://localhost:5173/` or press `o` to open up the `localhost`.

You can always press `h` to see what more commands they are.

Then you should have the project running !!
