let category = document.getElementById("category");
let men_content = document.getElementById("men-content");
let women_content = document.getElementById("women-content");
let kids_content = document.getElementById("kids-content");
let beauty_content = document.getElementById("beauty-content");
let banner = document.getElementById("banner");
let slide_banner = document.querySelectorAll(".ban");
let banner_container = document.getElementById("banner-container");
let style_text = document.getElementById("style");
let style_container = document.getElementById("style-container");
let kurta_text = document.getElementById("kurta-text");
let joggers_text = document.getElementById("joggers-text");
let shirt_text = document.getElementById("shirt-text");
let shoes_text = document.getElementById("shoes-text");
let hoody_text = document.getElementById("hoody-text");
let jeans_text = document.getElementById("jeans-text");
let about_kurta = document.getElementById("aboutkurta");
let about_joggers = document.getElementById("aboutjoggers");
let about_shirt = document.getElementById("aboutshirt");
let about_shoes = document.getElementById("aboutshoes");
let about_jeans = document.getElementById("aboutjeans");
let about_hoody = document.getElementById("abouthoody");
let wishlist = document.getElementById("wishlist");
let wishlistContent = document.getElementById("wishlist-content");
let userIcon = document.getElementById("user");
let formBlock = document.getElementById("user-login");
let form = document.getElementById("myform");
let bag = document.getElementById("bag");
var counter = 0;
let row1 = document.getElementById("row-1");
let arrOfUserData = [];
let i = 0;

fetch(
  `https://api.artic.edu/api/v1/artworks/search?q=cats&query[term][is_public_domain]=true`
)
  .then((raw) => raw.json())
  .then((response) => console.log(response));
//clothing api fetch
fetch(`https://api.escuelajs.co/api/v1/products`)
  .then((raw) => raw.json())
  .then((response) => {
    // Filter the products based on category name
    const filteredProducts = response.filter(
      (product) =>
        product.category.name === "Clothes" || product.category.name === "Shoes"
    );

    // Logging the filtered products array
    console.log(filteredProducts);
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });

category.addEventListener("click", function (event) {
  if (event.target.id === "men") {
    men_content.style.display = "block";
  }
  if (event.target.id === "women") {
    women_content.style.display = "block";
  }
  if (event.target.id === "kids") {
    kids_content.style.display = "block";
  }
  if (event.target.id === "beauty") {
    beauty_content.style.display = "block";
  }
});
category.addEventListener("click", function (event) {
  if (event.target.id != "men") {
    men_content.style.display = "none";
  }
  if (event.target.id != "women") {
    women_content.style.display = "none";
  }
  if (event.target.id != "kids") {
    kids_content.style.display = "none";
  }
  if (event.target.id != "beauty") {
    beauty_content.style.display = "none";
  }
});
banner.addEventListener("click", function (event) {
  if (
    event.target.id === "banner1" ||
    event.target.id === "banner2" ||
    event.target.id === "banner3"
  ) {
    men_content.style.display = "none";
    women_content.style.display = "none";
    kids_content.style.display = "none";
    beauty_content.style.display = "none";
  }
});
function slideNext() {
  slide_banner[counter].style.animation = "next1 2s ease-in-out forwards";
  if (counter >= slide_banner.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  slide_banner[counter].style.animation = "next2 2s ease-in-out forwards";
}
function autoSliding() {
  deletInterval = setInterval(timer, 4000);
  function timer() {
    slideNext();
  }
}
autoSliding();
function randomRGB() {
  var red = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);

  return "rgb(" + red + "," + green + "," + blue + ")";
}
function styleColorChange() {
  style_text.style.color = randomRGB();
}
styleColorChange();
setInterval(styleColorChange, 1000);

style_container.addEventListener("mouseover", function (event) {
  if (
    event.target.id === "container1" ||
    event.target.id === "kurta-text" ||
    event.target.id === "imgabttext1"
  ) {
    kurta_text.style.transition = "transform 0.8s ease-in-out";
    kurta_text.style.transform = "translateY(-100%)";
    about_kurta.style.display = "block";
    about_joggers.style.display = "none";
    about_shirt.style.display = "none";
    about_shoes.style.display = "none";
    about_jeans.style.display = "none";
    about_hoody.style.display = "none";
    about_kurta.style.animation = "bluron 2s ease-in-out";
  } else if (
    event.target.id === "container2" ||
    event.target.id === "joggers-text" ||
    event.target.id === "imgabttext2"
  ) {
    joggers_text.style.transition = "transform 0.8s ease-in-out";
    joggers_text.style.transform = "translateY(-100%)";
    about_kurta.style.display = "none";
    about_joggers.style.display = "block";
    about_shirt.style.display = "none";
    about_shoes.style.display = "none";
    about_jeans.style.display = "none";
    about_hoody.style.display = "none";
    about_joggers.style.animation = "bluron 2s ease-in-out";
  } else if (
    event.target.id === "container3" ||
    event.target.id === "shirt-text" ||
    event.target.id === "imgabttext3"
  ) {
    shirt_text.style.transition = "transform 0.8s ease-in-out";
    shirt_text.style.transform = "translateY(-100%)";
    about_kurta.style.display = "none";
    about_joggers.style.display = "none";
    about_shirt.style.display = "block";
    about_shoes.style.display = "none";
    about_jeans.style.display = "none";
    about_hoody.style.display = "none";
    about_shirt.style.animation = "bluron 2s ease-in-out";
  } else if (
    event.target.id === "container4" ||
    event.target.id === "shoes-text" ||
    event.target.id === "imgabttext4"
  ) {
    shoes_text.style.transition = "transform 0.8s ease-in-out";
    shoes_text.style.transform = "translateY(-100%)";
    about_kurta.style.display = "none";
    about_joggers.style.display = "none";
    about_shirt.style.display = "none";
    about_shoes.style.display = "block";
    about_jeans.style.display = "none";
    about_hoody.style.display = "none";
    about_shoes.style.animation = "bluron 2s ease-in-out";
  } else if (
    event.target.id === "container5" ||
    event.target.id === "jeans-text" ||
    event.target.id === "imgabttext5"
  ) {
    jeans_text.style.transition = "transform 0.8s ease-in-out";
    jeans_text.style.transform = "translateY(-100%)";
    about_kurta.style.display = "none";
    about_joggers.style.display = "none";
    about_shirt.style.display = "none";
    about_shoes.style.display = "none";
    about_jeans.style.display = "block";
    about_hoody.style.display = "none";
    about_jeans.style.animation = "bluron 2s ease-in-out";
  } else if (
    event.target.id === "container6" ||
    event.target.id === "hoody-text" ||
    event.target.id === "imgabttext6"
  ) {
    hoody_text.style.transition = "transform 0.8s ease-in-out";
    hoody_text.style.transform = "translateY(-100%)";
    about_kurta.style.display = "none";
    about_joggers.style.display = "none";
    about_shirt.style.display = "none";
    about_shoes.style.display = "none";
    about_jeans.style.display = "none";
    about_hoody.style.display = "block";
    about_hoody.style.animation = "bluron 2s ease-in-out";
  }
});
style_container.addEventListener("mouseout", function (event) {
  if (event.target.id === "container1" || event.target.id === "kurta-text") {
    kurta_text.style.transition = "transform 0.8s ease-in-out";
    kurta_text.style.transform = "translateY(0%)";
    about_kurta.style.display = "none";
    about_kurta.style.animation = "bluroff 1s ease-in-out";
  } else if (
    event.target.id === "container2" ||
    event.target.id === "joggers-text"
  ) {
    joggers_text.style.transition = "transform 0.8s ease-out-in";
    joggers_text.style.transform = "translateY(0%)";
    about_joggers.style.display = "none";
    about_joggers.style.animation = "bluroff 1s ease-in-out";
  } else if (
    event.target.id === "container3" ||
    event.target.id === "shirt-text"
  ) {
    shirt_text.style.transition = "transform 0.8s ease-in-out";
    shirt_text.style.transform = "translateY(0%)";
    about_shirt.style.display = "none";
    about_shirt.style.animation = "bluroff 2s ease-in-out";
  } else if (
    event.target.id === "container4" ||
    event.target.id === "shoes-text"
  ) {
    shoes_text.style.transition = "transform 0.8s ease-in-out";
    shoes_text.style.transform = "translateY(0%)";
    about_shoes.style.display = "none";
    about_shoes.style.animation = "bluroff 2s ease-in-out";
  } else if (
    event.target.id === "container5" ||
    event.target.id === "jeans-text"
  ) {
    jeans_text.style.transition = "transform 0.8s ease-in-out";
    jeans_text.style.transform = "translateY(0%)";
    about_jeans.style.display = "none";
    about_jeans.style.animation = "bluroff 2s ease-in-out";
  } else if (
    event.target.id === "container6" ||
    event.target.id === "hoody-text"
  ) {
    hoody_text.style.transition = "transform 0.8s ease-in-out";
    hoody_text.style.transform = "translateY(0%)";
    about_hoody.style.display = "none";
    about_hoody.style.animation = "bluroff 2s ease-in-out";
  }
});

function wishlistcall(){
    wishlist.addEventListener("click", function () {
        if (wishlistContent.style.display === "block") {
            wishlistContent.style.display = "none";
        } 
        else {
            wishlistContent.style.display = "block";
        }
    });
}
wishlistcall();


let PrintWishlist=sessionStorage.getItem("wishlistArr");
let multiplewishlsit=[];
if(PrintWishlist){
    multiplewishlsit.push(PrintWishlist);
}
console.log(multiplewishlsit);


function collectNestedChildContent(element) {
  let childNodes = element.childNodes;
  let content = [];
  childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      // Text node
      let textContent = node.textContent.trim();
      if (textContent !== "") {
        content.push(textContent); // Store text content
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // Element node
      if (node.tagName === "IMG") {
        // Image element
        content.push(node.alt); // Store image alt
      } else if (
        node.tagName === "DIV" &&
        window.getComputedStyle(node).backgroundImage !== "none"
      ) {
        // Check if background image is set for the div
        let backgroundImage = window.getComputedStyle(node).backgroundImage;
        // Extract the URL from the background image property
        let imageURL = backgroundImage.replace(/url\(['"](.+)['"]\)/, "$1");
        // Push the image URL to the content array
        content.push(imageURL);
      } else {
        // Handle other elements recursively
        content.push(...collectNestedChildContent(node));
      }
    }
  });
  return content;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let fname = document.getElementById("f-name").value;
  let lname = document.getElementById("l-name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phoneno").value;
  let address = document.getElementById("address").value;
  let country = document.getElementById("country").value;
  let state = document.getElementById("state").value;
  formBlock.style.display = "none";
  arrOfUserData.push(fname, lname, email, phone, address, country, state);
});
// Add click event listeners to parent divs #c1 to #c12
for (let i = 1; i <= 12; i++) {
  let parentDiv = document.getElementById("c" + i);
  parentDiv.addEventListener("click", function (event) {
    if (arrOfUserData.length === 0) {
      formBlock.style.display = "block";
      event.preventDefault();
    } else {
      console.log(arrOfUserData.length);
      let nestedChildContent = collectNestedChildContent(parentDiv);
      localStorage.setItem("arr", JSON.stringify(nestedChildContent));
      localStorage.setItem("brr", JSON.stringify(arrOfUserData));
      window.location.href = "purchase.html";
    }
  });
}
localStorage.setItem("bag", bag);
userIcon.addEventListener("click", function (event) {
  if (i === 0) {
    formBlock.style.display = "flex";
    i = i + 1;
  } else {
    formBlock.style.display = "none";
    i = i - 1;
  }
});
