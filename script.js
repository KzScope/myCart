const basePricePhone = 1219;
const basePriceCase = 100;
const defualtQty = 1; 

document.getElementById('phonePlus').addEventListener('click', function(){
    const inputQty = document.getElementById('phoneQty');
    const count = parseInt(inputQty.value);
    const newcount = count + 1;
    inputQty.value = newcount;
    const caseTotal = newcount * basePriceCase;
    document.getElementById('phonePrice').innerText = '$' + caseTotal;
});

document.getElementById('phoneMinus').addEventListener('click', function(){
    const inputQty = document.getElementById('phoneQty');
    const count = parseInt(inputQty.value);
    const newcount = count - 1;
    inputQty.value = newcount;    
    const caseTotal = newcount*basePriceCase;
    document.getElementById('phonePrice').innerText = '$'+caseTotal;
});

document.getElementById('casePlus').addEventListener('click', function(){
    const inputQty = document.getElementById('caseQty');
    const count = parseInt(inputQty.value);
    const newcount = count + 1;
    inputQty.value = newcount;
    const caseTotal = newcount*basePriceCase;
    document.getElementById('casePrice').innerText = '$'+caseTotal;
});

document.getElementById('caseMinus').addEventListener('click', function(){
    const inputQty = document.getElementById('caseQty');
    const count = parseInt(inputQty.value);
    const newcount = count - 1;
    inputQty.value = newcount;
    const caseTotal = newcount*basePriceCase;
    document.getElementById('casePrice').innerText = '$'+caseTotal;
});

const checkout = document.getElementById("confirmation");
checkout.addEventListener('click', function () {
    const cartArea = document.getElementById("cart-area");
    cartArea.style.display = "None";
    const confirmArea = document.getElementById("confirm-area");
    confirmArea.style.display = "Block";
})




// //list of IDs
// phone[
// "phoneQty"
// "phonePlus"
// "phoneMinus"
// "phonePrice"
// "phoneRemove"
// ]

// case[
//     "caseQty"
//     "casePlus"
//     "caseMinus"
//     "casePrice"
//     "caseRemove"
//     ]
// billing{
//     "subTotal"
//     "vat"
//     "grandTotal"
// }
// checkout[
//     btn - "confirmation"
//     new text - "confirmation-area"
//     hide  - "cart-area"
// ]