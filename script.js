//accesing images 
//image 1
let imageDiv = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let img4 = document.querySelector("#img4")
//this variables of congratulation image
let congo_img=document.querySelector("#congo-image");
congo_img.style.cssText = "height:200px; width:200px; padding: 5px; border:1px solid black; margin-left:400px; margin-top:22px;";
let congoBtn=document.querySelector("#congo");
congoBtn.style.display="none";     //initially the congratulation image is invisible.
//initially image 2,3,4 is disabled.
img2.disabled = true;
img3.disabled = true;
img4.disabled = true;

//this vaiable count the two time the user is in 4th stae or not.
count = 1;

//button for diceimage

let diceButton = document.querySelector("#diceImage");
diceButton.style.display = "none"

//this code for registration form.
let input_name = document.querySelector("#name");
let input_email = document.querySelector("#email");
let input_username = document.querySelector("#username");
let register = document.querySelector(".register");
let error = document.querySelector("#error");
console.log(register)
register.addEventListener("submit", registerForm);
let obj = {};
function registerForm(e) {
    e.preventDefault();

    let name = input_name.value;
    let email = input_email.value;
    let username = input_username.value;

    if (checkNumberofWords(name) < 2) {
        error.innerHTML = 'Name must be at least 2 words';
        error.style.color = "red";
    }
    else if (email.indexOf('@') == -1) {
        error.innerHTML = 'Email must contain @';
        error.style.color = "red";
    }
    else if (username == "") {
        error.innerHTML = 'Username can not empty';
        error.style.color = "red";
    }
    else {
        error.innerHTML = 'Form Submitted Successfully';
        error.style.color = "green";
        obj = { name, email, username };
        name.value = '';
        email.value = '';
        username.value = '';

        img2.disabled = false;
        imageDiv.disabled = true;

    }

    console.log(name, email, username)

    console.log(obj)
}


function checkNumberofWords(name) {

    name = name.trim();

    let arr = name.split(' ');

    return arr.length
}

function checkEmail(email) {
    for (t of arr) {
        if (t.email == email) {
            return false
        }
    }
    return true
}





//this code for first time form is invisible

let formDiv = document.querySelector(".form-registration");
formDiv.style.display = "none";
//code for image 1

imageDiv.addEventListener("click", displayForm);

function displayForm(e) {
    e.preventDefault();
    formDiv.style.display = "block";
}


//code when user click on second image.

img2.addEventListener("click", displayNameAndUsername);

function displayNameAndUsername(e) {
    e.preventDefault();
    formDiv.style.display = "none";
    let output1 = document.createElement("h1");
    output1.innerHTML = "Name: " + obj.name + " & " + "Username: " + obj.username;
    document.body.appendChild(output1);
    output1.style.cssText = "text-align:center; margin-top:10px; color:green;";

    img3.disabled = false;
    img2.disabled = true;

    // let output2=document.createElement("h1");
    // output2.innerHTML=obj.username;
    // document.body.appendChild(output2);



}

let arr = [1, 2, 3, 4, 5, 6];


//code when user click on third image.
img3.addEventListener("click", playDiceGame);
imgDice = document.querySelector("#di")
function playDiceGame(e) {
    e.preventDefault();
    diceButton.style.display = "block";
    diceButton.disabled = false;
    // genRandomNumber();
    imgDice.style.cssText = "height:200px; width:200px; padding: 5px; border:1px solid black; margin-left:400px;";
}


//code we user click on the image THREE TIME
genRandomNumber();
function genRandomNumber() {

    let i = 1;
    let sum = 0;
    let brr = [];
    diceButton.addEventListener("click", generateRandomDiceNumber);

    function generateRandomDiceNumber(e) {
        e.preventDefault();
        let randomIndex = Math.floor(Math.random() * 6);
        console.log("no",randomIndex)
        brr.push(arr[randomIndex]);

        if (i == 3) {
            diceButton.disabled = true;
            console.log(brr);
            let su = 0
            for (let i = 0; i < brr.length; i++) {
                su += brr[i];

            }

            if (su > 10) {
                img4.disabled = false;
                img3.disabled = true;
                alert("Now you eligible for click on 4th image--PLEASE CLICK ON IMAGE 4 TO GENERATE COUPON");
                //this function will generate the 12 digit-text coupon.
                diceButton.style.display="none";

                
            }
            else {
                if (count == 2) {
                    alert("Bad luck")
                    img3.disabled = true;
                    diceButton.disabled = true;


                }
                else {
                    alert("try again after scoring more than 10");
                    brr = [];
                    diceButton.style.display = "none";
                    // imgDice.style.display="none";
                    img3.disabled = false;
                    genRandomNumber();
                    count++;
                }

            }



        }


        i++;



    }


}

//code when user click on the 4th button

img4.addEventListener("click", generateCoupon);

function generateCoupon() {
    
        let capital_digit = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let small_digit = "abcdefghijklmnopqrstuvwxyz"

        let characters = capital_digit + small_digit;

        let token = ""
        for (let i = 0; i < 12; i++) {
            let random = Math.floor(Math.random() * characters.length) 
            token = token + characters[random]
        }
        img4.disabled=true;
        console.log(token);

        congoBtn.style.display="block"; 
    }