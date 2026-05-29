# AiTHOS Health Passport Landing Page

Static GitHub Pages landing page for the teen / young adult AiTHOS Health Passport concept.

## Concept

**Health Independence Begins Here.**  
Health Passport helps teens create a lightweight health identity in under 5 minutes, add it to a mobile wallet, invite a parent to complete thoughtful details, and build toward a lifelong Healthograph.

## Files

- `index.html` — landing page markup
- `styles.css` — responsive AiTHOS-styled design system
- `script.js` — prototype form behavior and Passport preview

## GitHub Pages setup

1. Create a new GitHub repository.
2. Upload these files to the repository root.
3. Go to **Settings → Pages**.
4. Set source to **Deploy from branch**.
5. Choose `main` and `/root`.
6. Save and wait for GitHub Pages to publish.

## Apple Wallet note

The "Add to Apple Wallet" button is a prototype placeholder. A real Apple Wallet pass requires:

- Apple Developer account
- Pass Type ID certificate
- Backend pass-generation endpoint
- Signed `.pkpass` file generation
- Secure user/session handling

Recommended production route: connect the button to a backend endpoint such as `/api/create-pass` that generates and returns a signed PassKit package.

## Privacy note

This prototype intentionally avoids collecting detailed medical data. Do not use it to collect sensitive health data without a secure backend, appropriate consent flows, privacy policies, and legal review.
