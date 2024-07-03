document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const logo = document.getElementById('logo');

    logo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.getElementById("logo").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



function changeBackground(image, heading, subheading) {
    const heroSection = document.querySelector('.hero-section');
    const heroHeading = document.getElementById('hero-heading');
    const heroSubheading = document.getElementById('hero-subheading');

    // Start the fade-out transition
    heroHeading.classList.remove('fade-in');
    heroHeading.classList.add('fade-out');
    heroSubheading.classList.remove('fade-in');
    heroSubheading.classList.add('fade-out');

    // Wait for the fade-out transition to complete
    setTimeout(() => {
        // Change the background image and heading text
        heroSection.style.backgroundImage = `url(${image})`;
        heroHeading.textContent = `Welcome to ${heading}`;
        heroSubheading.textContent = subheading;

        // Remove fade-out and add fade-in for the fade-in transition
        heroHeading.classList.remove('fade-out');
        heroHeading.classList.add('fade-in');
        heroSubheading.classList.remove('fade-out');
        heroSubheading.classList.add('fade-in');
    }, 500); // This should match the transition duration in the CSS
}






const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);


