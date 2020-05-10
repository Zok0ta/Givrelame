const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const config = require("./config.json")
const colours = require("./colours.json")
 
bot.commands = new Discord.Collection();

bot.login(config.token);

fs.readdir("./commande/", (err, files) => {
    if(err) console.log(err);
 
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Aucune commande trouver.")
        return;
    }
 
    jsfile.forEach((f, i) => {
        let props = require(`./commande/${f}`);
        console.log(`${f} Ok !`);
        bot.commands.set(props.help.name, props)
    })
})


bot.on("ready", async () => {
    console.log("(Grade de la porte) : Vous surveille");
    bot.user.setActivity("Pour Givrelame !")
});
 

bot.on("message",  async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
 
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    
    let commandFile = bot.commands.get(command.slice(prefix.length));
    if(commandFile) commandFile.run(bot, message, args)
});

bot.on("guildMemberAdd", member => {

    let newEmbed = new Discord.MessageEmbed()

            .setTitle(`Bienvenu chez Givrelame`)
            .addField("* - *","Si tu es ici pour te faire recruter : /Join ")
            .addField("* - *","Si tu es ici en tant qu'ambassadeur : /Ambassadeur")
            .setColor('RANDOM')
    member.guild.channels.cache.get("671890685967859733").send(newEmbed)
});
