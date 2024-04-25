var bag=localStorage.getItem('bag');
let buy=document.getElementById('buy');
console.log(bag);
var storedString = localStorage.getItem('arr');
if (storedString) {
    var contentArray = JSON.parse(storedString);
    console.log(contentArray);
} else {
    console.log("No string found in localStorage.");
}
var userData = localStorage.getItem('brr');
if (userData) {
    var userArr = JSON.parse(userData);
    console.log(userArr);
} else {
    console.log("No string found in localStorage.");
}
let mainText=document.getElementById("purchase-container-text");
let lightText=document.getElementById("purchase-container-text-2");
let actualCost=document.getElementById("actual-cost");
let discountCost=document.getElementById("discount-cost");
let discount=document.getElementById("discount");
let qty=document.getElementById("qty");
let dropdown=document.getElementById("dropdown");
let wishlist=document.getElementById("wishlist");
let image=document.getElementById("purchase-container-img");
let num=document.getElementsByClassName("number");
let size=document.getElementById("sizes");
let pdtSize="nothing";
let qtynum=0;
let totalCost=0;
let wishlistArr=[];
let cost=0;
let i =0;
let prevQty=1;


var lastScrollTop = 0; // Store last scroll position
        
        window.addEventListener('scroll', function() {
            var circle1 = document.getElementById('circle1');
            var circle2 = document.getElementById('circle2');
            var scrollY = window.scrollY;
            var windowHeight = window.innerHeight;
            var circleSize = parseInt(getComputedStyle(circle1).height);
            
            // Check if scrolling up or down
            var direction = (scrollY > lastScrollTop) ? 'down' : 'up';
            lastScrollTop = scrollY <= 0 ? 0 : scrollY; // Reset scroll position
            
            // Calculate new positions
            var newPosition1 = windowHeight / 2 - circleSize / 2 + scrollY;
            var newPosition2 = (direction === 'down') ? windowHeight / 2 - circleSize / 2 + scrollY + windowHeight / 2 : windowHeight / 2 - circleSize / 2; // Change position based on scroll direction
            
            // Update circle positions
            circle1.style.top = newPosition1 + 'px';
            if (direction === 'down') {
                circle2.style.top = newPosition2 + 'px';
            }
        });

mainText.textContent = contentArray[1];
image.style.backgroundImage="url('"+contentArray[0]+"')";
lightText.textContent = contentArray[2];
actualCost.textContent = contentArray[3];
discountCost.textContent = contentArray[4];
discount.textContent = contentArray[5];
let pdtData=contentArray;
console.log(pdtData);
qty.addEventListener("click",function(){
    if(i===0){
        dropdown.style.display="block";
        i=i+1;
    }
    else{
        dropdown.style.display="none";
        i=i-1;
    }
})
dropdown.addEventListener("click",function(event){
    qtynum=parseInt(event.target.textContent);
    cost=parseInt(actualCost.textContent.replace(/\D/g, ""));
    totalCost=cost*(qtynum/prevQty);
    actualCost.textContent=totalCost+" "+"RS.";
    prevQty=qtynum;
})
size.addEventListener("click",function(event){
    pdtSize=event.target.textContent;
})



function buyClickListener(event) {
    if (pdtSize === "nothing") {
        alert("Please select a size");
        event.preventDefault();
    } else {
        if (pdtSize === "S" || pdtSize === "M" || pdtSize === "L" || pdtSize === "XL") {
            localStorage.setItem("pdtSize", pdtSize);
            localStorage.setItem("quantity", qtynum);
            localStorage.setItem("drr", pdtData);
            localStorage.setItem('crr', JSON.stringify(userArr));
            buy.removeEventListener("click", buyClickListener);
            window.location.href = "buy.html"; 
        }
    }
}

wishlist.addEventListener("click",function(event){
    wishlistArr.push(image.style.backgroundImage,mainText.textContent,lightText.textContent);
    sessionStorage.setItem("wishlistArr", wishlistArr);
     
});

buy.addEventListener("click", buyClickListener);