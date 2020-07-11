const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let messageArray = message.content.split(" ");
    let Givrelame = message.guild.roles.cache.find(r => r.name == "Givrelame");
    if(messageArray.length == 4){
        message.delete()
        message.channel.send(`${Givrelame}` + ", le règne du sang est programmé !**")
        let aEmbed = new Discord.MessageEmbed()
        .setTitle("Guerre territorial du "+messageArray[1]+" "+messageArray[2]+" "+messageArray[3])
        .setAuthor('Givrelame', 'https://cdn.discordapp.com/attachments/689447634355617868/728997445060657192/2.png')            
        .setColor('RANDOM')
        .addFields(
            { name: 'Guerriers de la Givrelame !', value: "Comme d'habitude on répond par le bon émot !" , inline: true },
            { name: "Comment s'incrire" , value: "Présent :white_check_mark:  Absent :x:  Retard :rabbit:  Incertains :question:", inline: true },
        )
            
        message.channel.send(aEmbed)
    } 
    else 
        message.channel.send("Erreur dans la commande (Exemple pour l'utiliser : /gt [jour de la semaine] [nombre du mois] [année], tout cela séparer par des espaces")

}

module.exports.help = {
    name : "gt",
    name : "Gt",
    name : "GT"
}
