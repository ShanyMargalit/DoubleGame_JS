function start() {
    var s = document.createElement("h1");
    var sText = document.createTextNode("Welcome to Double game!!!");
    s.setAttribute("text-align", "center");
    s.setAttribute("font-size", "70px");
    s.setAttribute("color", "aliceblue");
    s.setAttribute("margin-left", "40vw");
    s.setAttribute("id", "title");
    s.appendChild(sText);
    document.getElementsByClassName("welcome")[0].appendChild(s);
}

