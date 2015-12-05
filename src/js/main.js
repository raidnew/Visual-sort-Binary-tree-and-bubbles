/**
 * Created by User on 04.12.2015.
 */

function startApp(){
    var fileArray = ["js/BaseView.js", "js/BaseSort.js", "js/BubbleSort.js", "js/TreeSort.js", "js/TestApp.js", "js/BubbleSortView.js", "js/TreeSortView.js"];
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

    this.startLoad = function()
    {
        for(var i = 0;i<fileArray.length;i++){
            this.addScript(fileArray[i]);
        }
    }

    this.checkReady = function(){
        if(waitLoad == 0){
            initApp();
        }else if(waitLoad < 0){
            console.error("Load js");
        }
    }

    this.startLoad();

}

var test;
var array;

function initApp(){
    var el = $('#sortAnimation')[0];
    test = new TestApp(el);
}

function treeSort(){
    test.array = array;
    test.startTreeTest();

}

function bubbleSort(){
    test.array = array;
    test.startBubbleTest();
}

function createRandomArray(){
    array = generateRandomArray(30, 0, 200);
}

function startSort(){
    var type = $('input[name=sorttype]:checked').val();//document.getElementById("sorttype");
    switch (type){
        case "bubble":
            bubbleSort();
            break;
        case "tree":
            treeSort();
            break;

    }
}

function generateRandomArray(length, min, max){
    var array = [];
    for(var i = 0; i < length; i++){
        array.push(Math.round(Math.random() * (max - min) + min));
    }
    return array;
}