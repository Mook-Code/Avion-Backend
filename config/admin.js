module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env ( "API_TOKEN_SALT", "B3NxIGxPZMqQ5JVQ1dhK8w=="),
  },
});