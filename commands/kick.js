const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

        if (!kickUser) return message.channel.send("**User cannot be found**");

        var reason = arguments.join(" ").slice(22);

        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("**Insufficient permissions; you cannot execute this command**");

        if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**ERROR: You cannot kick this user**");

        var kick = new discord.RichEmbed()
            .setDescription("Kick")
            .setColor("#c8c3e6")
            .addField("Kicked user", kickUser)
            .addField("User kicked by", message.author)
            .addField("Reason", reason);

        var kickChannel = message.guild.channels.find("name", "admin-logs")
        if (-kickChannel) return message.guild.send("Cannot find (log) channel.")

        message.guild.member(kickUser).kick(reason);


        kickChannel.send(kick);

        return;

}

module.exports.help = {
 name: "kick"
}