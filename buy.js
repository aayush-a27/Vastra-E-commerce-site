let userData=localStorage.getItem('crr');
let pdtData=localStorage.getItem('drr');
let quantity=parseInt(localStorage.getItem('quantity'));
let pdtSize=localStorage.getItem('pdtSize');
console.log(quantity);
let pdtDetails=pdtData.split(',');
let userName=document.getElementById("user-name");
let userAdd=document.getElementById("user-add");
let userNum=document.getElementById("user-num");
let img=document.getElementById("product-img");


var monthNames = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];
var today = new Date();
var day = today.getDate();
var monthIndex = today.getMonth(); 
var year = today.getFullYear();
var monthName = monthNames[monthIndex];
var formattedDate = day + ' ' + monthName + ' ' + year;


const regex = /"([^"]*)"/g;
const filteredData = [];
let match;
while ((match = regex.exec(userData)) !== null) {
  filteredData.push(match[1]);
}
console.log(filteredData);
userName.textContent= filteredData[0]+" "+filteredData[1];
userAdd.textContent = filteredData[4]+", "+filteredData[6]+", "+filteredData[5];
userNum.textContent = filteredData[3];

let pdtname=document.getElementById("pdt-name");
let pdttype=document.getElementById("pdt-type");
let pdtaftcost=document.getElementById("pdt-aft-cost");
let pdtbefcost=document.getElementById("pdt-bef-cost");
let pdtdisc=document.getElementById("pdt-disc");
let arrivalDate=document.getElementById("arrive-date");
let totalCost=document.getElementById("total-cost-summary");
let date1=document.getElementById("no-cost-date");
let date2=document.getElementById("costdate");
let qty=document.getElementById("qty");
let size=document.getElementById("size");
let freeDate=document.getElementById("freedate");
img.style.backgroundImage="url('"+pdtDetails[0]+"')";
let pdtCost=document.getElementById("product-cost");
let deliveryCost=document.getElementById("delivery-cost");
let costSummary=document.getElementById("cost-summary");
let costSummaryColor=document.getElementById("cost-summary-color");
let placeOrder=document.getElementById("place-order");
let orderStatus='';
let cost=0;
pdtname.textContent=pdtDetails[1];
pdttype.textContent=pdtDetails[2];
if(quantity===0){
  pdtaftcost.textContent=pdtDetails[3];
  cost=pdtDetails[3];
  pdtbefcost.textContent=pdtDetails[4];
}
else{
  cost=(parseInt(pdtDetails[3].replace(/ Rs\.$/, "")))*quantity+" "+"Rs.";
  pdtaftcost.textContent=cost;

  pdtbefcost.textContent=(parseInt(pdtDetails[4].replace(/ Rs\.$/, "")))*quantity+" "+"Rs.";
}
pdtdisc.textContent=pdtDetails[5];
if(quantity===0){
  qty.textContent=quantity+1;
}
else{
  qty.textContent=quantity;
}

pdtCost.textContent=cost;
date1.checked=true;
if(date1.checked===true){
  totalCost.textContent=cost;
  deliveryCost.textContent=0+"Rs.";
}
date1.addEventListener('change', function() {
  if (this.checked) {
      date2.checked = false;
      deliveryCost.textContent=0+"Rs.";
      totalCost.textContent=cost;
  }
});

date2.addEventListener('change', function() {
  if (this.checked) {
      date1.checked = false;
      deliveryCost.textContent=50+"Rs.";
      totalCost.textContent=(parseInt(cost.replace(/Rs\.$/, "")))+50+"Rs.";
  }
});
size.textContent=pdtSize;
arrivalDate.textContent=formattedDate;
freeDate.textContent=(day + 5) + " " + monthName + ' ' + year;
costSummary.addEventListener('mouseenter', function() {
  costSummaryColor.style.animation="fillcolor 1s forwards";
  placeOrder.style.backgroundColor="black";
  placeOrder.style.color="white";
});
costSummary.addEventListener('mouseleave', function() {
  costSummaryColor.style.animation="colorout 1s forwards";
  placeOrder.style.backgroundColor="white";
  placeOrder.style.color="black";
});
placeOrder.addEventListener('click',()=>{
  orderStatus='buyed'
  localStorage.setItem("orderStatus", orderStatus);
  window.location.href = "index.html"; 
})
