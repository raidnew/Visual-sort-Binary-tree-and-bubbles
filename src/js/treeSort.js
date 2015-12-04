/**
 * Created by User on 04.12.2015.
 */

function TreeSort(view){
    this.CREATE_TREE = "createtree";
    this.TRAVERSE_TREE = "traversetree";

    BaseSort.apply(this, arguments);

    this.view = view;

    this.startCreateTree = function(){
        this.indexArray = 0;
        this.currentStatus = this.CREATE_TREE;
        this.tree = this.createBranch();
        this.branchIndex = 0;
        this.currentBranch = this.tree;
        this.view.drawArray(this.arrayForSort);
        this.view.drawTree();
    }

    this.addTreeElement = function(){
        if(this.indexArray < this.arrayForSort.length){

            this.view.selectElementInArray(this.indexArray);
            this.view.endTestTreeElement(this.prevTestBranchView);
            this.prevTestBranchView = this.currentBranch.view;
            this.view.testTreeElement(this.prevTestBranchView);

            var value = this.arrayForSort[this.indexArray];
            var result = this.createTreeElement(value, this.currentBranch);
            if(result === true){
                this.currentBranch.view = this.view.createTreeViewElement(value);
                this.view.disableElementInArray(this.indexArray);
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
                tree.left = this.createBranch();
            }
            return tree.left;
        }else{
            if(tree.right === undefined){
                tree.right = this.createBranch();
            }
            return tree.right;
        }
    }

    this.createBranch = function(){
        var newObj = {};
        return newObj;
    }

    this.startTraverseTree = function(){
        this.currentStatus = this.TRAVERSE_TREE;
        this.currentBranch = this.tree;
    }

    this.traverseTree = function(){
        var result = this.selectValue();
        if(result === false){
            return false;
        }else if(!isNaN(result)) {
            this.sortedArray.push(result);
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
            return this.currentBranch.value;
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
    if(this.currentStatus == this.CREATE_TREE){
        return this.addTreeElement();
    }else if(this.currentStatus == this.TRAVERSE_TREE){
        return this.traverseTree();
    }
}
