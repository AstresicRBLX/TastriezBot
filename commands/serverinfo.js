const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var icon = message.guild.iconURL;

    var serverEmbed = new discord.RichEmbed()
        .setDescription("Server Info")
        .setColor(`#b01224`)
        .setThumbnail(icon)
        .addField("Bot username:", bot.user.username)
        .addField("You joined the server at:", message.member.joinedAt)
        .addField("Membercount:", message.guild.memberCount);

    return message.channel.send(serverEmbed);

}

module.exports.help = {
 name: "serverinfo"
}