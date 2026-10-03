# StudyCalc

StudyCalc is a web-based calculator dashboard with Firebase authentication and multiple calculator modules. It includes user signup, login, email verification, password reset, and protected access to the calculator pages.

## Features

- Secure login, signup, and logout flow with Firebase Authentication
- Email verification requirement before login
- Password reset via Firebase email link
- Protected calculator pages that redirect unauthenticated users to the login screen
- Multiple calculator tools including:
  - Basic arithmetic calculator
  - Scientific calculator
  - EMI / loan calculator
  - Fixed deposit calculator
  - GST calculator
  - BMI calculator
  - Currency converter
  - Tip / discount calculator
- Result copy and PDF download actions
- Local history for each calculator

## Project Structure

- `index.html` — protected calculator entry page for authenticated users
- `calculator.html` — main calculator dashboard
- `login.html` — login page
- `signup.html` — account creation page
- `forgot-password.html` — password reset page
- `auth.js` — Firebase authentication logic and route protection
- `firebase-config.js` — Firebase web config placeholder
- `SETUP.md` — step-by-step Firebase setup instructions
- `firestore.rules` — Firestore rules (referenced in setup)
- `calculator code.html` — original backup version of the calculator page

## Tech Stack

- HTML, CSS, JavaScript
- Firebase Authentication
- Firestore
- GitHub Pages friendly static frontend

## Setup Instructions

1. Create a Firebase project in the Firebase Console.
2. Add a web app and copy the Firebase configuration values.
3. Enable Email/Password sign-in in Firebase Authentication.
4. Create a Firestore database and configure your Firestore security rules.
5. Open `firebase-config.js` and replace the placeholder values:

```js
export const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "PASTE_YOUR_MESSAGING_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};
```

6. Add the GitHub Pages domain to Firebase Authentication authorized domains.
7. Deploy the site using GitHub Pages or any static hosting provider.

## Firebase Setup Notes

- Follow the instructions in `SETUP.md` for the full setup flow.
- Do not expose private service-account credentials in the frontend.
- Only use Firebase client config values in the web app.

## Authentication Flow

- Users can sign up through `signup.html`.
- A Firebase email verification is sent after registration.
- Users must verify their email before logging in.
- On successful login, the app redirects to `calculator.html`.
- If an unauthenticated user opens `calculator.html` or `index.html`, they are redirected to `login.html`.
- Logging out redirects users back to the login page.

## Usage

1. Open `signup.html`.
2. Create an account.
3. Verify your email from the Firebase email link.
4. Sign in from `login.html`.
5. Access the calculator dashboard.

## Important

This project is designed as a static frontend app. It is intended to run through a browser and should be connected to Firebase for authentication and database services.

## License

This project does not currently include a license file. Add one if you want to define explicit usage terms for the project.

## Contributing

Pull requests and improvements are welcome. If contributing, keep the project static and frontend-friendly, and ensure Firebase configuration stays secure.
