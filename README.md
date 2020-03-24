Just testing graphql.

Playground: http://localhost:8000/graphql

You need to create a .env file and place it in the server directory. It must include:

- SECRET=a random string to seed web auth tokens
- DATABASE=your postgres database name
- DATABASE_USER=postgres super user eg: postgres
- DATABASE_PASSWORD=password for super user
