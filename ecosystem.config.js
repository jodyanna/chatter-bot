module.exports = {
  apps: [{
    name: 'chatter-bot',
    script: './api/bin/www'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-23-101-242.us-east-2.compute.amazonaws.com/',
      key: '~/.ssh/chatter-bot.pem',
      ref: 'origin/master',
      repo: 'git@github.com:jodyanna/chatter-bot.git',
      path: '/home/ubuntu/chatter-bot',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
