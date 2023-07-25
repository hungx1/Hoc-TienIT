function createCounter() {
    let counter = 0
    function increase() {
        return ++counter
    }

    return increase
}

const counter1 = createCounter()

console.log(counter1);
console.log(counter1);
console.log(counter1);



//Closure

function createLogger(nameSpace) {
    function logger(mess) {
        console.log(`[${nameSpace}]: ${mess}`);
    }

    return logger
}

const inforLogger = createLogger('Info');

inforLogger("Start send mess");
inforLogger("send 1 time")
