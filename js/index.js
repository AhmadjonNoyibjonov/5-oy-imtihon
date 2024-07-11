async function getUrl(url) {
  try {
    let response = await fetch(url);
    let res = await response.json();
    return res;
  } catch (error) {
    return error;
  }
}

function CreateCard(product) {
  return `
  <div class="card" data-id="${product.id}">
    <div class="card__head">
      <div class="isExist">
          <h3>${product.isExist}</h3>
      </div>
      <div class="sale">
          <span>SALE</span>
      </div>
    </div>
    <div class="part__img">
      <img src="${product.image}" alt="product picture">
    </div>
    <div class="part__info-card">
      <div class="card__info__head">
          <div class="stars">
              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
              <i class="fa-solid fa-star" style="color: #FFD43B;"></i>
              <i class="fa-regular fa-star" style="color: #8c8b87;"></i>
              <i class="fa-regular fa-star" style="color: #8c8b87;"></i>
              <div class="coments"><span>(${product.comments}) отзывов</span></div>
          </div>
          <p>${product.name}</p><br>
          <div class="price">
              <h3 class="new_price">
                  ${product.newPrice}₽
              </h3>
              <h3 class="old_price">
                  ${product.oldPrice}₽
              </h3>
          </div>

      </div>
    </div>
    <div class="box"><i class="fa-solid fa-gift" style="color: #4295e4;"></i>Подарок</div>
  </div>
  `;
}

document.addEventListener("DOMContentLoaded", async function () {
  const wrapper = document.querySelector(".block_cards");
  const loader = document.querySelector(".loader");
  const select = document.querySelector("#kategory");
  const buttons = document.querySelectorAll(".button");

  try {
    const data = await getUrl("https://cars-pagination.onrender.com/products");
    data.forEach((element) => {
      if (element.id > 80 && element.id < 93) {
        const card = CreateCard(element);
        wrapper.innerHTML += card;
        loader.style.display = "none";
      }

      select.addEventListener("change", function () {
        wrapper.innerHTML = "";

        data.forEach((value) => {
          if (this.value === value.category) {
            const card = CreateCard(value);
            wrapper.innerHTML += card;

            const cards = document.querySelectorAll(".card");
            cards.length &&
              cards.forEach((value) => {
                value.addEventListener("click", function () {
                  const cardId = this.getAttribute("data-id");
                  if (cardId) {
                    window.location.assign(
                      `http://127.0.0.1:5500/pages/pages.html?id=${cardId}`
                    );
                  }
                });
              });
          }
        });
      });


      buttons[0].addEventListener('click',function() {
        wrapper.innerHTML = ''

        data.forEach(value => {
          if(value.newPrice > 4000 && value.newPrice < 15000) {
            const card = CreateCard(value);
            wrapper.innerHTML += card;

            const cards = document.querySelectorAll(".card");
            cards.length &&
              cards.forEach((value) => {
                value.addEventListener("click", function () {
                  const cardId = this.getAttribute("data-id");
                  if (cardId) {
                    window.location.assign(
                      `http://127.0.0.1:5500/pages/pages.html?id=${cardId}`
                    );
                  }
                });
              });

          }
        })
      })

      buttons[1].addEventListener('click',function() {
        wrapper.innerHTML = ''

        data.forEach(value => {
          if(value.newPrice > 15000 && value.newPrice < 30000) {
            const card = CreateCard(value);
            wrapper.innerHTML += card;

            const cards = document.querySelectorAll(".card");
            cards.length &&
              cards.forEach((value) => {
                value.addEventListener("click", function () {
                  const cardId = this.getAttribute("data-id");
                  if (cardId) {
                    window.location.assign(
                      `http://127.0.0.1:5500/pages/pages.html?id=${cardId}`
                    );
                  }
                });
              });

          }
        })
      })

      buttons[2].addEventListener('click',function() {
        wrapper.innerHTML = ''

        data.forEach(value => {
          if(value.newPrice > 30000 && value.newPrice < 45000) {
            const card = CreateCard(value);
            wrapper.innerHTML += card;

            const cards = document.querySelectorAll(".card");
            cards.length &&
              cards.forEach((value) => {
                value.addEventListener("click", function () {
                  const cardId = this.getAttribute("data-id");
                  if (cardId) {
                    window.location.assign(
                      `http://127.0.0.1:5500/pages/pages.html?id=${cardId}`
                    );
                  }
                });
              });

          }
        })
      })

      buttons[3].addEventListener('click',function() {
        wrapper.innerHTML = ''

        data.forEach(value => {
          if(value.newPrice > 45000 && value.newPrice < 60000) {
            const card = CreateCard(value);
            wrapper.innerHTML += card;

            const cards = document.querySelectorAll(".card");
            cards.length &&
              cards.forEach((value) => {
                value.addEventListener("click", function () {
                  const cardId = this.getAttribute("data-id");
                  if (cardId) {
                    window.location.assign(
                      `http://127.0.0.1:5500/pages/pages.html?id=${cardId}`
                    );
                  }
                });
              });

          }
        })
      })

      buttons[4].addEventListener('click',function() {
        wrapper.innerHTML = ''

        data.forEach(value => {
          if(value.newPrice > 60000 && value.newPrice < 79000) {
            const card = CreateCard(value);
            wrapper.innerHTML += card;

            const cards = document.querySelectorAll(".card");
            cards.length &&
              cards.forEach((value) => {
                value.addEventListener("click", function () {
                  const cardId = this.getAttribute("data-id");
                  if (cardId) {
                    window.location.assign(
                      `http://127.0.0.1:5500/pages/pages.html?id=${cardId}`
                    );
                  }
                });
              });

          }
        })
      })

      const cards = document.querySelectorAll(".card");
      cards.length &&
        cards.forEach((value) => {
          value.addEventListener("click", function () {
            const cardId = this.getAttribute("data-id");
            if (cardId) {
              window.location.assign(
                `http://127.0.0.1:5500/pages/pages.html?id=${cardId}`
              );
            }
          });
        });
    });
  } catch (error) {
    return error;
  }
});

//   getUrl("https://cars-pagination.onrender.com/products")
//     .then((data) => {
//       data.length &&
//         data.forEach(function (element) {
//           if (element.id > 80 && element.id < 93) {
//             let card = CreateCard(element);
//             wrapper.innerHTML += card;
//             loader.style.display = "none";
//           }
//         });

//       select.addEventListener("change", function () {
//         wrapper.innerHTML = "";
//         data.forEach((value) => {
//           if (this.value == value.category) {
//             const card = CreateCard(element);
//             wrapper.innerHTML += card;
//           }
//         });
//       });

// const cards = document.querySelectorAll(".card");
// cards.length &&
//   cards.forEach((value) => {
//     value.addEventListener("click", function () {
//       const cardId = this.getAttribute("data-id");
//       if (cardId) {
//         window.location.assign(
//           `http://127.0.0.1:5500/pages/pages.html?id=${cardId}`
//         );
//       }
//     });
//   });
//     })
//     .catch((error) => {
//       return error;
//     });
// });
