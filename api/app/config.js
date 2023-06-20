export default {
  development: {
    type: 'development',
    port: 3000,
    mysql: {
      host: '172.20.10.5',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'cda'
    }
  },
  production: {
    type: 'production',
    port: 3000,
    mysql: {
      host: 'your_production_host',
      port: 3306,
      username: 'your_username',
      password: 'your_password',
      database: 'your_database'
    }
  }
  
}
