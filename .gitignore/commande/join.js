const Discord = require("discord.js")
const colours = require("../colours.json")

module.exports.run = async (bot, message, args) => {
    message.delete();
    let aMember = message.guild.member(message.author);
    let role = message.guild.roles.cache.find(r => r.name == "Recrutement");
    let Recruteur = message.guild.roles.cache.find(r => r.name == "Recruteur");
    if(aMember.roles.cache.has(role.id)) return message.channel.send("Vous avez déja ce role")
    else {
    await aMember.roles.add(role.id).catch(console.error);
    
    message.channel.send("Le rôle t'a été affecté " +`${aMember}, un `+ `${Recruteur} va te prendre en charge ^^`);
    }
}

module.exports.help = {
    name : "join"
}
