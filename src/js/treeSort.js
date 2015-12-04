/**
 * Created by User on 04.12.2015.
 */

var CREATE_TREE = "createtree";
var TRAVERSE_TREE = "traversetree";

function TreeSort(){
    BaseSort.apply(this, arguments);
    this.currentStatus = CREATE_TREE;

    this.generateRandomArray(30);

    console.log(this.arrayForSort);

    this.indexArray = 0;

    this.tree = {};
    this.currentBranch = this.tree;

    this.addTreeElement = function(){
        if(this.indexArray < this.arrayForSort.length){
            var value = this.arrayForSort[this.indexArray];
            var result = this.createTreeElement(value, this.currentBranch);
            if(result === true){
                this.currentBranch = this.tree;
                this.indexArray++;
            }else{
                this.currentBranch = result;
            }
            return true;
        }else{
            return false;
        }

    }

    this.createTreeElement = function(value, tree){

        if(!tree.hasOwnProperty("value")){
            tree.value = value;
            return true;
        }else if(value < tree.value){
            if(tree.left === undefined){
                tree.left = {};
            }
            return tree.left;
        }else{
            if(tree.right === undefined){
                tree.right = {};
            }
            return tree.right;
        }
    }

    this.startTraverseTree = function(){
        this.currentBranch = this.tree;
        this.currentStatus = TRAVERSE_TREE;
    }

    this.sortedArray = [];

    this.traverseTree = function(){
        var result = this.selectValue();
        if(result === false){
            console.log(this.sortedArray);
            return false;
        }else{
            this.currentBranch = result;
        }
    }

    this.selectValue = function(){
        if(this.currentBranch.hasOwnProperty("left") && !this.currentBranch.left.hasOwnProperty("readed")){
            this.currentBranch.left.parent = this.currentBranch;
            return this.currentBranch.left;
        }else if(!this.currentBranch.hasOwnProperty("readed")){
            this.currentBranch.readed = true;
            var value = this.currentBranch.value;
            this.sortedArray.push(value);
            return this.currentBranch;
        }else if(this.currentBranch.hasOwnProperty("right") && !this.currentBranch.right.hasOwnProperty("readed")){
            this.currentBranch.right.parent = this.currentBranch;
            return this.currentBranch.right;
        }else{
            if(this.currentBranch.hasOwnProperty("parent")) {
                return this.currentBranch.parent;
            }else{
                return false;
            }
        }
    }
}

TreeSort.prototype = Object.create(BaseSort.prototype);

TreeSort.prototype.tick = function(){
    if(this.currentStatus == CREATE_TREE){
        return this.addTreeElement();
    }else if(this.currentStatus == TRAVERSE_TREE){
        return this.traverseTree();
    }
}
