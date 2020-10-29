window.onload = function () {
  let btn = document.querySelectorAll(".menu ul");
  let list = document.querySelector(".playlists");
  btn[1].firstElementChild.addEventListener("click", function () {
    let newItem = document.createElement("p");
    newItem.innerText = "New Playlist #";
    newItem.innerText += list.childElementCount++;
    console.log(newItem);
    list.insertBefore(newItem, list.firstElementChild);
  });

  let heartOutline = document.querySelector(".loved-track .far.fa-heart");
  let heartFilled = document.querySelector(".loved-track .fas.fa-heart");
  heartFilled.addEventListener("click", function () {
    if (!heartFilled.classList.contains("active")) {
      heartFilled.classList.toggle("active");
      console.log(heartFilled.classList);
      console.log("henshi");
      heartFilled.style.opacity = 1;
      heartOutline.style.opacity = 0;
    } else {
      heartFilled.classList.toggle("active");
      console.log(heartFilled.classList);
      console.log("henshi");
      heartFilled.style.opacity = 0;
      heartOutline.style.opacity = 1;
    }
  });
};
