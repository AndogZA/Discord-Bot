module.exports = {
    name : 'map_pool',
    description : 'randomly chooses maps to play',
    version: '1.1',
    execute(message,args){
        var mapPool = [
             ' dust2',' Mirage',' Vertigo',' Train',' Inferno',' Overpass',' Nuke',' Anubis',' Cache',' Office',' Agency'
        ];
        let numberArray = [];
        if(args <= 11){
            message.channel.send('The map(s) you will search for will be as follows:'); 
          for(let i = 0; i <= args; i++){
              let randomIndex = Math.floor(Math.random() * mapPool.length+1) + 1;
              let mapList = mapPool[randomIndex];
              message.channel.send(mapList);
              mapPool.splice(randomIndex,1);
          }
            message.channel.send('Good luck!');
        }else{
            return message.channel.send('Unless they have added more maps, there are only 11 to choose from...');
        }
    }
}