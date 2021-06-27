# Ragan's Starter Project for a web infrastructure full-typescript monorepo with React/Express

## Github Secrets config

Add heroku api key under `HEROKU_API_KEY` secret

Add production api's heroku app name under `HEROKU_APP_NAME_PROD_API` secret

Add development api's heroku app name under `HEROKU_APP_NAME_DEV_API` secret

Add strapi's heroku app name under `HEROKU_APP_NAME_STRAPI` secret

Add the email associated with the heroku account under `HEROKU_EMAIL` secret


## Local env config
use this command to create the strapi database (remember to add this as DB_NAME env var in apps/strapi/.env)

```
sudo -u postgres psql -c "
  CREATE DATABASE \"plural2-strapi\";
"
```
