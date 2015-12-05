/**
 * Created by User on 04.12.2015.
 */
function BubbleSort(view){
    BaseSort.apply(this, arguments);

    this.index1 = 0;
    this.index2 = 0;
    this.swaping = false;

    this.initSort = function(){
        this.view.drawArray(this.arrayForSort);
        this.sortedArray = this.cloneArray();
        this.view.drawActionArray(this.sortedArray);
    }

    this.stepSort = function(){
        if(this.index1 >= this.sortedArray.length){
            return false;
        }else{
            if(this.index2 >= (this.sortedArray.length - this.index1 - 1)){
                this.index1++;
                this.index2 = 0;
            }else{
                if(this.swaping === false){

                    this.view.selectElements(this.index2, this.index2 + 1);

                    this.swaping = this.needSwap();
                    if(this.swaping === false) this.index2++;
                }else{

                    this.view.swapElements(this.index2, this.index2 + 1);

                    var temp = this.sortedArray[this.index2]
                    this.sortedArray[this.index2] = this.sortedArray[this.index2 + 1];
                    this.sortedArray[this.index2 + 1] = temp;
                    this.swaping = false;
                }
            }
            return true;
        }
    }

    this.needSwap = function(){
        if(this.sortedArray[this.index2] < this.sortedArray[this.index2 + 1]){
            return false;
        }else if(this.sortedArray[this.index2] == this.sortedArray[this.index2 + 1]){
            return false;
        }else if(this.sortedArray[this.index2] > this.sortedArray[this.index2 + 1]){
            return true;
        }
    }
}

BubbleSort.prototype = Object.create(BaseSort.prototype);

BubbleSort.prototype.tick = function(){
    return this.stepSort();
}