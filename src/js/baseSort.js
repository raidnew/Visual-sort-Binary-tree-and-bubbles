/**
 * Created by User on 04.12.2015.
 */
function BaseSort(){
    this.arrayForSort = [];
}

BaseSort.prototype.tick = function(){
    //addLog("tick");
}

BaseSort.prototype.cloneArray = function(){
    return this.arrayForSort.concat();
}

BaseSort.prototype.generateRandomArray = function(length){

    console.log("BaseSort.prototype.generateRandomArray");

    this.arrayForSort = [];
    for(var i = 0; i < length; i++){
        this.arrayForSort.push(Math.round(Math.random() * length * 20));
    }
}
