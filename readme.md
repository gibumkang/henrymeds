## How to run this application

1. Please `git clone` this repository.
2. Change directory into `backend` and `npm install`.
3. Run the server by running `yarn dev`
4. While keeping the server running, please open a new terminal and change directory into `frontend` and `yarn` to install dependencies.

## How to use the application

The user will be logged in as a provider by default. The provider can select availability by using a date and time selector. Once the availability is confirmed, then the user can switch as a client by selecting the top right hand button. Upon selection, a modal will prompt with dummy credentials to log the user in as a client.

The client can use the calendar in order view available dates they can book an appointment with a provider. Once a valid date is selected, then the client can confirm an appointment with a provider.

Currently, this is built as a RESTful API with basic CRUD ability to create (POST) and GET providers. Providers can then update work schedules via a PUT request. The backend application with built with Nodejs and Express. The frontend application was built with React, custom hooks, and tailwindcss for styling.
