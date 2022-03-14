export const highlightField = id => {
    var elements = document.querySelectorAll(id);
    elements.forEach(el => {
        el.style.backgroundColor = "red";
        setTimeout(() =>  el.style.backgroundColor = "transparent", 700);
    })
}