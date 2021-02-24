class Player {
    constructor(){
        this.index = null;
        this.name = null;
    }

    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref('contestantCount').once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display;
        }
    }
    getCount(){
        var contestantCountRef = database.ref('contestant');
        contestantCountRef.on("value" ,(data)=>{
            contestantCount = data.val();
        })    
    }

 updateCount(count){
     database.ref('/').update({
         contestantCount: count
     });
 }

 update(){
    var contestantIndex = "players/player" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getcontestantInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
} 