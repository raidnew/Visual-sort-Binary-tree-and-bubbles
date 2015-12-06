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

function initApp(){
    var el = $('#sortAnimation')[0];
    test = new TestApp(el);
    test.array = generateRandomArray();
    test.setSpeed($('#rangespeedsort')[0].value);
    onChangeArrLength();
    onChangeSpeed();
}

function createRandomArray(){
    test.array = generateRandomArray();
}

function startSort(){
    stepcount = 0;
    var el = $('#sortAnimation').html('');
    var type = $('input[name=sorttype]:checked').val();//document.getElementById("sorttype");

    switch (type){
        case "bubble":
            test.startBubbleTest();
            break;
        case "tree":
            test.startTreeTest();
            break;

    }
}

var stepcount = 0;

function onChangeSpeed(){
    $('#speedsort').html($('#rangespeedsort')[0].max - $('#rangespeedsort')[0].value);
    test.setSpeed($('#rangespeedsort')[0].max - $('#rangespeedsort')[0].value);
}

function onChangeArrLength(){
    $('#arrlengthinfo').html($('#arrlength')[0].value);
}

function outInfo(){
    $('#info').html('<a>Step: </a><a id="step">'+stepcount+'</a>');
}

function addStepCount(){
    stepcount++;
    outInfo();
}

function generateRandomArray(){
    length = document.getElementById("arrlength").value;
    min = 0;
    max = length * 2;

    var array = [];
    for(var i = 0; i < length; i++){
        array.push(Math.round(Math.random() * (max - min) + min));
    }
    return array;
}