# Metered Messages Backend

The backend for Metered Messages is built with Express.js, providing a robust API for managing products, subscriptions, and users. Below is the list of available endpoints and their functionalities.

## Getting Started

To get started with the backend server locally, follow these steps:

1. Clone the repository:

```bash
   git clone https://github.com/KhizarSa/metered-messaging-backend
   cd metered-messages-backend
```

Install the required dependencies:

```
npm install
```

To run the code:

```
npm start
```

# API Endpoints

## User Routes (/api/v1/user)

- **POST /signup**: Sign up a new user.
- **POST /login**: Log in a user.
- **GET /logout**: Log out the current user.
- **PATCH /updateMyPassword**: Update the current user's password (requires authentication).
- **GET /me**: Get the current user's information (requires authentication).
- **GET /isUser/:email**: Check if a user exists by email.
- **PATCH /updateMe**: Update the current user's information (requires authentication).
- **DELETE /deleteMe**: Delete the current user's account (requires authentication).

# Admin Routes

- **GET /**: Get all users (admin only).
- **POST /**: Create a new user (admin only).
- **GET /**:id: Get a user by ID (admin only).
- **PATCH /**:id: Update a user by ID (admin only).
- **DELETE /**:id: Delete a user by ID (admin only).

## Subscription Routes (/api/v1/subscription)

- **PATCH /update-messages/:email**: Update the message count for a user by email.
- **POST /checkout-session**: Create a checkout session for Stripe payments.

## Product Routes (/api/v1/product)

- **GET /**: Get all products.
- **GET /:id**: Get a product by ID.
- **DELETE /:id**: Delete a product by ID.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (assumed from MERN stack)
- **Authentication**: JWT
- **Payment Processing**: Stripe
- **Messaging**: Socket.io

# Create `config.env` in the `./` Directory and Add These Variables:

```env
DATABASE="MongoDb Database URL"
DATABASE_PASSWORD="Database Password"
PORT=4500
NODE_ENV="development"
JWT_SECRET="Your Secret"
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90
STRIPE_SECRET="Your stripe secret"
STRIPE_WEBHOOK_SECRET="Your stripe webhook secret"
```

# Note:

I have used **ngrok** for a secure tunnel and used following command to get secure url which is then used by webhook to confirm payment:

```
ngrok config add-authtoken your_token

ngrok http http://your-backend-url
```
