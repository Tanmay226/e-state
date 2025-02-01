// For Hero section search menu active
document.addEventListener("DOMContentLoaded", function () {
  var tabTriggerList = [].slice.call(
    document.querySelectorAll("#propertyTabs a")
  );
  tabTriggerList.forEach(function (tabTriggerEl) {
    tabTriggerEl.addEventListener("click", function (event) {
      event.preventDefault();
      var tab = new bootstrap.Tab(tabTriggerEl);
      tab.show();
    });
  });
});
// Function to animate counting Why Choose Us Section
function animateCounters() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const updateCounter = () => {
      count++;
      counter.innerText = count;

      if (count === target) {
        clearInterval(interval);
      }
    };

    const interval = setInterval(updateCounter, 1);
  });
}

animateCounters();

//sticky nav function
window.addEventListener("scroll", () => {
  const navContainer = document.getElementById("nav-container");
  if (window.scrollY > 50) {
    navContainer.classList.add("stickyNav");
  } else {
    navContainer.classList.remove("stickyNav");
  }
});

//toggle navbar
document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.getElementById("navbarToggle");
  const navbarNav = document.getElementById("navbarNav");

  navbarToggle.addEventListener("click", function () {
    // Toggle the icon class
    const icon = navbarToggle.querySelector("i");
    if (navbarNav.classList.contains("show")) {
      icon.classList.remove("bi-x");
      icon.classList.add("bi-justify-left");
    } else {
      icon.classList.remove("bi-justify-left");
      icon.classList.add("bi-x");
    }
  });

  // Handle collapse event to ensure correct icon state
  navbarNav.addEventListener("shown.bs.collapse", function () {
    navbarToggle.querySelector("i").classList.remove("bi-justify-left");
    navbarToggle.querySelector("i").classList.add("bi-x");
  });

  navbarNav.addEventListener("hidden.bs.collapse", function () {
    navbarToggle.querySelector("i").classList.remove("bi-x");
    navbarToggle.querySelector("i").classList.add("bi-justify-left");
  });
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    },
    onTranslated: function(event) {
      let lastItem = event.item.count - event.page.size;
      let currentIndex = event.item.index;
      if (currentIndex >= lastItem) {
        $(".owl-prev").show();
      } else {
        $(".owl-prev").hide();
      }
    }
  });
});