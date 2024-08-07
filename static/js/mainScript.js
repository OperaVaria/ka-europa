// Variables:
const leftMenu = document.getElementById("side-menu-left");
const rightMenu = document.getElementById("side-menu-right");
const menuBtn = document.getElementById("menu-btn");
const infoBtn = document.getElementById("info-btn");
const details = document.querySelector("details");
const mq = window.matchMedia("(min-width: 1024px)");
var leftMenuOpen = false;
var rightMenuOpen = false;

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

// Details elements closing animation.
document.querySelectorAll("details").forEach((det) => {
  det.addEventListener("click", (e) => {
    if (det.hasAttribute("open")) {
      e.preventDefault();
      det.classList.add("closing");
    }
  });

  det.addEventListener("animationend", (e) => {
    if (e.animationName === "close") {
      det.removeAttribute("open");
      det.classList.remove("closing");
    }
  });
});

// Left side menu button.
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    toggleMenuLeft();
  });
}

// Right side menu button.
if (infoBtn) {
  infoBtn.addEventListener("click", () => {
    toggleMenuRight();
  });
}

// Page opening functions:

// Load a page, same tab.
function loadPage(page) {
  let safePage = encodeURI(page);
  window.location.assign(safePage);
}

// Load a page in new tab.
function loadNewTab(page) {
  let safePage = encodeURI(page);
  window.open(safePage, "_blank");
}

// Toggle left side menu visibility. Used for main menu button.
function toggleMenuLeft() {
  if (leftMenuOpen) {
    leftMenu.style.width = "0";
    leftMenuOpen = false;
  } else {
    if (mq.matches) {
      leftMenu.style.width = "20vw";
    } else {
      leftMenu.style.width = "45vw";
    }
    leftMenuOpen = true;
  }
}

// Toggle right side menu visibility. Used for info button.
function toggleMenuRight() {
  if (rightMenuOpen) {
    rightMenu.style.width = "0";
    rightMenuOpen = false;
  } else {
    if (mq.matches) {
      rightMenu.style.width = "20vw";
    } else {
      rightMenu.style.width = "45vw";
    }
    rightMenuOpen = true;
  }
}
