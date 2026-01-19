# Shortly
## Overview
An API-driven web application built with React and Tailwind CSS that allows users to shorten URLs and view link analytics through a clean, responsive interface.

This project integrates with a custom-built backend API, demonstrating full-stack architecture and async API integration.

## Why this project
This project was built to demonstrate how frontend applications interact with custom backend APIs, handle asynchronous data, and present results clearly to users. It showcases the complete request-response cycle in a full-stack application while maintaining a simple and maintainable codebase.

## Key Features
* URL shortening via custom REST API
* Click analytics tracking with view stats functionality
* Async request handling with loading and error states
* Responsive layout built with Tailwind CSS
* Clean UI feedback for user actions

## Technical Decisions
- React was used for component-based UI development and predictable state handling.
- Vite was chosen for fast project setup, development speed, and modern tooling.
- Tailwind CSS enabled rapid styling while keeping styles consistent and maintainable.
- API logic is isolated to a dedicated file to keep UI components focused and readable.

## API
This project uses a custom-built REST API for URL shortening and analytics.

**Backend Repository:** [Backend Repo](https://github.com/Naz1804/shorturl-api.git)

**API Documentation:** See backend README for full endpoint documentation

The API integration logic can be found in:
```bash
src/api.js
```
This file handles request configuration and keeps API-related logic separate from UI components.

## Challengs & Solutions
- Async state handling: Managing loading, success, and error states required careful UI updates to ensure clear feedback for users.
- Error handling: Implemented graceful fallbacks when API requests fail to avoid broken UI states.
- Separation of concerns: Abstracted API calls into a dedicated module to keep components simple and reusable.

## Improvements
* Add frontend dashboard for detailed analytics visualization
* Persist user's shortened links using authentication system
* Introduce automated tests for API interactions
* Improve accessibility for form inputs and feedback states

# Installation
First thing first is you need `node.js` installed. Use this _[Link](https://nodejs.org/)_ to be sent to the `node.js` downloads.

Clone the repository:
   
```sh
git clone https://github.com/Naz1804/url_shortening_shortly.git
```

Change directory:
```bash
cd url_shortening_shortly
```

To install the dependencies, run the following command in your terminal:

```sh
npm install
```

Then:

```sh
npm run dev
```

Then you should have the project running !!
