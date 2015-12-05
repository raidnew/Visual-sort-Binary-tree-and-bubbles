/**
 * Created by User on 04.12.2015.
 */
function TestApp(el){

    this.idInterval;
    this.sorting;
    this.array;

    this.viewContainer = el;
    this.view;

    this.startTreeTest = function(){
        this.view = new createViewTreeSort(this.viewContainer);
        this.sorting = new TreeSort(this.view);
        if(this.array === undefined){
            this.array = createRandomArray(30, 0, 100);
        }
        this.sorting.setArray(this.array);
        this.sorting.startCreateTree();
        this.start();
    }

    this.startBubbleTest = function(){
        this.view = new createViewBubbleSort(this.viewContainer);
        this.sorting = new BubbleSort(this.view);
        if(this.array === undefined){
            this.array = createRandomArray(30, 0, 100);
        }
        this.sorting.setArray(this.array);
        this.sorting.initSort();
        this.start();
    }

    this.start = function(){
        this.idInterval = setInterval($.proxy(this.tick, this), 200);
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