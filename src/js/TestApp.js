/**
 * Created by User on 04.12.2015.
 */
function TestApp(){

    this.interval;
    this.sorting;

    this.startTreeTest = function(){
        this.sorting = new TreeSort();
        var thislink = this;
        this.interval = setInterval($.proxy(thislink.tick, thislink), 20);
    }

    this.tick = function(){
        var result = this.sorting.tick();
        if(result === false && this.sorting.currentStatus == CREATE_TREE){
            this.sorting.startTraverseTree();
        }else if(result === false && this.sorting.currentStatus == TRAVERSE_TREE){
            clearInterval(this.interval);
        }
    }

}