# OTP Demo app with firebase

This is a demo app for OTP verification using firebase.

## How to run

1. Clone the repo
2. Run `npm install`
3. Run `npm start`
4. Open `http://localhost:3000` in your browser

## How to deploy

1. Run `npm run build`
2. Copy the contents of `build` folder to your server

## How to use

1. Enter your phone number
2. Click on `Send OTP`
3. Enter the OTP received
4. Click on `Verify OTP`
5. If the OTP is correct, you will see a success message

## How to use with firebase

1. Create a firebase project
2. Enable phone authentication
3. Copy the firebase config
4. Paste the config in `src/firebase.js`
5. Run the app
6. Follow the steps above

## How to use with your own backend

1. Create a backend API to send OTP
2. Create a backend API to verify OTP
3. Replace the API calls in `src/otp.js` with your own API calls
4. Run the app
5. Follow the steps above

## How to use with your own UI

1. Replace the UI in `src/App.js` with your own UI
2. Follow the steps above

## How to use with your own UI and backend

1. Replace the UI in `src/App.js` with your own UI
2. Replace the API calls in `src/otp.js` with your own API calls
3. Follow the steps above


