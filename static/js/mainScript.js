// Variables:
const siteHeader = document.getElementById("myHeader");
const leftNav = document.getElementById("sideNavLeft");
const rightNav = document.getElementById("sideNavRight");
const menuBtn = document.getElementById("menu-btn");
const infoBtn = document.getElementById("info-btn");
const mq = window.matchMedia("(min-width: 1024px)");
var leftNavOpen = false;
var rightNavOpen = false;

// Add event listeners:

// Same tab link buttons.
document.querySelectorAll(".same-tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    loadPage(btn.getAttribute("data-target"));
  });
});

// New tab link buttons.
document.querySelectorAll(".new-tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    loadNewTab(btn.getAttribute("data-target"));
  });
});

// Left sideNav button.
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    toggleNavLeft();
  });
}

// Right sideNav button.
if (infoBtn) {
  infoBtn.addEventListener("click", () => {
    toggleNavRight();
  });
}

// Page opening functions:

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
      leftNav.style.width = "40vw";
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
      rightNav.style.width = "40vw";
    }
    rightNavOpen = true;
  }
}
