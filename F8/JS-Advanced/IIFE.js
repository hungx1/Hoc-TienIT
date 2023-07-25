


//Function expression
const callNow = function () {
    console.log("now")
}

callNow()



// IIFE
(function() {
    console.log("NOW")
})()

const app = (function() {
    const cars = []
    return {
        add(car) {
            this.cars.push(car);
        },
        edit(car) {
            this.cars[index] = car;
        },
        delete(car) {
            this.cars.splice(index, 1);
        },
    }
}

)