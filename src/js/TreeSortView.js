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

}