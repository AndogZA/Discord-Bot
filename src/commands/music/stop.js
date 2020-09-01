module.exports = {
    name: 'stop',
    Description: "Stops the bot",
    execute(){
        Dispatcher.Destroy();
    }
}