window.onload = function () {
    let toc = '';
    let level = 0;
    const search = /<h([\d])>([^<]+)<\/h([\d])>/gi;

    function table (regExp, substr, subReplacer) {
        level = parseInt(substr);
        const anchor = subReplacer.replace(/ /g, "_");
        toc += `<li class="tocl${level}"><a href="#${anchor}">${subReplacer}</a></li>`;   
        return ` <h${substr}> <a href="#${anchor}" id=${anchor}>${subReplacer}</a></h${substr}>`;  
}

    document.getElementById("contents").innerHTML = document.getElementById("contents").innerHTML.replace(search, table);
    document.getElementById("toc").innerHTML += toc;
};