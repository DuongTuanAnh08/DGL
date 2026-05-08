const fs   = require('fs');
const path = require('path');

// Parse .env
const envPath = path.join(__dirname, '..', '.env');
const env = {};
fs.readFileSync(envPath, 'utf8')
  .split('\n')
  .forEach(line => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const [key, ...rest] = trimmed.split('=');
    env[key.trim()] = rest.join('=').trim();
  });

// Đọc template, replace placeholder, ghi ra config.js
const templatePath = path.join(__dirname, '..', 'js', 'config.template.js');
const configPath   = path.join(__dirname, '..', 'js', 'config.js');

let config = fs.readFileSync(templatePath, 'utf8');
Object.entries(env).forEach(([key, val]) => {
  config = config.replaceAll(`%%${key}%%`, val);
});

fs.writeFileSync(configPath, config, 'utf8');
console.log('config.js updated from .env');
console.log('  CONTACT_EMAIL =', env.CONTACT_EMAIL);
