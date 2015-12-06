/**
 * Created by User on 04.12.2015.
 */
function BaseSort(view){
    this.arrayForSort = generateRandomArray();
    this.sortedArray = [];
    this.view = view;
}

BaseSort.prototype.tick = function(){

}

BaseSort.prototype.cloneArray = function(){
    return this.arrayForSort.concat();
}

BaseSort.prototype.setArray = function(array){
    this.arrayForSort = array;
}
