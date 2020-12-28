# Nuvalence React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation Steps

You’ll need to have Node >= 8.10 and npm >= 5.6 on your machine.\
Download https://nodejs.org/en/ and run installer.

Run `npm i` to install dependencies.

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run test`

Launches the test runner using `jest`. \
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Summary

In looking at the details, I aimed to make a single page app that is reminiscent of the Mac Address Book/Contacts app.\
It has a sidebar with the list of all users sorted by first name.\
It has a main window on the right with details of the selected users.\
On load it always does a call to the `randomuser.me` website and loads in the users.

### Features implemented

- Loads in users from api
- Displays them on them in list
- User is selectable from list and loads in the main area for more details
- Added tests for the UserList component

### Discussion

I moved all the back-end API endpoint calls into a service layer.\
I believe this helps keep all API dependencies in one location and cleaner to trace.

I arranged the application to start from the `App.js`, and route into the actual Address Book part.\
The AddressBook component is then further broken down into the Sidebar and Main components.\
The AddressBook component also is the engine that does calls to the service layer to load users on load and \
pass down users to Sidebar and selected user to Main component.

I used Styled Components as a way to keep the minimal CSS in a clean organized structured way.

### More Time Features To Do

- Better styling (timing depends on the complexity of the design)
- More tests