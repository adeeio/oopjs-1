'use strict';

function Phone(brand, price, color, type) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.type = type;
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");

}

Phone.prototype.customMobile = function(width, height) {
    var newEl = document.createElement("div");
    newEl.style.width = width || "150px";
    newEl.style.height = height || "400px";
    newEl.style.background = this.color || "black";
    newEl.style.borderRadius = "5px";
    newEl.innerHTML = this.brand;

    document.body.appendChild(newEl);
}

Phone.prototype.animate = function(){
    var box = document.createElement("div");
    var anime = document.createElement("div");
    anime.innerHTML = this.brand;
    document.body.appendChild(box);
    box.appendChild(anime);
    box.classList.add("container");
    anime.classList.add("style");
   

    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if(pos == 350) {
            pos = 0;
           
        }
        else {
            pos++;
            anime.style.top = pos + "px";
            anime.style.right = pos + "px";
        }
    }
}

var samsungGalaxyS6 = new Phone("samsung", 1800, "blue", "galaxy");
var iPhone6S = new Phone("Apple", 2250, "black", "6s");
var nokia = new Phone("nokia", 1490, "red", "n-gage");



