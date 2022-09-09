const nav = document.querySelector(".navbar-float"),
toggleBtn = nav.querySelector(".toggle-btn"),
containerNav = document.querySelector(".container-nav")


toggleBtn.addEventListener("click", () => {
  containerNav.classList.toggle("open");
  toggleBtn.classList.toggle("active");
});



let dragItem = document.querySelector("#item");
let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");
let container = dragItem;
//Declare Variables
let active = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

//Add Event Listeners for Touchscreens
container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

//Add Event Listeners for Mice
container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) { //when the drag starts
  if (e.type === "touchstart") { //if its a touchscreen
    initialX = e.touches[0].clientX - xOffset; //set initial x-cordinate to where it was before drag started
    initialY = e.touches[0].clientY - yOffset; //set initial y-cordinate to where it was before drag started
  } else { //if its not a touchscreen (mouse)
    initialX = e.clientX - xOffset; //set initial x-cordinate to where it was before drag started
    initialY = e.clientY - yOffset; //set initial y-cordinate to where it was before drag started
  }
  if (e.target === dragItem) { //if user is dragging circle
    active = true; //the drag is active
  }
}

function dragEnd(e) { //when the drag ends
  const box1Size = box1.getBoundingClientRect(); //the size of box1
  const box2Size = box2.getBoundingClientRect(); //the size of box2
  const elementSize = dragItem.getBoundingClientRect(); //the size of the circle
  if (elementSize.left >= box1Size.left && elementSize.right <= box1Size.right && elementSize.top >= box1Size.top && elementSize.bottom <= box1Size.bottom) { //if the circle is in box1
    initialX = currentX; //set the initial x-cordinate to where it is now
    initialY = currentY; //set the initial y-cordinate to where it is now
  } else if (elementSize.left >= box2Size.left && elementSize.right <= box2Size.right && elementSize.top >= box2Size.top && elementSize.bottom <= box2Size.bottom) { //if the circle is in box2
    initialX = currentX; //set the initial x-cordinate to where it is now
    initialY = currentY; //set the initial y-cordinate to where it is now
  }
  else { //if the circle is in neither box1 nor box2
   	currentX = 0;
    currentY = 0;
	  initialX = 0;
    initialY = 0;
    xOffset = 0;
    yOffset = 0;
  	setTranslate(0, 0, dragItem);
    
  }
  
  active = false; //the drag is no longer active
}

function drag(e) { //when the circle is being dragged
  if (active) { //if the drag is active
    e.preventDefault(); //the user cant do anything else but drag
  
    if (e.type === "touchmove") { //if its a touchscreen
      currentX = e.touches[0].clientX - initialX; //set current x-cordinate to where it is now
      currentY = e.touches[0].clientY - initialY; //set current y-cordinate to where it is now
    } else { //if its not a touchscreen (mouse)
      currentX = e.clientX - initialX; //set current x-cordinate to where it is now
      currentY = e.clientY - initialY; //set current y-cordinate to where it is now
    }
    
    //Im not sure what this does but it dosnt work without it
    xOffset = currentX;
    yOffset = currentY;
    setTranslate(currentX, currentY, dragItem);
  }
}

function setTranslate(xPos, yPos, el) { //Im not sure what this does but it dosnt work without it
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}


const items = document.querySelectorAll('.div-slider');
const itemCount = items.length;
const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
let count = 0;

function showNextItem() {
  items[count].classList.remove('active');

  if(count < itemCount - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add('active');
  console.log(count);
}

function showPreviousItem() {
  items[count].classList.remove('active');

  if(count > 0) {
    count--;
  } else {
    count = itemCount - 1;
  }

  items[count].classList.add('active');
  console.log(count);
}

nextItem.addEventListener('click', showNextItem);
previousItem.addEventListener('click', showPreviousItem);