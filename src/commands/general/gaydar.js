module.exports = {
    name: 'Gaydar',
    description: "determins if you are gay or not",
    version: '1.2',
    execute(message, args){
        var random = Math.floor(Math.random() * 101)
        var memberID = message.member.user.username;
            message.channel.send(memberID + ' is ' + random + '% gay :rainbow_flag:');
    }
}