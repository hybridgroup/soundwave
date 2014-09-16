"use strict";

var irc = require('irc');

var config = require('./config');

var client = new irc.Client(config.irc.server, config.irc.nick, {
  channels: config.irc.channels,
  port: 6697,
  debug: true,
  showErrors: true,
  secure: true,
  autoConnect: false,
  autoRejoin: true,
  retryCount: 3
});

client.addListener('error', function(message) {
  console.log("ERROR: " + message);
});

console.log("Connecting to IRC");

client.connect(function() {
  console.log("irc connect called back", arguments);
});

module.exports = {
  client: client
};
