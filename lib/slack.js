"use strict";

var rest = require('restler');

var config = require('./config');

var url = "https://" + config.slack.server + "/services/hooks/incoming-webhook?token=" + config.slack.token;

var send = function(msg) {
  var data = {
    username: "" + msg.user + " in " + msg.room,
    text: msg.text,
    channel: config.slack.channel
  };

  console.log(data);

  rest.post(url, {
    headers: { "Content-type": "application/json" },
    data: JSON.stringify(data)
  });
};

module.exports = {
  send: send
}
