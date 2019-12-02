new Vue({
    el:'#app',
    data:{
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning:false,
        turns:[]
    },
    methods:{
        startNewGame:function () {
            this.gameIsRunning=true;
            this.playerHealth=100;
            this.monsterHealth=100;
            this.turns=[];
        },
        attack:function () {
            //Check Option
                if(this.checkPlayOtion()){
                    return ;
                }
                damage=this.inputDamage(5,12);
            this.monsterHealth -= damage;
                this.turns.unshift({
                    isPlayer:true,
                    textLog:'Player hit Monster for '+damage
                });
            this.monsterAttack();
            this.checkPlayOtion();
        },
        specialAttack:function () {
            if(this.checkPlayOtion()){
                return ;
            }
            //Moster
            damage=this.inputDamage(8,18);
            this.monsterHealth -=damage;

            this.turns.unshift({
                isPlayer:true,
                textLog:'Player hit Monster for '+damage
            });
            //Player
            this.monsterAttack();
            this.checkPlayOtion();
        },
        health:function () {
            if(this.playerHealth >70){
                return false;
            }else if(this.playerHealth < 60){
                this.playerHealth +=10;
            }else{
                this.playerHealth=70;
            }
            this.turns.unshift({
                isPlayer:true,
                textLog:'Player heal for 10 '
            });
            this.monsterAttack();
        },
        giveUp:function () {
            this.gameIsRunning=false;
            this.startNewGame();
            alert('You Lost');
        },
        inputDamage:function (minDamage,maxDamage) {
            return Math.max(Math.floor(Math.random()* maxDamage)+1,minDamage);
        },
        monsterAttack:function(){
            damage=this.inputDamage(5,12);
          this.playerHealth -=damage;
            this.turns.unshift({
                isPlayer:false,
                textLog:'Monster hit Player for '+damage
            });
          this.checkPlayOtion();
        },
        checkPlayOtion:function () {
            if(this.monsterHealth <= 0){
                if(confirm('You won! New Game?')){
                    this.startNewGame();
                }
                else{
                    this.gameIsRunning=false;
                }
                return true;
            }else if(this.playerHealth <=0){
                if(confirm('You Lost! New Game?')){
                    this.startNewGame();
                }
                else{
                    this.gameIsRunning=false;
                }
                return true;
            }
            return ;

        }
    }
});
//neu game bat dau hien cac control