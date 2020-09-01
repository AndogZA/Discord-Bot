module.exports = {
    name: 'disconnect',
    description: "Disconnects the bot",
    execute(message, args){
        try{
        message.member.voice.channel.leave();
        }
        catch(err){
            console.log("Error in leave");
        }
    }
}