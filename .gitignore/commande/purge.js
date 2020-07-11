module.exports.run = async (bot, message, args) => {
 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Il me faut la permision pour supprimer les messages")
    if (!args[0]) return message.channel.send("Il faut ajouter le nombre de message à supprimer")
        message.delete();
    if (args[0] > 99) return message.channel.send("Il y a trop de messages a supprimer")
          message.delete();
    message.channel.bulkDelete(args[0]).then(() => {
              then(msg => msg.delete(6000))
    })

}

module.exports.help = {
    name : "purge",
    name : "Purge"
}
