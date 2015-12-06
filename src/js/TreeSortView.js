/**
 * Created by User on 04.12.2015.
 */

function createViewTreeSort(el){

    BaseView.apply(this, arguments);

    this.graphics = $('<canvas>');

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
        this.mainel.appendChild(this.graphics[0]);
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

        this.endTestTreeElement();

        if(branch.view === undefined){
            this.createTreeViewElement(branch);
        }
        this.selectedBranch = branch;
        this.selectedBranch.view.addClass("test");
    }

    this.endTestTreeElement = function(branch){
        $(".test").removeClass('test');
    }

    this.addValueToBranch = function(branch){
        this.endTestTreeElement();

        var elvalue = $('<div>');
        elvalue.addClass("valueBranch");
        elvalue.html("<a>"+branch.value+"</a>");

        branch.view.append(elvalue);

        if(branch.root === undefined){
            this.checkLineBranch(branch);
        }else {
            this.checkLineBranch(branch.root);
        }
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

            var img = $('<img>');
            img.addClass("connectLine");
            branch.connectLine = img;
            $("#treeView").append(img);
        }

        branch.view = el;

        if(branch.root === undefined){
            this.checkLineBranch(branch);
        }else {
            this.checkLineBranch(branch.root);
        }

    }

    this.checkLineBranch = function(branch){

        /*
        this.graphics[0].style.position = "absolute";

        console.log(this.graphics.width)

        this.graphics.style.width = this.mainel.style.width+"px";
        this.graphics.height = this.mainel.height+"px";
         */

        if(branch.left != undefined){
            this.checkLineBranch(branch.left);
        }
        if(branch.right != undefined){
            this.checkLineBranch(branch.right);
        }
        this.positionline(branch);
    }

    this.positionline = function(branch){
        if(branch.parent !== undefined) {

            var el = branch.connectLine[0];

            var mepos = branch.view.offset();
            var mesizewidth = branch.view.width();
            var mesizeheight = branch.view.height();

            var parentpos = branch.parent.view.offset();
            var parentsizewidth = branch.parent.view.width();
            var parentsizeheight = branch.parent.view.height();

            var topoffset = parseInt($(".valueBranch").css('margin-top').replace(/\D/g, ""));
            var heightparentdata = parseInt($(".valueBranch").height());

            var endy = mepos.top + topoffset;
            var endx = mepos.left + mesizewidth/2;

            var starty = parentpos.top + heightparentdata + topoffset;
            var startx = parentpos.left + parentsizewidth/2;

            var width = endx - startx;
            var height = endy - starty;

            startx -= height / 2;

            var length = Math.sqrt(width * width + height * height)
            var angleRad = Math.atan2(width, height);
            var angleGrad = -angleRad/Math.PI*180;

            var topOffsetLine = Math.cos(angleRad) * length / 2;
            var leftOffsetLine = Math.sin(angleRad) * length / 2;

            startx = startx + leftOffsetLine;
            starty = starty - Math.abs(leftOffsetLine);

            el.style.transform = "rotate("+angleGrad+"deg)";
            el.style.height = length+"px";

            el.style.top = starty + "px";
            el.style.left = startx + "px";







        }
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
        $("#sortedArray").append(elArray);
    }

    this.checkBranch = function(branch){
        this.endTestTreeElement();
        branch.view.addClass('test');
    }

    this.selectedBranchValue = function(branch){
        branch.view.addClass('ready');
    }

}

createViewTreeSort.prototype = Object.create(BaseView.prototype);