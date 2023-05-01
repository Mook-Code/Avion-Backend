module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('PGHOST', 'containers-us-west-70.railway.app'),
      port: env.int('PGPORT', 8050),
      database: env('PGDATABASE', 'railway'),
      user: env('PGUSER', 'postgres'),
      password: env('PGPASSWORD', '5MG5hyAFETihoaWDqHIV'),
      ssl: env.bool(true),
    },
    app: {
      keys: env.array("APP_KEYS")
    }
  },
});
