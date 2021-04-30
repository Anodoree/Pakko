function burgerMenu() {

    var check = document.getElementById("burger").checked;
    var mobileStylesNav = document.querySelector("ul.nav");
    var mobileStylesBody = document.querySelector("body");
    var mobileStylesHeader = document.querySelector("div.header");

    if(check == true){
        mobileStylesNav.classList.add("nav-mobile");
        mobileStylesBody.classList.add("overflow");
        mobileStylesHeader.classList.add("header-mobile");
    } else {
        mobileStylesNav.classList.remove("nav-mobile");
        mobileStylesBody.classList.remove("overflow");
        mobileStylesHeader.classList.remove("header-mobile");
    }
}