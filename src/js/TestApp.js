/**
 * Created by User on 04.12.2015.
 */
function TestApp(el){

    this.idInterval;
    this.sorting;

    this.viewContainer = el;
    this.view = new createViewTreeSort(this.viewContainer);

    this.startTreeTest = function(){
        this.sorting = new TreeSort(this.view);
        this.sorting.generateRandomArray(20, 0, 100);
        this.sorting.startCreateTree();
        this.idInterval = setInterval($.proxy(this.tick, this), 100);

    }

    this.startBubbleTest = function(){
        this.sorting = new BubbleSort();
        this.sorting.generateRandomArray(20, 0, 100);
        this.sorting.initSort();
        this.idInterval = setInterval($.proxy(this.tick, this), 20);

    }

    this.tick = function(){

        var result = this.sorting.tick();

        if(this.sorting instanceof TreeSort) {
            if (result === false && this.sorting.currentStatus == this.sorting.CREATE_TREE) {
                this.sorting.startTraverseTree();
            } else if (result === false && this.sorting.currentStatus == this.sorting.TRAVERSE_TREE) {
                clearInterval(this.idInterval);
                return false;
            }
        }else if(this.sorting instanceof BubbleSort) {
            if (result === false) {
                clearInterval(this.idInterval);
            }
        }
    }

}