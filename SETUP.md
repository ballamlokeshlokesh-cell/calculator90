# StudyCalc Firebase Authentication Setup

## 1. Create Firebase project
1. Open Firebase Console: https://console.firebase.google.com/
2. Create a Firebase project.
3. Add a Web App (`</>`).
4. Copy the Firebase configuration object.

## 2. Enable Email/Password login
Firebase Console -> Authentication -> Sign-in method -> Email/Password -> Enable.

## 3. Create Firestore
Firebase Console -> Firestore Database -> Create database.
Then publish the rules from `firestore.rules`.

## 4. Add Firebase config
Open `firebase-config.js` and replace every `PASTE_...` value with the values from your Firebase Web App configuration.

## 5. Put these files in your GitHub repository
- `index.html` (protected calculator)
- `calculator.html`
- `signup.html`
- `login.html`
- `forgot-password.html`
- `auth.js`
- `firebase-config.js`
- `firestore.rules` (for reference/deployment)

You can keep `calculator code.html` as the original backup, but GitHub Pages should use `index.html` as the main page.

## 6. Add your GitHub Pages domain to Firebase
Firebase Console -> Authentication -> Settings -> Authorized domains.
Add your GitHub Pages host, for example:
`YOUR-USERNAME.github.io`

Do not put a service-account/private key in the website.

## 7. Test
1. Open `signup.html`.
2. Create an account.
3. Firebase sends an email-verification message.
4. Verify the email.
5. Open `login.html` and log in.
6. You are redirected to `calculator.html`.
7. Opening `index.html` or `calculator.html` without logging in redirects to `login.html`.
8. Logout returns to `login.html`.
9. Forgot Password sends a Firebase reset email.
