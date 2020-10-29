window.onload = function () {
  let heartOutline = document.querySelector(".loved-track .far.fa-heart");
  let heartFilled = document.querySelector(".loved-track .fas.fa-heart");
  heartFilled.addEventListener("click", function () {
    if (!heartFilled.classList.contains("active")) {
      heartFilled.classList.toggle("active");
      heartFilled.style.opacity = 1;
      heartOutline.style.opacity = 0;
    } else {
      heartFilled.classList.toggle("active");
      heartFilled.style.opacity = 0;
      heartOutline.style.opacity = 1;
    }
  });

  let muted = document.querySelector(".player-volume .fas.fa-volume-mute");
  let volMax = document.querySelector(".player-volume .fas.fa-volume-up");
  let vol = document.getElementById("nowplayingVolume");
  muted.addEventListener("click", function () {
    if (!muted.classList.contains("active")) {
      console.log("going mute");
      muted.classList.toggle("active");
      muted.style.opacity = 1;
      volMax.style.opacity = 0;
      vol.style.width = "0%";
    } else {
      muted.classList.toggle("active");
      muted.style.opacity = 0;
      volMax.style.opacity = 1;
      vol.style.width = "100%";
    }
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