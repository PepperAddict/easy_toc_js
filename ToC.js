window.onload = function () {
    var toc = '';
    var level = 0;
    var search = /<h([\d])>([^<]+)<\/h([\d])>/gi;

    function sit (regExp, substr, subReplacer, replacement) {
        level = parseInt(substr);
        var anchor = subReplacer.replace(/ /g, "_");
        if (substr < 2){
        toc += "<dt><a href=\"#" + anchor + "\">" + subReplacer + "</a></dt>";   
        }
        else if (substr >= 2) {
        toc += "<dd><a href=\"#" + anchor + "\">" + subReplacer + "</a></dd>";              
        }        
        return "<h" + substr + "><a name=\"" + anchor + "\">" + subReplacer + "</a></h" + replacement + ">";  
}

    document.getElementById("contents").innerHTML = document.getElementById("contents").innerHTML.replace(search, sit);
    document.getElementById("toc").innerHTML += toc;
};