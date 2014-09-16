"use strict";

var dotenv = require('dotenv');
dotenv.load();

var fetch = function(property) {
  if (process.env.hasOwnProperty(property)) {
    return process.env[property];
  }

  throw new Error("Unable to find configuration value: " + property);
};

module.exports = {
  irc: {
    server: fetch("SOUNDWAVE_IRC_SERVER"),
    nick: fetch("SOUNDWAVE_IRC_NICK"),
    channels: fetch("SOUNDWAVE_IRC_CHANNELS").split(',')
  },

  slack: {
    server: fetch("SOUNDWAVE_SLACK_SERVER"),
    token: fetch("SOUNDWAVE_SLACK_TOKEN")
  }
}
