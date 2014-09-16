# Soundwave

Soundwave is a tool to echo messages IRC channels to a Slack room.

![Example](http://i.imgur.com/4NiKyW3.png)

## Usage

To create a new Incoming Webhook in Slack, go to [https://slack.com/services/new/incoming-webhook](https://slack.com/services/new/incoming-webhook).

To configure Soundwave, copy `.env.example` to `.env` and edit it as necessary.

    $ cp .env.example

To run Soundwave, just use the `node` executable:

    $ node .

On Heroku, ensure you use the toolkit (or the site) to add a dyno to the 'bot' process:

    $ heroku ps:scale web=0 bot=1

## License

Apache 2.0. For more details, see the `LICENSE` file.
