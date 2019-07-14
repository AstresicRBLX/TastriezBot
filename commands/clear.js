const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    // -clear [number]

    if (!message.member.hasPermissions("MANAGE_MESSAGES")) return message.reply("**ERROR: Insufficient permissions, you do not have permissions to use this command.**")

    if (!args[0]) return message.reply("**cannot clear messages. Format is -clear <AMOUNT>**");

    if (Number.isInteger(parseInt(args[0]))) {

        var amount = parseInt(args[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if(args[0] == 0){

               message.channel.send(`**I cannot delete 0 messages**`).then(msg => msg.delete(3000));

            } else if (args[0] == 1){

                message.channel.send(`**Deleted 1 message.**`).then(msg => msg.delete(3000));  
            
            } else{

                message.channel.send(`**Deleted ${args[0]} messages.**`).then(msg => msg.delete(3000));

            }
        });

    } else {
        return message.channel.send("**Please enter a number.**")
    }


}

module.exports.help = {
    name: "clear"
}