module.exports.music = {
    name: 'music',
    description: "plays music",
    execute(message, arg, servers){
        const Discord = require("discord.js");
        const ytdl = require("ytdl-core");
        function play(connection, message){
          	var server = servers[message.member.id];
          	server.dispatcher = connection.play(ytdl(server.queue[0], {filter: "audioonly"}));
          	server.queue.shift();
          	server.dispatcher.on("end", function(){
              	if(server.queue[0]){
                	play(connection, message);
              	}else{
                	connection.disconnect();
              	}
          	})
      	}
      	if(!arg[1]){
        	message.channel.send('Enter a song URL to play ($play <link>)');
        return;
      	}
      	if(!message.member.voice.channel){
        	message.channel.send('You must be in a channel to play music');
        return;
      	}
      	if(!servers[message.member.id]) servers[message.member.id] = {
          	queue : []
        }
      	var server = servers[message.member.id];
      	server.queue.push(arg[1]);
      	if(!message.member.voice.connection) message.member.voice.channel.join().then(function(connection){
        	play(connection, message);
      	})    
    }
};
module.exports.skip = {
	
}