module.exports = {
    name: 'join',
    description: "Joins the bot to a general",
    execute(message, args){
        try{
            if(!message.member.voice.channel) return message.channel.send("You are not in a channel")
            message.member.voice.channel.join();
        }
        catch(err){
            console.log("Error in join");
        }   
    }
}