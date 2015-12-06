/**
 * Created by User on 04.12.2015.
 */

function TreeSort(view){
    this.CREATE_TREE = "createtree";
    this.TRAVERSE_TREE = "traversetree";

    BaseSort.apply(this, arguments);

    this.startCreateTree = function(){
        this.indexArray = 0;
        this.currentStatus = this.CREATE_TREE;
        this.tree = this.createBranch();
        this.currentBranch = this.tree;
        this.view.drawArray(this.arrayForSort);
        this.view.drawTree();
    }

    this.addTreeElement = function(){
        if(this.indexArray < this.arrayForSort.length){

            var value = this.arrayForSort[this.indexArray];
            var result = this.testTreeElement(value, this.currentBranch);

            this.view.selectElementInArray(this.indexArray);
            this.view.selectTreeElement(this.currentBranch);

            if(result === true){ //Value wrote in branch

                this.view.disableElementInArray(this.indexArray);
                this.view.addValueToBranch(this.currentBranch);
                this.currentBranch = this.tree;
                this.indexArray++;
            }else{ //Branch have value, select child
                this.currentBranch = result;
            }
            return true;
        }else{
            return false;
        }

    }

    this.testTreeElement = function(value, tree){
        if(!tree.isDefined()){
            tree.setValue(value);
            return true;
        }else if(value < tree.value){
            if(tree.left === undefined){
                tree.left = this.createBranch(tree);
            }
            return tree.left;
        }else{
            if(tree.right === undefined){
                tree.right = this.createBranch(tree);
            }
            return tree.right;
        }
    }

    this.createBranch = function(parent){
        var newObj = Object.create( null );
        newObj.parent = parent;
        newObj.root = this.tree;
        newObj.setValue = function(value){
            this.value = value;
        }
        newObj.isDefined = function(){
            return this.value !== undefined && !isNaN(this.value);
        }
        return newObj;
    }

    this.startTraverseTree = function(){
        this.currentStatus = this.TRAVERSE_TREE;
        this.currentBranch = this.tree;

        this.view.drawSortedArray();
    }

    this.traverseTree = function(){
        var result = this.selectValue();
        if(result === false){
            return false;
            this.view.endTestTreeElement();
        }else if(typeof result == "number") {
            this.view.selectedBranchValue(this.currentBranch);
            this.sortedArray.push(result);
            this.view.addValueInFinalArray(result);
        }else{
            this.currentBranch = result;
            this.view.checkBranch(result);
        }
    }

    this.selectValue = function(){
        if(this.currentBranch.left !== undefined && this.currentBranch.left.readed === undefined){
            this.currentBranch.left.parent = this.currentBranch;
            return this.currentBranch.left;
        }else if(this.currentBranch.readed === undefined){
            this.currentBranch.readed = true;
            return this.currentBranch.value;
        }else if(this.currentBranch.right !== undefined && this.currentBranch.right.readed === undefined){
            this.currentBranch.right.parent = this.currentBranch;
            return this.currentBranch.right;
        }else{
            if(this.currentBranch.parent !== undefined) {
                return this.currentBranch.parent;
            }else{
                this.view.endTestTreeElement();
                return false;
            }
        }
    }
}

TreeSort.prototype = Object.create(BaseSort.prototype);

TreeSort.prototype.tick = function(){
    addStepCount();
    if(this.currentStatus == this.CREATE_TREE){
        return this.addTreeElement();
    }else if(this.currentStatus == this.TRAVERSE_TREE){
        return this.traverseTree();
    }
}
