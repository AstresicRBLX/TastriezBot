const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.RichEmbed()
            .setTitle("Hello, I'm Tastriez official Manager bot.")
            .setDescription("I'm the main bot of Tastriez. I am mostly used for administrative purposes.")
            .setColor(`#b01224`)
            .setThumbnail(botIcon)
            .addField("Bot was created on", bot.user.createdAt)
            .setAuthor("Tastriez Manager - Bot")
            .setFooter("© 2019 Created by Astresic");

        return message.channel.send(botEmbed);

}

module.exports.help = {
 name: "info"
}