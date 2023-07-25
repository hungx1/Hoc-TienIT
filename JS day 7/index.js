const arrColor = ["red", "yellow", "black", "orange", "white", "Aquamarine", "Beige", "BlueViolet", "Chartreuse", "Chocolate"];

let container = document.getElementById("container");

const myColor = function (colors) {
    const h1 = document.querySelector('h1');
    h1.style.color = this.style.backgroundColor;
    h1.innerHTML = colors;
}

for (let colors of arrColor) {
    let containerColor = document.createElement("div");
    containerColor.style.backgroundColor = colors;
    containerColor.classList.add("box");
    // containerColor.addEventListener("click", myColor(colors));
    container.appendChild(containerColor);

    containerColor.addEventListener("click", myColor.bind(colors));

}

let user = `hung`;
console.log(`Welcome ${user}`);

