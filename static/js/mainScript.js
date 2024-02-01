// Variables:
const siteHeader = document.getElementById("myHeader");
const leftNav = document.getElementById("sideNavLeft");
const rightNav = document.getElementById("sideNavRight");
var leftNavOpen = false;
var rightNavOpen = false;

// Call function when scrolling. 
window.onscroll = function() {scrollFunction()};

// Insert current year into copyright info.
let currentYear = new Date().getFullYear();
document.getElementById("yearVariable").innerHTML = currentYear

// Load a page, same tab.
function loadPage(Page) {
  window.location.href = Page;
}

// Load a page in new tab.
function loadNewTab(Page) {
  window.open(Page, "_blank");
}

// Resize the header's font size. Used with window.onscroll.
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    siteHeader.style.fontSize = "1rem";
  } else {
    siteHeader.style.fontSize = "2rem";
  }
}

// Toggle left sidenav visibility. Used for menu button.
function toggleNavLeft() {
  if (leftNavOpen) {    
    leftNav.style.width = "0";
    leftNavOpen = false
  } else {    
    leftNav.style.width = "15vw";
    leftNavOpen = true
  }
}

// Toggle right sidenav visibility. Used for info button.
function toggleNavRight() {
  if (rightNavOpen) {    
    rightNav.style.width = "0";
    rightNavOpen = false
  } else {    
    rightNav.style.width = "15vw";
    rightNavOpen = true
  }
}