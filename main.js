'use strict';

{
    const open = document.getElementById('open');
    const overlay = document.querySelector('.overlay');
    const close = document.getElementById('close');

    open.addEventListener('click', () => {
        overlay.classList.add('show');
        open.classList.add('hidde');
    });


     close.addEventListener('click', () => {
        overlay.classList.remove('show');
        open.classList.remove('hidde');
    });

}
{
  function play(){

    setTimeout(() => {
      images[currentIndex].classList.remove("current");
      currentIndex++;
      if(currentIndex >= images.length){
        currentIndex = 0;
      }
      images[currentIndex].classList.add("current");

      play();
    },5000);
  }

  const images = document.querySelectorAll(".photo img");
  let currentIndex = 0;
  play();

}