"use strict";

var slack = require('./slack'),
    irc = require('./irc');

irc.client.on('message', function(nick, channel, message) {
  // ignore messages from Travis
  if (nick == "travis-ci") {
    return;
  }

  slack.send({
    user: nick,
    room: channel,
    text: message
  });
});
