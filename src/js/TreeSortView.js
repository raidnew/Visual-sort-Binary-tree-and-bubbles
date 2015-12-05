/**
 * Created by User on 04.12.2015.
 */

function createViewTreeSort(el){

    BaseView.apply(this, arguments);

    this.selectedBranch;

    this.drawArray = function(array){

        var el = $('<div>');
        el.addClass("startArray");

        for(var i = 0;i<array.length;i++){
            var elArray = $("<a>");
            elArray.html(array[i]);
            elArray.addClass("arrayElement");
            elArray.attr('id', "element"+i);

            el.append(elArray);
        }

        this.mainel.appendChild(el[0]);
    }

    this.selectElementInArray = function(index){
        $("#element"+index).removeClass("arrayElement");
        $("#element"+index).addClass("arrayElementSelect");
    }

    this.disableElementInArray = function(index){
        $("#element"+index).removeClass("arrayElementSelect");
        $("#element"+index).addClass("arrayElementDisable");
    }

    this.drawTree = function(){
        var el = $("<div>");
        el.addClass("treeView");
        el.attr('id', "treeView");
        this.mainel.appendChild(el[0]);
    }

    this.selectTreeElement = function(branch){

        if(this.selectedBranch !== undefined){
            this.endTestTreeElement(this.selectedBranch);
            this.selectedBranch = undefined;
        }

        if(branch.view === undefined){
            this.createTreeViewElement(branch);
        }

        this.selectedBranch = branch;

        this.selectedBranch.view.addClass("test");
    }

    this.endTestTreeElement = function(branch){
        if(branch.view !== undefined) {
            branch.view.removeClass("test");
        }
    }

    this.addValueToBranch = function(branch){
        if(this.selectedBranch !== undefined){
            this.endTestTreeElement(this.selectedBranch);
            this.selectedBranch = undefined;
        }

        var elvalue = $('<div>');
        elvalue.addClass("valueBranch");
        elvalue.html("<a>"+branch.value+"</a>");

        branch.view.append(elvalue);
    }

    this.createTreeViewElement = function(branch){
        var el = $('<div>');
        el.addClass("branch");
        if(branch.parent === undefined) {
            $("#treeView").append(el);
        }else{

            branch.parent.view.addClass('branchParent');

            if(branch === branch.parent.left) {
                el.addClass("leftbranch");
                branch.parent.view.append(el);
            }else if(branch === branch.parent.right){
                el.addClass("rightbranch");
                branch.parent.view.append(el);
            }
        }

        branch.view = el;
    }

    this.drawSortedArray = function(){
        var el = $('<div>');
        el.addClass("sortedArray");
        el.attr('id', "sortedArray");

        this.mainel.appendChild(el[0]);
    }

    this.addValueInFinalArray = function(value){
        var elArray = $("<a>");
        elArray.html(value);
        elArray.addClass("arrayElement");
        //elArray.attr('id', "element");

        $("#sortedArray").append(elArray);
    }

    this.checkBranch = function(branch){

    }

}

createViewTreeSort.prototype = Object.create(BaseView.prototype);