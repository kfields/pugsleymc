// config/webenv.js
const path = require('path')
const DotEnv = require('dotenv')
module.exports = function (name) {
  const envPath = path.resolve(__dirname, `${name}.env`)
  console.log(envPath)
  var parsedEnv = DotEnv.config({path: envPath}).parsed
  // console.log(parsedEnv)
  const env = Object.assign({}, process.env)
  Object.assign(env, parsedEnv)
  console.log(env)
    // Let's stringify our variables

  for (key in env) {
    if (typeof env[key] === 'string') {
      env[key] = JSON.stringify(env[key])
    }
  }

  return env
}