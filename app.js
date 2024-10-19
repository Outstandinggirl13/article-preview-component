/* console.log("Hello") */
const contentBlock = document.querySelector(".article-preview__content-block");
const contentBlockButton = document.querySelector(".article-preview__content-block__button");
const windowButton = document.querySelector(".article-preview__window-button");

const contentBlockButtonArrow = document.querySelector(".article-preview__content-block__button path");
const windowButtonArrow = document.querySelector(".article-preview__window-button path");


const previewWindow = document.querySelector(".article-preview__window");


contentBlockButton.addEventListener("mouseenter", function(e) {
/*     console.log("Your mouse is on the button"); */
    contentBlockButton.style.backgroundColor = "#6d7f97";
    contentBlockButton.style.cursor = "pointer";
    contentBlockButtonArrow.style.fill = "#ecf2f8";
});

contentBlockButton.addEventListener("mouseleave", function(e) {
/*     console.log("Your mouse is off the button"); */
    contentBlockButton.style.backgroundColor = "#ecf2f8";
    contentBlockButtonArrow.style.fill = "#6d7f97";

});

contentBlockButton.addEventListener("click", function(e) {
/*     e.preventDefault(); */
    if (previewWindow.style.display === 'flex') {
        previewWindow.style.display = 'none';
    } else {
        previewWindow.style.display = 'flex';
/*         contentBlock.style.paddingBottom = '20px'; */
    }

    if (window.innerWidth < 778) {
        /* console.log("Mobile mode"); */
        contentBlock.style.paddingBottom = '0px';
    }
    /* console.log('You clicked the BLOCK button'); */
    
/*     if (window.innerWidth < 778) {
        contentBlock.style.display = 'none';
    } */

/*     if (window.innerWidth < 778) {
        previewWindow.style.position = 'absolute';
        previewWindow.style.zIndex = '1';
    } */
});

windowButton.addEventListener("mouseenter", function(e) {
/*     console.log("Your mouse is on the button WINDOW");  */
    windowButton.style.backgroundColor = "#ecf2f8";
    windowButton.style.cursor = "pointer";
    windowButtonArrow.style.fill = "#6d7f97";
});

windowButton.addEventListener("mouseleave", function(e) {
/*     console.log("Your mouse is off the button WINDOW"); */
    windowButton.style.backgroundColor = "#6d7f97";
    windowButtonArrow.style.fill = "#ecf2f8";
    
 });

windowButton.addEventListener("click", function(e) {
        if (previewWindow.style.display === 'flex') {
            previewWindow.style.display = 'none';
        } else {
            previewWindow.style.display = 'flex';
        }
        contentBlock.style.paddingBottom = '20px';
        /* console.log('You clicked the WINDOW button'); */
});
