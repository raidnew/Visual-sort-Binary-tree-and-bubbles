/**
 * Created by User on 04.12.2015.
 */

function startApp(){
    var fileArray = ["js/BaseSort.js", "js/BubbleSort.js", "js/TreeSort.js", "js/TestApp.js"];
    var waitLoad = 0;

    this.addScript = function(src){
        addLog("load script: "+src);
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
            addLog("scripts loaded");
            this.init();
        }else if(waitLoad < 0){
            addLog("error load script");
        }
    }

    this.init = function(){
        var test = new TestApp();
        //test.startTreeTest();
        test.startBubbleTest();
    }

    this.startTest();

}

function addLog(message){
    var log = document.getElementById('log');
    if(log) {
        var msg = document.createElement('a')
        msg.className = "logMessage";
        msg.innerHTML = message;
        log.appendChild(msg);
        log.appendChild(document.createElement('br'));
    }
}