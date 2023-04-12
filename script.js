
class Navbar {
    static navAjax(e){
        console.log("navAjax started");
        let url = ["Certificates", "services", "contectMe", "about"] 
        const xhttp = new XMLHttpRequest();
        xhttp.onprogress = function() {
            document.getElementById("container").innerHTML = "Waiting...";
        }
        xhttp.onload = function () { 
            document.getElementById("sup-container").innerHTML = this.responseText;
        }
        xhttp.open("GET", `./NavElements/${url[e-2]}.html`);
        console.log(`${url[e-2]}.html`);
        xhttp.send();
    }
    
    static navSelection(e) {
        /*this method is used to manage the style of nav-bar*/
        console.log("navSelection")
        document.querySelectorAll("a")[1].removeAttribute("style");
        // if (document.activeElement.tagName == 'A') {
        //     document.getElementsByClassName("active").removeAttribute("class");
        // }
        let a = document.getElementsByTagName("a")[e];
        a.setAttribute("class", "active");
        Navbar.navAjax(e);
    }
}
// -------------------------Main Method---------------------------------------
function main() {
    console.log("javascript started");
    console.log("javascript ended");
}

main()    // calling the main method