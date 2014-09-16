"use strict";

var rest = require('restler');

var config = require('./config');

var url = "https://" + config.slack.server + "/services/hooks/incoming-webhook?token=" + config.slack.token;

var send = function(msg) {
  var text = "*" + msg.room + " - " + msg.user + ":* " + msg.text,
      data = { text: text };

  console.log(text);

  rest.post(url, {
    headers: { "Content-type": "application/json" },
    data: JSON.stringify(data)
  });
};

module.exports = {
  send: send
}
