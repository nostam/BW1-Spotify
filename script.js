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
};

      // let refOffset = 0;
      // const bannerHeight = 77;
      // const bannerWrapper = document.querySelector('#albums-section');
      // const banner = document.querySelector('#header');
    
      // const handler = () => {
      //   const newOffset = bannerWrapper.scrollY || bannerWrapper.pageYOffset;
      //   console.log('inside function');
      //   console.log(newOffset);
      //   if (newOffset > bannerHeight) {
      //     console.log('fisrt if');
      //     if (newOffset > refOffset) {
      //       console.log('inside if');
      //       bannerWrapper.classList.remove('animateIn');
      //       bannerWrapper.classList.add('animateOut');
      //     } else {
      //       bannerWrapper.classList.remove('animateOut');
      //       bannerWrapper.classList.add('animateIn');
      //     }
      //     banner.style.background = 'rgba(162, 197, 35, 0.6)';
      //     refOffset = newOffset;
      //   } else {
      //     banner.style.backgroundColor = 'rgba(162, 197, 35, 1)';
      //   }
      // };
    
      // window.addEventListener('scroll', handler(), false);
    
      let section = document.querySelector('#albums-section');
      // section.onscroll = function() {scrollFunction()};
      section.addEventListener('scroll', scrollFunction());

      function scrollFunction() {
        console.log('function');
        if (section.scrollTop >= 0 || document.documentElement.scrollTop > 1000) {
          console.log('first if');
          document.getElementById("header").style.fontSize = "30px";
        } else {
          console.log('else');
          document.getElementById("header").style.fontSize = "90px";
        }
      }