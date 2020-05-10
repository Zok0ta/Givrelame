module.exports.run = async (bot, message, args) => {
 
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Il me faut la permision pour supprimer les messages")
    if (!args[0]) return message.channel.send("Il faut spécifier le nombre de message a supprimer")

    if (args[0] > 99) return message.channel.send("Il y a trop de messages a supprimer")

    message.channel.bulkDelete(args[0]).then(() => {
         message.channel
              .then(msg => msg.delete(6000))
    })

}

module.exports.help = {
    name : "Purge"
}