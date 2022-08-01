class Mobilenavbar{
    constructor(mobileMenu, navList, navLinks, Mobilenavbar) {
        this.mobileMenu = document.querySelector(mobileMenu)
        this.navList = document.querySelector(navList)
        this.navLinks = document.querySelectorAll(navLinks)
        this.activeclass = "active";
    }
 
addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log("Hey 🐅"))
    }
    
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
           }
           return this;
        }   
    }

    const Mobilenavbar = new MobileNavbar(
        ".mobile-menu",
        ".nav-list",
        ".nav-list li",
    );
    MobileNavbar.init();
