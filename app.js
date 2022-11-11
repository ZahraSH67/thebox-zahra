// Short hand variables and constants
// Get  wrapper and container elements from the HTML
const CAROUSEL_WRAPPER = document.getElementsByClassName("carouselwrapper")[0];
const CAROUSEL_CONTAINER = CAROUSEL_WRAPPER.querySelector(".carouselcontainer")
// const caption = document.querySelector("#caption")

// Create an article for each element in the slide array (from slide.js)
// Remember to generate the HTML - BEFORE - Getting the element through query selector (_0 -) <-- this is a facepalm
SLIDE_ARRAY.forEach(function(){
    CAROUSEL_CONTAINER.innerHTML += '<article class="carouselcontainer__slide"></article>';
});

// Short hand variables and constants
// Get article elements from the HTML
const SLIDE_PLACEHOLDERS = CAROUSEL_CONTAINER.querySelectorAll("article");

// Creates the slide content in HTML for each element in the slide array - the forEch method functions argues with the element (object) and index of array
// ` let's you use newline in a string for prettieness - as well as showing the javascript in different color
SLIDE_PLACEHOLDERS.forEach(function(placeholder, index){
    const DIV = document.createElement("div");
    // const caption = document.querySelector("#caption")
    DIV.className = "slide";

    // Append will place the new div in the article 
    placeholder.append(DIV);

    // Styling is set to contain the properties from the current object corresponding to the index in the slide array
    DIV.style.backgroundImage = `url(${SLIDE_ARRAY[index].slideImage})`;

    // const caption = document.querySelector("#caption")
    
    // DIV.innerHTML = `
    DIV.innerHTML = `
    <p>${SLIDE_ARRAY[index].text}</p>
`;
});

  

// Reset array
function resetSlides(){
    document.querySelectorAll(".carouselcontainer__slide").forEach(
        function(slide, index){
            if(index === 0){
                slide.getElementsByClassName.marginLeft = "-100%";
            }
            else{
                slide.getElementsByClassName.marginLeft = "0";
            }
        }
    );
}

// Previous slide
function prevSlide(){
    // Defines the last slide as the image contained in the last position of the slide array
    const LAST_SLIDE = document.querySelectorAll(".carouselcontainer__slide")[SLIDE_ARRAY.length - 1];

    // Removes the image slide contained in the last array position
    CAROUSEL_CONTAINER.removeChild(LAST_SLIDE);

    // Attaches the removed image slide to the start of the array
    // Pushing the slide array right letting the current position of the array contain the previous image slide 
    CAROUSEL_CONTAINER.prepend(LAST_SLIDE);
    resetSlides();
}

//Next slide
function nextSlide(){
     // Defines the last slide as the image contained in the first position of the slide array
     const FIRST_SLIDE = document.querySelectorAll(".carouselcontainer__slide")[0];

     // Removes the image slide contained in the first array positions
     CAROUSEL_CONTAINER.removeChild(FIRST_SLIDE);

     // Attaches the removed image slide to the end of the array
     // Pushing the content left letting the current position of the array contain the next image slide
     CAROUSEL_CONTAINER.append(FIRST_SLIDE);
     resetSlides();
}

//Using the mouse to navigate on click
function handleSlide(event){
    if(event.target.className === "prev" || event.target.className === "fa fa-angle-left"){
        prevSlide();
    }
    if(event.target.className === "next" || event.target.className === "fa fa-angle-right"){
        nextSlide();
    }
}

//Eventlistener for click to slide
CAROUSEL_WRAPPER.addEventListener("click", handleSlide);

// Eventlistener to make sure you can shift slides with arrow keys or a and d keys for the gamers out there
document.addEventListener("keyup", function(event){
    if(event.key === "ArrowLeft" || event.key.toLowerCase === "a"){
        prevSlide();
        TEXT_ARRAY.forEach(function(index){
            
        })
    }
    if(event.key === "ArrowRight" || event.key.toLowerCase === "d"){
        nextSlide();
    }
})




