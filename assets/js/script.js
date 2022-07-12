// 1. setTimeout ან setInterval - ის გამოყენებით გააკეთეთ საათი რომელიც იმუშავებს
// როგორც ნამდვილი სააათი.გამოიყენეთ ქვემოთ მობმული სურათი(საათი.png).

function displayClock() {
  setInterval(function () {
    const time = new Date().toLocaleTimeString();
    document.querySelector(".clock").innerHTML = time;
  }, 1000);
}
displayClock();

function checktime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// function clock() {
//   let today = new Date();
//   let hours = today.getHours();
//   let minutes = today.getMinutes();
//   let seconds = today.getSeconds();
//   hours = checktime(hours);
//   minutes = checktime(minutes);
//   seconds = checktime(seconds);
//   document.querySelector(".clock").innerHTML =
//     `${hours}` + ":" + `${minutes}` + ":" + `${seconds}`;
//   setTimeout(clock, 1000);
// }
// clock();

//თან PM-AM რომ იყოს და თან წინ 0-ები ეწეროს ერთად ვერ გავაკეთე და PM-AM დავტოვე მარტო :დ

// 2. ლექციაზე შექმნილ სლაიდერს დავამატოთ:
// 1. როდესაც ავტომატურად ხდება სლაიდების შეცვლა თუ მაუსს მივიტან სურათთან,
//   ავტომატური სლაიდი გაჩერდეს.
// 2. თუ მაუსი მიტანილი მაქვს სურათზე და შემდეგ გამოვწევ სურათიდან,
//   ავტომატური სლაიდი გაგრძელდეს. (მოუსემინეთ  mouseenter, mouseleave)  ივენთებს
// დამხმარე მასალა: https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event

const showNext = document.getElementById("next"),
  showPrev = document.getElementById("prev"),
  sliders = document.querySelectorAll(".slider-item");

let activeIndex = 0;

function renderSlides() {
  sliders.forEach((el, i) => {
    if (i === activeIndex) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

function nextSlide() {
  if (activeIndex === sliders.length - 1) {
    activeIndex = 0;
  } else {
    activeIndex++;
  }
  renderSlides();
}

function prevSlide() {
  if (activeIndex === 0) {
    activeIndex = sliders.length - 1;
  } else {
    activeIndex--;
  }
  renderSlides();
}

function initSlider() {
  showNext.addEventListener("click", nextSlide);
  showPrev.addEventListener("click", prevSlide);
  renderSlides();
}

initSlider();

let startSlider = document.querySelector(".start-slider"),
  stopSlider = document.querySelector(".stop-slider");

let autoslidingId = null,
  isImgsSliding = true;

function startSliding() {
  autoslidingId = setInterval(nextSlide, 4000);
  isImgsSliding = true;
}

function stopSliding() {
  clearInterval(autoslidingId);
  isImgsSliding = false;
}

startSlider.addEventListener("click", startSliding);
stopSlider.addEventListener("click", stopSliding);

initSlider();

const sliderImg = document.querySelector(".slider-item img");

sliderImg.addEventListener("mouseenter", function () {
  if (isImgsSliding === true) {
    stopSliding();
  }
});
sliderImg.addEventListener("mouseleave", function () {
  if (isImgsSliding === false) {
    startSliding;
  }
});
//ლოგიკაში ჯდება რაც დავწერე და ჩერდება მიტანაზე და გამოწევისას ვერ გავაგრძელებინე :დ

// 3. დავამატოთ ასეთი(ღილაკები.png) ღილაკები იმდენი რამდენი სლაიდიც გვაქვს,
// ღილაკზე დაკლიების შემდეგ სლაიდერი უნდა გადავიდეს შესაბამის
// სლაიდზე(პირველ ღილაკზე თუ დავკლიკე უნდა გადავიდეს პირველ სლაიზე და ასე შემდეგ).

const dots = document.querySelectorAll(".dot");

function initDots() {
  dots.forEach((dot, i) => {
    activeIndex = i;
    renderSlides();
  });
}
dots.addEventListener("click", initDots);
