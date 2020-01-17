/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carouselContainer = document.querySelector('.carousel-container');

function carouselCreator(obj) {
    // Create Elements
    let carousel = document.createElement('div');
    let leftBtn = document.createElement('div');
    let img1 = document.createElement('img');
    let img2 = document.createElement('img');
    let img3 = document.createElement('img');
    let img4 = document.createElement('img');
    let rightBtn = document.createElement('div');
    

    // Attach classes to respective elements created
    carousel.classList.add('carousel');
    leftBtn.classList.add('left-button');
    rightBtn.classList.add('right-button');
    

    // Append everything to main card so that it can be exported to HTML
    carousel.appendChild(leftBtn);
    carousel.appendChild(img1);
    carousel.appendChild(img2);
    carousel.appendChild(img3);
    carousel.appendChild(img4);
    carousel.appendChild(rightBtn);
    
    // Adding content to all the elements
    leftBtn.textContent = '\u2BC7';
    img1.src = obj.img1;
    img2.src = obj.img2;
    img3.src = obj.img3;
    img4.src = obj.img4;
    rightBtn.textContent = '\u2BC8';
    
    // Adding Event Listeners on the buttons

    // var imgX = 0;

    leftBtn.addEventListener('click', event => {
      // imgX += 20;
      // img1.style.position = 'relative';
      // img1.style.transform = "translateX(' + imgX + 'px)";
      // event.preventDefault();
    })
    rightBtn.addEventListener('click', event => {

    })

    return carousel;
    
}
const images = {
    img1: "./assets/carousel/mountains.jpeg",
    img2: "./assets/carousel/computer.jpeg",
    img3: "./assets/carousel/trees.jpeg",
    img4: "./assets/carousel/turntable.jpeg"
}

carouselContainer.appendChild(carouselCreator(images));
