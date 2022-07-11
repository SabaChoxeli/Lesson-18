// 1. setTimeout ან setInterval - ის გამოყენებით გააკეთეთ საათი რომელიც იმუშავებს
// როგორც ნამდვილი სააათი.გამოიყენეთ ქვემოთ მობმული სურათი(საათი.png).

function displayClock() {
  setTimeout(function () {
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
