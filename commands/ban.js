const discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

        if (!banUser) return message.channel.send("**User cannot be found**");

        var reason = arguments.join(" ").slice(22);

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**Insufficient permissions; you cannot execute this command**");

        if (banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**ERROR: You cannot ban this user**");

        var ban = new discord.RichEmbed()
            .setDescription("Ban")
            .setColor("#c8c3e6")
            .addField("Banned user:", banUser)
            .addField("User banned by:", message.author)
            .addField("Reason", reason);

        var banChannel = message.guild.channels.find("name", "admin-logs")
        if (-banChannel) return message.guild.send("Cannot find (log) channel.")

        message.guild.member(banUser).ban(reason);


        banChannel.send(ban);


        return;

}

module.exports.help = {
 name: "ban"
}