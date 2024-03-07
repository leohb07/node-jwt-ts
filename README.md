## API - NodeJs, Redis, MongoDB, Typegoose, Docker and JWT

* Model
  - Sign up for a new account with a Name, Email, Password and Password Confirm fields;
  - Login with the Email and Password credentials;
  - Get the profile information only if he is logged in;
  - Admin will be able to get all the users in the database;

* Routes
  - GET /api/users
  - GET /api/users/me
  - POST /api/auth/register
  - POST /api/auth/login