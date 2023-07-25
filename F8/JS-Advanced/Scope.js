
//Global
var mess = "Hoc scope" //Global variable

function log() { // Function Global
    console.log("Log");
}

function logger() {
    console.log(mess);
    log();
}
logger();

//Code block
    //if else, for, while,... cũng là code block
 {
    const age = 18;
    console.log(age);
 }


//Local scope
function logger2() {
    var fullName2 ="a b c"
    function logger3() {
        console.log("log 3")
    }
}

logger2();

    // logger3() //Error

    // console.log(fullName2); //Error

//Khi gọi, mỗi hàm luôn có 1 phạm vi mới được tạo
function name(first, last) {
    console.log(first, last);
};

name('son', 'name');

















