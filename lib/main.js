"use strict";

var slack = require('./slack'),
    irc = require('./irc');

irc.client.on('message', function(nick, channel, message) {
  slack.send({
    user: nick,
    room: channel,
    text: message
  });
});
