# GraphQL API with Prisma

This project demonstrates a GraphQL API built with Node.js, Express, and Prisma as the ORM.  It includes basic setup and project structure.  Authentication is not included in this example to keep it concise.

## Project Structure


graphql-prisma/
├── README.md
├── package.json
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── server.js
│   ├── resolvers/
│   │   └── Query.js
│   ├── typeDefs/
│   │   └── schema.graphql
│   └── index.js
└── .env


## Setup

1.  **Install Node.js:** Ensure you have Node.js (version 16 or higher) installed.
2.  **Initialize Project:**

    
    npm init -y
    

3.  **Install Dependencies:**

    
    npm install express express-graphql graphql prisma @prisma/client dotenv
    npm install -D nodemon
    

4.  **Configure Prisma:**

    
    npx prisma init --datasource-provider postgresql
    

    (Adjust the datasource provider based on your database.  This example uses PostgreSQL).

    Edit the `.env` file and set the `DATABASE_URL` environment variable to your database connection string. For example:

    
    DATABASE_URL="postgresql://user:password@host:port/database?schema=public"
    

5.  **Define Prisma Schema:**  Edit `prisma/schema.prisma` to define your data model (see example in `files` array).
6.  **Run Migrations:**

    
    npx prisma migrate dev --name init
    

7.  **Generate Prisma Client:**

    
    npx prisma generate
    

## Running the Application


npm run dev


## Endpoints

*   GraphQL endpoint: `/graphql`