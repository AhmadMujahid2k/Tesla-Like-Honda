const head = document.querySelectorAll(".head");
const header = document.querySelectorAll("header");
const nav = document.querySelector("nav");
const links = document.querySelectorAll(".links");
const arrowdown = document.querySelectorAll(".fa-chevron-down");
function Myfunction() {
  let menu = document.getElementById("menu");
  menu.style.display = "flex";
  document.querySelector("header").classList.add("blur");
  document.querySelector("body").style.overflow = "hidden";
  document.querySelector(
    "header"
  ).style.background = `linear-gradient(0deg,rgba(44, 44, 44, 0.363),rgba(44, 44, 44, 0.363)),url('images/background-image.jpg')`;
  document.querySelector("header").style.backgroundSize = "cover";
  document.querySelector("header").style.backgroundPosition = "center";
}

function display() {
  let menu = document.getElementById("menu");
  menu.style.display = "none";
  document.querySelector("header").classList.remove("blur");
  document.querySelector(
    "header"
  ).style.background = `url('images/background-image.jpg')`;
  document.querySelector("header").style.backgroundSize = "cover";
  document.querySelector("header").style.backgroundPosition = "center";
  document.querySelector("body").style.overflowY = "scroll";
}

$(".city .fa-chevron-down").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".brv").offset().top,
    },
    "slow"
  );
});
$(".brv .fa-chevron-down").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".civic").offset().top,
    },
    "slow"
  );
});
$(".civic .fa-chevron-down").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".hrv").offset().top,
    },
    "slow"
  );
});
$(".hrv .fa-chevron-down").click(function () {
  $("html,body").animate(
    {
      scrollTop: $(".Accord").offset().top,
    },
    "slow"
  );
});

window.addEventListener("scroll", function () {
  let scroll = $(window).scrollTop();
  function vh(percent) {
    var h = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    return (percent * h) / 100;
  }
  if (scroll >= vh(10)) {
    $(head[0]).addClass("fade");
    $(links[0]).addClass("fade");
    $(arrowdown[0]).addClass("fade");
  } else {
    $(head[0]).removeClass("fade");
    $(links[0]).removeClass("fade");
    $(arrowdown[0]).removeClass("fade");
  }
  if (scroll >= vh(35)) {
    $(head[0]).addClass("fade-more");
    $(links[0]).addClass("fade-more");
    $(arrowdown[0]).addClass("fade-more");
  } else {
    $(head[0]).removeClass("fade-more");
    $(links[0]).removeClass("fade-more");
    $(arrowdown[0]).removeClass("fade-more");
  }
  if (scroll >= vh(60)) {
    $(head[1]).addClass("head visible faddee");
    $(links[1]).addClass("links visible faddee");
    $(arrowdown[1]).addClass(".fa-chevron-down visible faddee");
  } else {
    $(head[1]).removeClass("head visible faddee");
    $(links[1]).removeClass("links visible faddee");
    $(arrowdown[1]).removeClass(".fa-chevron-down visible faddee");
  }
  if (scroll >= vh(75)) {
    $(head[1]).removeClass("faddee");
    $(links[1]).removeClass("faddee");
    $(arrowdown[1]).removeClass("faddee");
  } else {
    $(head[1]).addClass("fade");
    $(links[1]).addClass("fade");
    $(arrowdown[1]).addClass("fade");
  }
  if (scroll >= vh(110)) {
    $(head[1]).addClass("fade");
    $(links[1]).addClass("fade");
    $(arrowdown[1]).addClass("fade");
  } else {
    $(head[1]).removeClass("fade");
    $(links[1]).removeClass("fade");
    $(arrowdown[1]).removeClass("fade");
  }
  if (scroll >= vh(135)) {
    $(head[1]).addClass("fade-more");
    $(links[1]).addClass("fade-more");
    $(arrowdown[1]).addClass("fade-more");
  } else {
    $(head[1]).removeClass("fade-more");
    $(links[1]).removeClass("fade-more");
    $(arrowdown[1]).removeClass("fade-more");
  }
  if (scroll >= vh(155)) {
    $(head[2]).addClass("head visible faddee");
    $(links[2]).addClass("links visible faddee");
    $(arrowdown[2]).addClass(".fa-chevron-down visible faddee");
  } else {
    $(head[2]).removeClass("head visible faddee");
    $(links[2]).removeClass("links visible faddee");
    $(arrowdown[2]).removeClass(".fa-chevron-down visible faddee");
  }
  if (scroll >= vh(180)) {
    $(head[2]).removeClass("faddee");
    $(links[2]).removeClass("faddee");
    $(arrowdown[2]).removeClass("faddee");
  }
  if (scroll >= vh(210)) {
    $(head[2]).addClass("fade");
    $(links[2]).addClass("fade");
    $(arrowdown[2]).addClass("fade");
  } else {
    $(head[2]).removeClass("fade");
    $(links[2]).removeClass("fade");
    $(arrowdown[2]).removeClass("fade");
  }
  if (scroll >= vh(240)) {
    $(head[2]).addClass("fade-more");
    $(links[2]).addClass("fade-more");
    $(arrowdown[2]).addClass("fade-more");
  } else {
    $(head[2]).removeClass("fade-more");
    $(links[2]).removeClass("fade-more");
    $(arrowdown[2]).removeClass("fade-more");
  }
  if (scroll >= vh(260)) {
    $(head[3]).addClass("head visible faddee");
    $(links[3]).addClass("links visible faddee");
    $(arrowdown[3]).addClass(".fa-chevron-down visible faddee");
  } else {
    $(head[3]).removeClass("head visible faddee");
    $(links[3]).removeClass("links visible faddee");
    $(arrowdown[3]).removeClass(".fa-chevron-down visible faddee");
  }
  if (scroll >= vh(270)) {
    $(head[3]).removeClass("faddee");
    $(links[3]).removeClass("faddee");
    $(arrowdown[3]).removeClass("faddee");
  }
  if (scroll >= vh(317)) {
    $(head[3]).addClass("fade");
    $(links[3]).addClass("fade");
    $(arrowdown[3]).addClass("fade");
  } else {
    $(head[3]).removeClass("fade");
    $(links[3]).removeClass("fade");
    $(arrowdown[3]).removeClass("fade");
  }
  if (scroll >= vh(340)) {
    $(head[3]).addClass("fade-more");
    $(links[3]).addClass("fade-more");
    $(arrowdown[3]).addClass("fade-more");
  } else {
    $(head[3]).removeClass("fade-more");
    $(links[3]).removeClass("fade-more");
    $(arrowdown[3]).removeClass("fade-more");
  }
  if (scroll >= vh(365)) {
    $(head[4]).addClass("head visible faddee");
    $(links[4]).addClass("links visible faddee");
    $(arrowdown[4]).addClass("faddee");
  } else {
    $(head[4]).removeClass("head visible faddee");
    $(links[4]).removeClass("links visible faddee");
    $(arrowdown[4]).removeClass("faddee");
  }
  if (scroll >= vh(375)) {
    $(head[4]).removeClass("faddee");
    $(links[4]).removeClass("faddee");
    $(arrowdown[4]).removeClass("faddee");
  }
  if (scroll >= vh(410)) {
    $(head[4]).addClass("fade");
    $(links[4]).addClass("fade");
    $(arrowdown[4]).addClass("fade");
  } else {
    $(head[4]).removeClass("fade");
    $(links[4]).removeClass("fade");
    $(arrowdown[4]).removeClass("fade");
  }
  if (scroll >= vh(430)) {
    $(head[4]).addClass("fade-more");
    $(links[4]).addClass("fade-more");
    $(arrowdown[4]).addClass("fade-more");
  } else {
    $(head[4]).removeClass("fade-more");
    $(links[4]).removeClass("fade-more");
    $(arrowdown[4]).removeClass("fade-more");
  }
  if (scroll >= vh(465)) {
    $(head[5]).addClass("head visible faddee");
    $(links[5]).addClass("links visible faddee");
    $(arrowdown[5]).addClass(".fa-chevron-down visible faddee");
  } else {
    $(head[5]).removeClass("head visible faddee");
    $(links[5]).removeClass("links visible faddee");
    $(arrowdown[5]).addClass(".fa-chevron-down visible faddee");
  }
  if (scroll >= vh(475)) {
    $(head[5]).removeClass("faddee");
    $(links[5]).removeClass("faddee");
    $(arrowdown[5]).removeClass("faddee");
  }
  if (scroll >= vh(507)) {
    $(head[5]).addClass("fade");
    $(links[5]).addClass("fade");
    $(arrowdown[5]).addClass("fade");
  } else {
    $(head[5]).removeClass("fade");
    $(links[5]).removeClass("fade");
    $(arrowdown[5]).removeClass("fade");
  }
  if (scroll >= vh(530)) {
    $(head[5]).addClass("fade-more");
    $(links[5]).addClass("fade-more");
    $(arrowdown[5]).addClass("fade-more");
  } else {
    $(head[5]).removeClass("fade-more");
    $(links[5]).removeClass("fade-more");
    $(arrowdown[5]).removeClass("fade-more");
  }
  if (scroll >= vh(560)) {
    $(head[6]).addClass("head visible faddee");
    $(links[6]).css("visibility", "visible").addClass("faddee");
  } else {
    $(head[6]).removeClass(" visible faddee");
    $(links[6]).css("visibility", "hidden").removeClass("faddee");
  }
  if (scroll >= vh(580)) {
    $(head[6]).removeClass("faddee");
    $(links[6]).removeClass("faddee");
  }
  if (scroll >= vh(550)) {
    $(".fa-chevron-down").css("display", "none");
  } else {
    $(".fa-chevron-down").css("display", "block");
  }
});
