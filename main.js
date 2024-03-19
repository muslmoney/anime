const phones = [
  {
    img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/11/eiichiro-oda-one-piece.jpg",
    price: 250,
    oldPrice: 300,
    name: "attack on titan",
  },
  {
    img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/11/eiichiro-oda-one-piece.jpg",
    price: 850,
    oldPrice: 900,
    name: "attack on titan",
  },
  {
    img: "https://assets.telegraphindia.com/telegraph/2023/Aug/1691401019_cms2.jpg",
    price: 550,
    oldPrice: 600,
    name: "attack on titan",
  },
  {
    img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/11/eiichiro-oda-one-piece.jpg",
    price: 650,
    oldPrice: 700,
    name: "attack on titan",
  },
  {
    img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/11/eiichiro-oda-one-piece.jpg",
    price: 350,
    oldPrice: 400,
    name: "attack on titan",
  },
  {
    img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/11/eiichiro-oda-one-piece.jpg",
    price: 450,
    oldPrice: 500,
    name: "attack on titan",
  },
  {
    img: "https://cdn.vcgamers.com/news/wp-content/uploads/2023/08/Gambar-Anime.jpg",
    price: 450,
    oldPrice: 500,
    name: "attack on titan",
  },
  {
    img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/11/eiichiro-oda-one-piece.jpg",
    price: 450,
    oldPrice: 500,
    name: "attack on titan",
  },
  {
    img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/11/eiichiro-oda-one-piece.jpg",
    price: 450,
    oldPrice: 500,
    name: "attack on titan",
  },
  {
    img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/11/eiichiro-oda-one-piece.jpg",
    price: 450,
    oldPrice: 500,
    name: "attack on titan",
  },
  {
    img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/11/eiichiro-oda-one-piece.jpg",
    price: 450,
    oldPrice: 500,
    name: "attack on titan",
  },

  {
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/06b6018b-fd75-4603-b289-adbce18d7aba/dexiqi4-227730b8-9d57-4a94-8ae6-1858e3e7534b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA2YjYwMThiLWZkNzUtNDYwMy1iMjg5LWFkYmNlMThkN2FiYVwvZGV4aXFpNC0yMjc3MzBiOC05ZDU3LTRhOTQtOGFlNi0xODU4ZTNlNzUzNGIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rS3xb6xVOE5Z_L14rQsmQA1X9jF8bqY2J0bM0Lolg5M",
    price: 450,
    oldPrice: 500,
    name: "attack on titan",
  },
  {
    img: "https://static0.cbrimages.com/wordpress/wp-content/uploads/2023/11/eiichiro-oda-one-piece.jpg",
    price: 450,
    oldPrice: 500,
    name: "attack on titan",
  },
];

const wrap = document.querySelector(".wrap");
console.log(wrap);

phones.map((item) => {
  wrap.innerHTML += `
    <div class="card">
        <img src=${item.img} alt="">
        <h4>${item.name}</h4>
        <h2>${item.price}$</h2>
        <s>${item.oldPrice}$</s> <br>
        <br>
        <button>
            Buy
        </button>
    </div>
    `;
});
