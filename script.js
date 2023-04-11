console.log("hello world");

function navSelection(e){
    /*this method is used to manage the style of nav-bar*/
    document.querySelectorAll('a')[1].removeAttribute('style');
    document.getElementsByClassName('active').removeAttribute('active');
    let a = document.getElementsByTagName('a')[e];
    a.setAttribute("class","active");
}
