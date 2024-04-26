<template>
  <div>
    <div id="one">score:{{score}}</div>
    <h2>Record:{{Record}}</h2>
    <button @click="countTime">测试</button>
  </div>

</template>

<script>
export default {
    name:"App",
    data(){
        return {
            score:0,
            times:0,
            start: '',
            stop: '',
            Record: 0
        }
    },
    methods:{
        countTime(){
    
            
            if(this.times%2 === 0){
                this.start = new Date();
                this.Record = 0
            }
            else{
                this.stop = new Date();
                this.Record = Number(this.stop.getTime()) - Number(this.start.getTime());
            }
            this.times++;
            if(this.score < this.Record && this.Record <= 1000){
                this.score = this.Record
            }
        }
    },
    components:{
        Record(){

        }
    }
}
</script>

<style>
    #one {
        background-color: yellow;
        text-align: center;
        color: blue;
    }
</style>