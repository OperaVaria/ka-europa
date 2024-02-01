// Variables:
const siteHeader = document.getElementById("myHeader");
const leftNav = document.getElementById("sideNavLeft");
const rightNav = document.getElementById("sideNavRight");
const mq = window.matchMedia( "(min-width: 1024px)" );
var leftNavOpen = false;
var rightNavOpen = false;

// Insert current year into copyright info.
let currentYear = new Date().getFullYear();
document.getElementById("yearVariable").innerHTML = currentYear;

// Load a page, same tab.
function loadPage(Page) {
  window.location.href = Page;
}

// Load a page in new tab.
function loadNewTab(Page) {
  window.open(Page, "_blank");
}

// Toggle left sidenav visibility. Used for menu button.
function toggleNavLeft() {
  if (leftNavOpen) {
    leftNav.style.width = "0";
    leftNavOpen = false;
  } else {
    if (mq.matches) {
      leftNav.style.width = "15vw";
    } else {
      leftNav.style.width = "50vw";
    }
    leftNavOpen = true;
  }
}

// Toggle right sidenav visibility. Used for info button.
function toggleNavRight() {
  if (rightNavOpen) {
    rightNav.style.width = "0";
    rightNavOpen = false;
  } else {
    if (mq.matches) {
      rightNav.style.width = "15vw";
    } else {
      rightNav.style.width = "50vw";
    }
    rightNavOpen = true;
  }
}