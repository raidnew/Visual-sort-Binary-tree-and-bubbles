/**
 * Created by User on 04.12.2015.
 */
function TestApp(){

    this.idInterval;
    this.sorting;

    this.startTreeTest = function(){
        this.sorting = new TreeSort();
        this.sorting.generateRandomArray(20, 0, 100);
        this.idInterval = setInterval($.proxy(this.tick, this), 20);
    }

    this.startBubbleTest = function(){
        this.sorting = new BubbleSort();
        this.sorting.generateRandomArray(20, 0, 100);
        this.sorting.initSort();
        this.idInterval = setInterval($.proxy(this.tick, this), 20);

    }

    this.tick = function(){

        var result = this.sorting.tick();
        /*
        if (result === false && this.sorting.currentStatus == CREATE_TREE) {
            this.sorting.startTraverseTree();
        } else if (result === false && this.sorting.currentStatus == TRAVERSE_TREE) {
            clearInterval(this.idInterval);
            return false;
        }
         */

        if (result === false){
            clearInterval(this.idInterval);
        }
    }

}