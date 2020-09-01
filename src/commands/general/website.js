module.exports = {
    name: 'website',
    description: 'shows websites',
    execute(message){
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed();
        embed.setColor('#00ff00');
            embed.setTitle('Venture Tactics Web Links');
            embed.setAuthor('VenTac Support');
            embed.setThumbnail('https://i.imgur.com/z3Rw52h.png');
            embed.addFields(
                {name: 'DGL Clan Page', value: 'https://www.digitalgamingleague.co.za/clans/5646'},
                {name: 'DGL CSGO Team Page', value: 'https://www.digitalgamingleague.co.za/teams/6002'},
                {name: 'Dreamteam CSGO Page', value: 'https://dreamteam.gg/csgo/team/5ec241e7f751320f5a686895'},
                {name: 'DGL Dota 2 Team Page', value: 'https://www.digitalgamingleague.co.za/teams/8740'},
                {name: 'DGL LoL Team Page', value: 'https://www.digitalgamingleague.co.za/teams/8746'},
                {name: 'DGL Rainbow 6 Siege Team Page', value: 'https://www.digitalgamingleague.co.za/teams/8745'},
                {name : 'Video on how to become a moderator', value : 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}
            )
            message.channel.send(embed);
    }
}