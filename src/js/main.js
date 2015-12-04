/**
 * Created by User on 04.12.2015.
 */

function startApp(){
    var fileArray = ["js/BaseSort.js", "js/BubbleSort.js", "js/TreeSort.js", "js/TestApp.js", "js/TreeSortView.js"];
    var waitLoad = 0;

    this.addScript = function(src){
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.onload = function(){
            waitLoad--;
            checkReady();
        }
        waitLoad++;
        document.head.appendChild(script);
    }

    this.startTest = function()
    {
        for(var i = 0;i<fileArray.length;i++){
            this.addScript(fileArray[i]);
        }
    }

    this.checkReady = function(){
        if(waitLoad == 0){
            this.init();
        }else if(waitLoad < 0){
            console.error("Load js");
        }
    }

    this.init = function(){

        this.treeSort();

    }

    this.treeSort = function(){
        var el = $('#sortAnimation')[0];
        var test = new TestApp(el);
        test.startTreeTest();

    }

    this.bubbleSort = function(){
        var el = $('#sortAnimation')[0];
        var test = new TestApp(el);
        test.startBubbleTest();
    }

    this.startTest();

}
