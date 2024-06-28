const slideshowElements=document.querySelectorAll(".slideshow-element");
// console.log(slideshowElements);
let cntElement=1;
setInterval(()=>
{
    cntElement++;
    let currentElement=document.querySelector(".current");
    currentElement.classList.remove("current");
    if(cntElement>slideshowElements.length)
        {
            slideshowElements[0].classList.add("current");
            cntElement=1;
        }
        else 
        {
            currentElement.nextElementSibling.classList.add("current");
        }

},2000)