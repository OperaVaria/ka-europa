// Variables:
const baseHeader = document.getElementById("myHeader");
const sideNav = document.getElementById("mySidenav");
const baseFooter = document.getElementById("myFooter")
var navOpen = false

// Call function when scrolling. 
window.onscroll = function() {scrollFunction()};

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
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    baseHeader.style.fontSize = "1rem";
  } else {
    baseHeader.style.fontSize = "2rem";
  }
}

// Toggle sidenav visibility. Used for menu button.
function toggleNav() {
  if (navOpen) {    
    sideNav.style.width = "0";
    navOpen = false
  } else {    
    sideNav.style.width = "15vw";
    navOpen = true
  }
}
