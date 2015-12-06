/**
 * Created by User on 04.12.2015.
 */
function TestApp(el){

    this.viewContainer = el;
    this.speed = 100;

    this.startTreeTest = function(){
        this.view = new createViewTreeSort(this.viewContainer);
        this.sorting = new TreeSort(this.view);
        this.sorting.startCreateTree();
        this.start();
    }

    this.startBubbleTest = function(){
        this.view = new createViewBubbleSort(this.viewContainer);
        this.sorting = new BubbleSort(this.view);
        this.sorting.initSort();
        this.start();
    }

    this.start = function(){
        this.idInterval = setInterval($.proxy(this.tick, this), this.speed);
    }

    this.setSpeed = function(speed){
        this.speed = speed;
        if(this.idInterval){
            clearInterval(this.idInterval);
            this.idInterval = undefined;
            this.start();
        }
    }

    this.tick = function(){

        var result = this.sorting.tick();

        if(this.sorting instanceof TreeSort) {
            if (result === false && this.sorting.currentStatus == this.sorting.CREATE_TREE) {
                this.sorting.startTraverseTree();
            } else if (result === false && this.sorting.currentStatus == this.sorting.TRAVERSE_TREE) {
                clearInterval(this.idInterval);
                this.idInterval = undefined;
                return false;
            }
        }else if(this.sorting instanceof BubbleSort) {
            if (result === false) {
                clearInterval(this.idInterval);
                this.idInterval = undefined;
            }
        }
    }

}