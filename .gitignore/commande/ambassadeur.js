const Discord = require("discord.js")
const colours = require("../colours.json")


module.exports.run = async (bot, message, args) => {
    message.delete();
    let aMember = message.guild.member(message.author);
    let role = message.guild.roles.cache.find(r => r.name == "Ambassadeur");
    if(aMember.roles.cache.has(role.id)) return message.channel.send("Vous etes déja inscrit en tant qu'ambassadeur")
    else {
    await aMember.roles.add(role.id).catch(console.error);
    let légat = message.guild.roles.cache.find(r => r.name == "Légat");
    let Tribun = message.guild.roles.cache.find(r => r.name == "Tribun");
    message.channel.send("Le rôle t'a été affecté  " +`${aMember}, le `+ `${légat}` + " ou le " + `${Tribun}`+" va te prendre en charge ^^");
    }
}

module.exports.help = {
    name : "ambassadeur",
    name : "Ambassadeur"
}
