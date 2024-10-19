/* console.log("Hello") */
const contentBlock = document.querySelector(".article-preview__content-block");

const contentBlockButton = document.querySelector(".article-preview__content-block__button");
const previewWindow = document.querySelector(".article-preview__window");

const windowButton = document.querySelector(".article-preview__window-button");

function invertColors(x) {
    x.style.backgroundColor = "#6d7f97";
    x.firstElementChild.firstElementChild.style.fill = "#ecf2f8";
}

function restoreColors(x) {
    x.style.backgroundColor = "#ecf2f8";
    x.firstElementChild.firstElementChild.style.fill = "#6d7f97";
}

function toggleDisplay() {
    if (previewWindow.style.display === 'flex') {
        previewWindow.style.display = 'none';
    } else {
        previewWindow.style.display = 'flex';
    }
}

contentBlockButton.addEventListener("mouseenter", function(e) {
    this.style.cursor = "pointer";
    invertColors(this);
});

contentBlockButton.addEventListener("mouseleave", function(e) {
    restoreColors(this);
});

contentBlockButton.addEventListener("click", function(e) {
    toggleDisplay();
    if (window.innerWidth < 778) {
        contentBlock.style.paddingBottom = '0px';
    }
});

windowButton.addEventListener("mouseenter", function(e) {
    e.target.style.cursor = "pointer";
    restoreColors(this);
});

windowButton.addEventListener("mouseleave", function(e) {
    invertColors(this);
 });

windowButton.addEventListener("click", function(e) {
    toggleDisplay();
    contentBlock.style.paddingBottom = '20px';
});
