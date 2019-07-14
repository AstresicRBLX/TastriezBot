const discord = require("discord.js");
const botConfig = require("./botconfig.json")

const fs = require("fs");

const bot = new discord.Client();
bot.commands = new discord.Collection();

fs.readdir("./commands/", (err, files) => {

    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");

    if (jsFiles.length <= 0) {
        console.log("Couldn't find any files")
        return;

    
    }

    jsFiles.forEach((f, i) => {

        var fileGet = require(`./commands/${f}`)
        console.log(`File ${f} has been loaded.`)

        bot.commands.set(fileGet.help.name, fileGet);

    })
});


bot.on("ready", async () => {

    console.log(`${bot.user.username} is marked as online!`)

    bot.user.setActivity("| .help ", { type: "PLAYING" })

})

// ping pong
bot.on("message", async message => {

    if (message.author.bot) return


    if (message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

     
      var commands = bot.commands.get(command.slice(prefix.length));

      if(commands) commands.run(bot,message, arguments);


    if (command === `${prefix}hi`) {

    }
    //bot info
    if (command === `${prefix}info`) {

        
    }
    // serverinfo
    if (command === `${prefix}serverinfo`) {



    }
    //kick command
    if (command === `${prefix}kick`) {

        //-kick @astresic reason // 

        var kickUser = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));

        if (!kickUser) return message.channel.send("**User cannot be found**");

        var reason = arguments.join(" ").slice(22);

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Insufficient permissions; you cannot execute this command**");

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
    //ban command
    if (command === `${prefix}ban`) {

        var banUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

        if (!banUser) return message.channel.send("**User cannot be found**");

        var reason = arguments.join(" ").slice(22);

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Insufficient permissions; you cannot execute this command**");

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


});

bot.login(botConfig.token);

 client.login(process.env.BOT_TOKEN);