const arrCard = [
  {
    img: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/x9roxh8iovqhylczjqp7",
    name: "Fussion cafe, Bhopal",
    rating: 4.1,
    discription: "Peeli Daal, Salad, desert",
    rupees: "₹100 for one",
  },
  {
    img: "https://b.zmtcdn.com/data/pictures/9/19653249/cb6337b1f426a0f5c5a165e3d425d6c5_o2_featured_v2.jpg",
    name: "Burger lounge",
    rating: 4.7,
    discription: "Lounge India, Crunchy",
    rupees: "₹100 for one",
  },
  {
    img: "https://b.zmtcdn.com/data/dish_photos/26e/0b0d74acb1f5012c0bdd21b4f448026e.jpg",
    name: "Tiger Grill",
    rating: 3.2,
    discription: "Grill , Fried Potatoes",
    rupees: "₹100 for one",
  },
  {
    img: "https://b.zmtcdn.com/data/pictures/7/20410927/3d6d15fb0172ef1f5dfa3ad9de55098e_o2_featured_v2.jpg",
    name: "Cafe Grill",
    rating: 4.2,
    discription: "North Indian, Fast food",
    rupees: "₹200 for one",
  },
  {
    img: "https://b.zmtcdn.com/data/pictures/chains/0/18624990/64e328ee2b6fe4d82aa36f2f5213f737_o2_featured_v2.jpg",
    name: "The Belgian waffle",
    rating: 2.9,
    discription: "Waffle, Pancake, dessert ",
    rupees: "₹200 for one",
  },
  {
    img: "https://b.zmtcdn.com/data/pictures/5/18652005/7b51f003dfaf50060f5dd03e3f2bd3d1_o2_featured_v2.jpg",
    name: "Romba South",
    rating: 3.6,
    discription: "Andhra, South India, Ice",
    rupees: "₹200 for one",
  },
  {
    img: "https://b.zmtcdn.com/data/dish_photos/a0f/8c61f8ace4f0813dafa114cf848cca0f.jpg",
    name: "Malakar Reataurant",
    rating: 4.4,
    discription: "New Reastaurant, biryani",
    rupees: "₹300 for two",
  },
  {
    img: "https://b.zmtcdn.com/data/pictures/0/19239950/3dd2ebf6f7db09ca53fa60e60d9b6b7b_o2_featured_v2.jpg",
    name: "Veg Vites",
    rating: 3.9,
    discription: "Roti,Daal,Street Food",
    rupees: "₹300 for two",
  },
  {
    img: "https://b.zmtcdn.com/data/dish_photos/10d/48627bb84842db5356b106eccf96410d.jpg",
    name: "Indian Thali",
    rating: 5.0,
    discription: "Roti,Daal,Street Food",
    rupees: "₹300 for two",
  },
];
const Product_Container = document.getElementById("Products");

for (let i = 0; i < arrCard.length; i++) {
  // Create main card

  const cardContainer = document.createElement("div");
  cardContainer.className = "Card_Container";

  const foodImage = document.createElement("div");
  foodImage.className = "Food_Image";

  const Img = document.createElement("div");
  Img.className = "Img";

  const anchorTag = document.createElement("a");
  anchorTag.target = "blank";
  anchorTag.href = "https://www.zomato.com/bhopal/burger-king-gulmohar-colony";

  const cardimageTag = document.createElement("img");
  cardimageTag.className = "Food_Img";

  cardimageTag.src = arrCard[i].img;

  anchorTag.appendChild(cardimageTag);
  Img.appendChild(anchorTag);
  foodImage.appendChild(Img);
  cardContainer.appendChild(foodImage);

  const span1 = document.createElement("span");
  span1.className = "Para";
  span1.textContent = "50% OFF up to 100";

  Img.appendChild(span1);
  foodImage.appendChild(Img);

  const span2 = document.createElement("span");
  span2.className = "Para Para2";
  span2.textContent = "45 min";
  Img.appendChild(span2);

  const nameRating = document.createElement("div");
  nameRating.className = "Name_Rating";

  const Paragrph = document.createElement("p");
  Paragrph.className = "Brand";
  Paragrph.id = "text";
  Paragrph.textContent = arrCard[i].name;

  const div1 = document.createElement("div");
  div1.className = "Butn";
  div1.textContent = arrCard[i].rating;

  nameRating.appendChild(Paragrph);
  nameRating.appendChild(div1);
  cardContainer.appendChild(nameRating);

  const quality = document.createElement("div");
  quality.className = "Quality_Rs";

  const span3 = document.createElement("span");
  span3.textContent = arrCard[i].discription;

  const span4 = document.createElement("span");
  span4.textContent = arrCard[i].rupees;

  quality.appendChild(span3);
  quality.appendChild(span4);
  cardContainer.appendChild(quality);

  const time = document.createElement("div");
  time.className = "Timing";
  time.textContent = "Opens tommorow at 1pm";
  cardContainer.appendChild(time);

  const line1 = document.createElement("div");
  line1.className = "Horizontal";
  cardContainer.appendChild(line1);

  const anchorTag2 = document.createElement("a");
  anchorTag2.target = "blank";
  anchorTag2.className = "Delivery_Text";
  anchorTag2.style.textDecoration = "none";
  anchorTag2.href = "https://www.zomato.com/bhopal/burger-king-gulmohar-colony";

  const deleivery = document.createElement("div");
  deleivery.className = "Delivery_Text";
  anchorTag2.appendChild(deleivery);

  const cardimg = document.createElement("img");
  cardimg.src = "Images/arow logo.webp";
  cardimg.height = 20;
  anchorTag2.appendChild(cardimg);

  const span5 = document.createElement("span");
  span5.className = "Text";
  span5.innerHTML =
    "<span>Follows all Max Safety measures to ensure <br />your food is safe</span> ";
  anchorTag2.appendChild(span5);

  const cardimg1 = document.createElement("img");
  cardimg1.src = "Images/delivery.webp";
  cardimg1.height = 20;
  cardimg1.width = 62;
  anchorTag2.appendChild(cardimg1);

  cardContainer.appendChild(anchorTag2);

  Product_Container.appendChild(cardContainer);
  document.getElementsByTagName("p")[i].addEventListener("click", change);
  function change() {
    console.log("hi");
    const name = prompt("plz enter new name", "");
    // document.getElementById("text").innerText = "New Burger";
    // document.getElementsByTagName("p")[i].innerText = "New Burger";
    document.getElementsByTagName("p")[i].innerText = name;
  }
}

const cardContainer = document.getElementById("card_Container");

const parentCard = document.createElement("div");
parentCard.className = "card";

const title = document.createElement("h4");
title.textContent = "Zomato-Card";

const valueInputBox = document.createElement("input");
valueInputBox.type = "button";
valueInputBox.size = "1";
valueInputBox.max = "10";
valueInputBox.id = "number";
valueInputBox.value = "1";

const incrementBox = document.createElement("input");
incrementBox.className = "input";
incrementBox.type = "button";
incrementBox.value = "Increment";
incrementBox.addEventListener("click", function incrementValue() {
  var values = document.getElementById("number").value;
  if (values < 10) {
    values++;
    document.getElementById("number").value = values;
  }
});

const decrementBox = document.createElement("input");
decrementBox.className = "input";
decrementBox.type = "button";
decrementBox.value = "Decrement";
decrementBox.addEventListener("click", function decrementValue() {
  var values = document.getElementById("number").value;
  if (values > 1) {
    values--;
    document.getElementById("number").value = values;
  }
});

parentCard.appendChild(decrementBox);
parentCard.appendChild(valueInputBox);
parentCard.appendChild(incrementBox);
parentCard.appendChild(title);

cardContainer.appendChild(parentCard);
