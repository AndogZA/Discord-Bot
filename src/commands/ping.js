module.exports = {
    name: 'ping',
    description: "Says Pong!",
    execute(message, args){
        message.channel.send('Pong!');
    }
}