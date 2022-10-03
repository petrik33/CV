let textBoxes = document.querySelectorAll(
    'div.flexible-width-text'
);
for(let text of textBoxes) {
    let parent = text.parentElement;
    let textHeight = getComputedStyle(text).height;
    let textWidth = getComputedStyle(text).width;
    let parentHeight = getComputedStyle(parent).height;
    while(textHeight < parentHeight - 10) {
        getComputedStyle(text).width -= 10;
    }
}