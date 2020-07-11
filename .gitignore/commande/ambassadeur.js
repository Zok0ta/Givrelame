const Discord = require("discord.js")
const colours = require("../colours.json")


module.exports.run = async (bot, message, args) => {
    message.delete();
    let aMember = message.guild.member(message.author);
    let role = message.guild.roles.cache.find(r => r.name == "Ambassadeur");
    if(aMember.roles.cache.has(role.id)) return message.channel.send("Vous avez déja le role ambassadeur")
    else {
    await aMember.roles.add(role.id).catch(console.error);
    let légat = message.guild.roles.cache.find(r => r.name == "Ambassadeur");
    // Logs: Tribun: <@&671882885527240719>
    message.channel.send("Le rôle t'a été affecté  " +`${aMember}, le `+ `${légat}` + "ou le " + `${légat}`+" va te prendre en charge ^^ v2");
    }
}

module.exports.help = {
    name : "ambassadeur"
