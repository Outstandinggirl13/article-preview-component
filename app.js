/* console.log("Hello") */
const contentBlock = document.querySelector(".article-preview__content-block");

const contentBlockButton = document.querySelector(".article-preview__content-block__button");
const previewWindow = document.querySelector(".article-preview__window");

const windowButton = document.querySelector(".article-preview__window-button");

contentBlockButton.addEventListener("mouseenter", function(e) {
    this.style.cursor = "pointer";
    this.style.backgroundColor = "#6d7f97";
    this.firstElementChild.firstElementChild.style.fill = "#ecf2f8";
});

contentBlockButton.addEventListener("mouseleave", function(e) {
    this.style.backgroundColor = "#ecf2f8";
    this.firstElementChild.firstElementChild.style.fill = "#6d7f97";

});

contentBlockButton.addEventListener("click", function(e) {
    if (previewWindow.style.display === 'flex') {
        previewWindow.style.display = 'none';
    } else {
        previewWindow.style.display = 'flex';
    }

    if (window.innerWidth < 778) {
        contentBlock.style.paddingBottom = '0px';
    }
});

windowButton.addEventListener("mouseenter", function(e) {
    e.target.style.cursor = "pointer";
    this.style.backgroundColor = "#ecf2f8";
    this.firstElementChild.firstElementChild.style.fill = "#6d7f97";
});

windowButton.addEventListener("mouseleave", function(e) {
    this.style.backgroundColor = "#6d7f97";
    this.firstElementChild.firstElementChild.style.fill = "#ecf2f8";
 });

windowButton.addEventListener("click", function(e) {
        if (previewWindow.style.display === 'flex') {
            previewWindow.style.display = 'none';
        } else {
            previewWindow.style.display = 'flex';
        }
        contentBlock.style.paddingBottom = '20px';
});
