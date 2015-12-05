/**
 * Created by User on 04.12.2015.
 */
function BaseSort(){
    this.arrayForSort = [];
    this.sortedArray = [];
}

BaseSort.prototype.tick = function(){

}

BaseSort.prototype.cloneArray = function(){
    return this.arrayForSort.concat();
}

BaseSort.prototype.generateRandomArray = function(length, min, max){
    this.arrayForSort = [];
    for(var i = 0; i < length; i++){
        this.arrayForSort.push(Math.round(Math.random() * (max - min) + min));
    }
}

BaseSort.prototype.setArray = function(array){
    this.arrayForSort = array;
}
