
const myPhoto=()=>document.querySelector("#container").style.overflow = "visible";

class Navbar {
    static navAjax(e) {
        console.log("navAjax started");
        let url = ["Certificates", "services", "contectMe", "about"]
        const xhttp = new XMLHttpRequest();
        xhttp.onprogress = function () {
            document.getElementById("container").innerHTML = "Waiting...";
        }
        xhttp.onload = function () {
            document.getElementById("sup-container").innerHTML = this.responseText;
        }
        xhttp.open("GET", `./NavElements/${url[e - 2]}/${url[e - 2]}.html`);
        console.log(`${url[e - 2]}.html`);
        xhttp.send();
    }

    static navSelection(e) {
        /*this method is used to manage the style of nav-bar*/
        console.log("navSelection")
        for (let index = 1; index <= 5; index++) {
            document.querySelectorAll("a")[index].removeAttribute("style");
        }
        document.querySelectorAll("a")[e].style.cssText = " color: #fff;\
                                                            background: blue;\
                                                            border-radius: 10px;\
                                                            cursor: pointer;\
                                                            text-shadow: 0 -2px 5px yellow;";
        Navbar.navAjax(e);
    }
}



// -------------------------Main Method---------------------------------------



function main() {
    console.log("javascript started");
    console.log("javascript ended");
}

main()    // calling the main method