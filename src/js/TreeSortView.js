/**
 * Created by User on 04.12.2015.
 */

function createViewTreeSort(el){

    this.mainel = el;

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

    this.testTreeElement = function(view){
        if(view) {
            view.removeClass("branch");
            view.addClass("testBranch");
        }
    }

    this.endTestTreeElement = function(view){
        if(view) {
            view.removeClass("testBranch");
            view.addClass("branch");
        }
    }

    this.createTreeViewElement = function(value){
        var el = $('<div>');
        el.addClass("branch");
        el.html("<a>"+value+"</a>");
        $("#treeView").append(el);
        return el;
    }

    this.addTreeElement = function(){

    }

}