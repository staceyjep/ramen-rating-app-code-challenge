const ramens = [
  {
    id: 1,
    name: "Gyukotsu Ramen",
    restaurant: "Ichiran",
    image: "images/gyukotsu.jpg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Kojiro Ramen",
    restaurant: "Menya",
    image: "images/kojiro.jpg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Naruto Ramen",
    restaurant: "Ramen-ya",
    image: "images/naruto.jpg",
    rating: 3,
    comment: "Not to bad",
  },
  {
    id: 4,
    name: "Nirvana ramen",
    restaurant: "Tuyoki",
    image: "images/nirvana.jpg",
    rating: 4,
    comment: "Fair",
  },
  {
    id: 5,
    name: "Shoyu ramen",
    restaurant: "chingohi",
    image: "images/shoyu.jpg",
    rating: 2,
    comment: "terrible",
  },
];

const ramenMenu = document.getElementById("menu");

const ramenDetails = document.getElementById("details");

const ramenForm = document.getElementById("ratingform");

function displayRamens() {
  menu.innerHTML = "";

  for (var i = 0; i < ramens.length; i++) {
    const ramen = ramens[i];

    const img = document.createElement("img");

    img.src = ramen.image;

    img.alt = ramen.name;

    img.classList.add("ramen-image");

    img.addEventListener("click", function () {
      handleClick(ramen);
    });

    menu.appendChild(img);
  }
}

function handleClick(ramen) {
  document.getElementById("detail-image").src =
    ramen.image || "images/placeholder.jpg";

  document.getElementById("detail-name").textContent = ramen.name;

  document.getElementById("detail-restaurant").textContent =
    "Restaurant: " + ramen.restaurant;

  document.getElementById("detail-rating").textContent =
    "Rating: " + ramen.rating + "/5";

  document.getElementById("detail-comment").textContent =
    "Comment: " + ramen.comment;
}

function handleFormSubmit(event) {
  event.preventDefault();

  const newRamen = {
    id: ramens.length + 1,
    name: document.getElementById("name").value,
    restaurant: document.getElementById("restaurant").value,
    image: document.getElementById("image").value,
    rating: parseInt(document.getElementById("rating").value) || 0,
    comment: document.getElementById("comment").value,
  };

  ramens.push(newRamen);

  displayRamens();

  ramenForm.reset();
}

ramenForm.addEventListener("submit", function (event) {
  handleFormSubmit(event);
});

displayRamens();