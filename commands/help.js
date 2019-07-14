const discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    try {

        var text = "**Tastriez Manager Bot** \n\n **__Command List__** \n .help | Bot will DM you with all commands \n .hi | Let the bot say hello to you \n .kick | Allows you to kick someone from the server, only server admins can run this command \n .ban | Bans someone from the server, only server admins can run this command \n .info | Gives you information about the bot \n .serverinfo | Gives you the total amount of players and the date you joined the server \n .clear <AMOUNT> | Clears a specific amount of messages in a specific channel, only server admins can run this command \n .ping | Shows you the current ping in ms";

        message.author.send(text);

        message.channel.send(":white_check_mark: **Sent, check your DMs.**")

    } catch (error) {
        message.channel.send("**Oops, something went wrong! :(**")
    }

}

module.exports.help = {
    name: "help"
}