const dotenev = require('dotenv');

dotenev.config({ path: '.env.deploy' });

const {
  DEPLOY_USER,
  DEPLOY_HOST,
  DEPLOY_REF  = 'origin/master',
  DEPLOY_PATH,
} = process.env;

module.exports = {
  apps: [
    {
    name   : "app-frontend",
    script : ".src/index.js"
    },
  ],

  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: 'https://github.com/ivankudriashov/web-plus-pm2-deploy.git',
      path: DEPLOY_PATH,
      'post-deploy': 'cd frontend && npm i && npm run build && cd build',
    },
  },
};
