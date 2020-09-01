const Discord = require('discord.js');
const ytdl = require("ytdl-core");
const bot = new Discord.Client();

const token = '';

const PREFIX = '$';

const fs = require('fs');

bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./src/commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./src/commands/${file}`);
    bot.commands.set(command.name, command);
}
const generalFiles = fs.readdirSync('./src/commands/general/').filter(file => file.endsWith('.js'));
for(const file of generalFiles){
    const general = require(`./src/commands/general/${file}`);
    bot.commands.set(general.name, general);
}
const musicFiles = fs.readdirSync('./src/commands/music/').filter(file => file.endsWith('.js'));
for(const file of musicFiles){
    const music = require(`./src/commands/music/${file}`);
    bot.commands.set(music.name, music);
}

bot.on('ready', () => {
    console.log('This bot is online');
})
bot.on('message', message => {
    if (message.content.substring(0,1) == PREFIX) {
        var args = message.content.substring(1).split(" ");
        var servers = {};
    switch (args[0]) {
        case 'ping':
            bot.commands.get('ping').execute(message, args);
        break;
        case 'website':
            bot.commands.get('website').execute(message);
        break;
        case '1v1codes':
            bot.commands.get('Codewar').execute(message,args);
        break;
        case 'pickamap':
            bot.commands.get('map_pool').execute(message,args[1]);
        break;
        case 'isgay': //checks if person is gay
            bot.commands.get('Gaydar').execute(message, args);
        break;
        case 'help':
            bot.commands.get('help').execute(message);
        break;
        case 'purge':
            if(!args[1]) return message.reply('Error. Please define second argument')
            message.channel.bulkDelete(args[1] + 1);
            break;
        case 'play': //queue music
        // function play(connection, message){
        //     var server = servers[message.member.id];
        //     server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));
        //     server.queue.shift();
        //     server.dispatcher.on("end", function(){
        //         if(server.queue[0]){
        //             play(connection, message);
        //         }else{
        //             connection.disconnect();
        //         }
        //     })
        // }
        // if(!args[1]){
        //   message.channel.send('Enter a song URL to play ($play <link>)');
        //   return;
        // }
        // if(!message.member.voice.channel){
        //   message.channel.send('You must be in a channel to play music');
        //   return;
        // }
        // if(!servers[message.member.id]) servers[message.member.id] = {
        //     queue : []
        // }
        // var server = servers[message.member.id];
        // server.queue.push(args[1]);
        // if(!message.member.voice.connection) message.member.voice.channel.join().then(function(connection){
        //     play(connection, message);
        // })
        bot.commands.get('music').execute(message, cmd, servers);
        break;
        case 'skip':
            var server = servers[message.guild.id];
            if(!servers.queue[0]) return message.channel.send('There is nothing playing')
                server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));
            if(server.dispatcher) server.dispatcher.end();
            //bot.commands.get('skip').execute(message, cmd);
        break;

        case 'stop':
            var server = servers[message.guild.id];
            if(message.member.voice.connection){
                for(var i = server.queue.length -1;i >= 0; i--){
                    server.queue.splice(i,1);
                }
                server.dispatcher.end();
                console.log('stopped the queue')
            }
            if(message.member.connection) message.member.voice.connection.disconnect();
        break;
        case 'join':
            bot.commands.get('join').execute(message, args);
        break;
        case 'leave':
            bot.commands.get('disconnect').execute(message, args);
        break;
        }
    }
})
bot.login(token);