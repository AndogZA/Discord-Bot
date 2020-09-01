module.exports = {
    name : "help",
    descripion : "gives a list of commands",
    execute(message,args){
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed();
        embed.setColor('00ff00');
        embed.setTitle('VenTac Bot Commands');
        embed.setThumbnail('https://i.imgur.com/z3Rw52h.png');
        embed.addFields(
            {name : 'help', value : 'I give a list of available commands.'},
            {name : 'join', value : 'I will join the channel you are in.'},
            {name : 'play <youtube url>', value : 'I will play a song for you.'},
            {name : 'skip', value : 'I will stop playing a song for you.'},
            {name : 'leave', value : 'I will leave your channel, but its okay. I understand :('},
            {name : 'isgay', value : 'I will tell you your sexuality'},
            {name : 'website', value : 'I give you a list of important websites'},
            {name : 'pickamap <number of maps to pick>', value : 'I randomly choose maps for you to play in CSGO'}
        )
        message.channel.send(embed)
    }
}