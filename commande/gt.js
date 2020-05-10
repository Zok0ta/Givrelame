const Discord = require("discord.js")
const colours = require("../colours.json")

module.exports.run = async (bot, message, args) => {
    let messageArray = message.content.split(" ");
    if(messageArray.length == 4){
        message.delete()
        message.channel.send("**@Givrelame, le règne du sang est programmé !**")
        let aEmbed = new Discord.MessageEmbed()
            .setColor(colours.blue_dark)
            .setTitle("Guerre territorial du "+messageArray[1]+" "+messageArray[2]+" "+messageArray[3])
            .addField("* - *","Guerriers de Givrelame ! Voici le sondage GT du "+messageArray[1]+" "+messageArray[2]+" "+messageArray[3]+" !")
            .addField("* - *","Comme d'hab on répond par le bon émot !")
            .addField("* - *","Présent :white_check_mark:  Absent :x:  Retard :rabbit:  Incertains :question:")
            
            
        message.channel.send(aEmbed)
    } 
    else 
        message.channel.send("Erreur dans la commande (Exemple pour l'utiliser : /gt [jour de la semaine] [nombre du mois] [année], tout cela séparer par des espaces")

}

module.exports.help = {
    name : "gt"
}