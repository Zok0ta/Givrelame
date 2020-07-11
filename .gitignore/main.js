const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require("fs");
const config = require("./config.json")
const colours = require("./colours.json")
 
bot.commands = new Discord.Collection();

bot.login(process.env.TOKEN);

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

                .setTitle(`Bienvenue chez Givrelame`)
                .setAuthor('Givrelame', 'https://cdn.discordapp.com/attachments/689447634355617868/728997445060657192/2.png')            
                .setColor('RANDOM')
                .addFields(
                    { name: 'Tu souhaites nous rejoindre ?', value: "Tape donc /Join et je te laisse t'installer dans le channel Recrutement" , inline: true },
                    { name: "Tu es ici en tant qu'ambassadeur ?" , value: "Tape donc /Ambassadeur et la direction te prendre en charge", inline: true },
                )
    member.guild.channels.cache.get("671890685967859733").send(newEmbed)
});
