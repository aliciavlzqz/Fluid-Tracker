//icon selectors
const addIcon1 = document.querySelector(".theCup"),
    addIcon2 = document.querySelector(".theGlass"),
    addIcon3 = document.querySelector(".theBowl"),
    addIcon4 = document.querySelector(".theIceCream");

 ///add instruction for results
   

const MAX_LITERS = 1,
    MIN_LITERS = 0;

    let total = 0,
        
        theCup = 0.0295735,
        theGlass = 0.473176,
        theBowl = 0.354882,
        theIceCream = 0.0739338;


addIcon1.addEventListener('click', addTheCup);

addIcon2.addEventListener('click', addTheGlass);

addIcon3.addEventListener('click', addTheBowl);


addIcon4.addEventListener('click',addIceCream);

//convert oz to liters and add them 
function addTheCup(){
    total = total + 8 * 0.0295735
    document.querySelector('.currentProgress').innerText = total
    if (total > 1){
        alert("DANGER! FLUID OVERLOAD!")
    }
    
    //update results
}

function addTheGlass(){
    total = total + 12 * 0.0295735
    document.querySelector('.currentProgress').innerText = total
    if (total > 1){
        alert("DANGER! FLUID OVERLOAD!")
    }
}


function addTheBowl(){
    total = total + 16 * 0.0295735
    document.querySelector('.currentProgress').innerText = total
    if (total > 1){
        alert("DANGER! FLUID OVERLOAD!")
    }
}

function addIceCream(){
    total = total + 2.5 * 0.0295735
    document.querySelector('.currentProgress').innerText = total
    if (total > 1){
        alert("DANGER! FLUID OVERLOAD!")
    }
}
