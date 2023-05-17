let a = 0;
var root = document.querySelector(':root');
var footer = document.getElementById("footer");

function myPhoto() {
    document.querySelector("#container").style.overflow = "visible";
}
function goToImg(){
    document.location.href="https://raw.githubusercontent.com/gopalgupta0007/Portfolio/main/Images/myPhoto.png";
}
function changeTheme() {
    a = a+1;
    if (a%2!==0) {
        console.log(a);
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('./Images/bgimg.webp')";
        footer.style.backgroundColor = "rgb(222,222,222)";
        root.style.setProperty('--BtoW','#fff') 
        root.style.setProperty('--WtoB','#000') 
        // dark mode
    } else {
        document.body.style.backgroundImage = "linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.5)), url('./Images/bgimg.webp')";
        footer.style.backgroundColor = "rgb(30,30,30)"; 
        root.style.setProperty('--BtoW','#000') 
        root.style.setProperty('--WtoB','#fff') 
        // light mode
    }
}

class Navbar {
    static navAjax(e) {
        console.log("navAjax started");
        let url = ["certificates", "services", "contectMe", "about"]
        const xhttp = new XMLHttpRequest();

        xhttp.onprogress = function () {
            document.getElementById("container").innerHTML = "Waiting...";
        }

        xhttp.onload = function () {
            document.getElementById("sup-container").innerHTML = this.responseText;
        }

        xhttp.open("GET", `./NavElements/${url[e]}/${url[e]}.html`);
        console.log(`${url[e]}.html`);
        xhttp.send();
    }
    
    static navSelection(e) {
        /*this method is used to manage the style of nav-bar*/
        console.log(`navSelection ${e}`)
        for (let index = 1; index <= 6; index++) {
            document.querySelectorAll("a")[index].removeAttribute("style");
        }
        document.querySelectorAll("a")[e+1].style.cssText = " color: #fff;\
        background: var(--blueToGray);\
        border-radius: 10px;\
        cursor: pointer;\
        text-shadow: 0 -2px 5px yellow;";
        Navbar.navAjax(e-2);
    }
    
    static openNav() {
        document.getElementById("nav-bar").style.width = "250px";
        document.getElementById("sup-container").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
        document.getElementsByTagName('nav').style.backgroundColor="rgba(0,0,0,0.)";
    }
    
    static closeNav() {
        document.getElementById("nav-bar").style.width = "0";
        document.getElementById("sup-container").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
    }
}



// -------------------------Main Method---------------------------------------



function main() {
    console.log("javascript started");
    console.log("javascript ended");
}

main()    // calling the main method