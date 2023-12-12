//DOM elements
const nameText = document.getElementById("nameInput");
const contactText = document.getElementById("contactInput");
const durationText = document.getElementById("duration");
const adultText = document.getElementById("adultInput");
const childrenText = document.getElementById("childrenInput");
const brancheText = document.getElementsByName("Branch");
const roomType = document.getElementsByName("Room types");
const noofRoomsInput = document.getElementById("NoofRooms");
const booknowBtn = document.getElementById("bookNow");
const outputTxt1 = document.getElementById("output1");
const extraInput = document.getElementsByName("Extra Requirements")
const promoCodeText = document.getElementById("promoCode");
const promoCodeText = document.getElementById("promoCode");
const loyaltyText = document.getElementById("loyaltyPoints");
const currentBooking= document.getElementById("currentBooking");
const currentCostt = document.getElementById("currentCost");
const overallBooking = document.getElementById("overallBooking");
const overallCost = document.getElementById("overallCost");


//DOM ELEMENTS FOR ADVENTURES
const adventuresText = document.getElementById("adventuresInput");
const adultsLocal= document.getElementById("NumberOfAdults(local)");
const childrenlocalandabove = document.getElementById("NumberOfChildren(localandabove)");
const childrenlocalandbelow = document.getElementById("NumberOfChildren(localandbelow)");
const adultsforeign = document.getElementById("NumberOfAdultsForeign");
const childrenForeignandAbove = document.getElementById("NumberOfChildrenforeignandabove");
const childrenForeignandBelow = document.getElementById("NumberOfChildrenForeignandbelow");

const bookAdventureBtn = document.getElementById("bookAdventure");
const outputTxt2 = document.getElementById("output2");




//add eventlisteners

booknowBtn.addEventListener("click", finalizeBooking);
bookAdventureBtn.addEventListener("click" , bookAdventureButtonFunction);
roomType.forEach(item => item.addEventListener("change" , changeRoomType ));
extraInput.forEach(item => item.addEventListener("change" , changeRequirements ));




//variables
// let bookingDetails = {
//     type : '',
//     numberOfRooms: 0,
//     numberOfChildren: 0,
//     duration: 0 ,
//     wifi: false,
//     view: '',
//     cost: 0

// }

//variables
let roomCosts;
let Room_type;
let kidsAbove5;
let promoCode;
let total;
let currentCost;
let extraRequirements;
let adultGuide;
let kidGuide;
let adultGuideCost;
let kidGuideCost;
let loyaltyPoints;
let adventuresInput;
let noofRooms;





function initialize(){
    total = 0;
    noofRooms =1;
    Room_type= "";
    roomCosts = 0;
    kidsAbove5 = 0;
    promoCode = "";
    currentCost = 0;
    extraRequirements = 0;
    adultGuide = "";
    kidGuide = "";
    adultGuideCost = 0;
    kidGuideCost = 0;
    loyaltyPoints = 0;
    adventuresInput ="";
}



//let loyaltyPoints = 0;


//add extra costs for children and extra bed

totalCost +=noOfChildren * mealCostForChildren;
totalCost +=extraBed * extraBedCost;


//apply promo code discount
if (promoCodeText ==="Promo123") {
    totalCost *= 0.95; 
    
}
return totalCost;


function calculateCost() {


}




function changeRoomType() {
    if(this.value == "single") {
        typeCost = 25000 ;
        type= "single";
    } else if(this.value == "double") {
        typeCost = 35000 ;
        type= "double";
    } else  {
        typeCost = 40000 ;
        type= "triple";
    }
    total = roomCosts + extraRequirements;
    constInput.innerText = `${total}`;
}

function changeRequirements(){
    if (this.value == "extraBed"){
        if(this.checked) {
            extraRequirements +=8000;
        } else{
            extraRequirements -= 8000;
        }
    }

    total = roomCosts + extraInput;
    constInput.innerText = `${total}`
}



//adding function to booknowbutton 
function finalizeBooking(){
    // event.preventDefault();

    noofRooms = noofRoomsInput.value;
    kidsAbove5 = parseInt(noofRoomsInput.value);
    let finalPrize = noofRooms * (roomCosts+ extraRequirements) + kidsAbove5*5000;
    let name = nameText.value;

    
    var promoCode =promoCodeText.value;
    if(promoCode == "Promo 123") {
        finalPrize *=0.95;
    }

    window.alert(`${name}'s hotel booking is below!!! `)
    outputTxt1.innerText = `Hi there ${name} You have booked ${noofRooms} room(s) & your total cost is LKR${finalPrize}`


    if (noofRooms > 3) {
        loyaltyPoints +=20* noofRooms;
        localStorage.setItem("loyaltyPoints" , loyaltyPoints);
    }

 }

     calculateCost();
     displayConfirmation("Book Now");
     resetBooking ();
     



//adding function to bookadventure
function bookAdventureButtonFunction()
{



     
    displayConfirmation("Book Adventure");
    resetBooking ();

}

//function to favourites
function addToFavorites() {

}

//adding function to loyalty
function checkLoyalty() {


}


//resetfunction
function resetBooking(){

}






initialize();