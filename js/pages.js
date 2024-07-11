async function getUrl(url) {
  try {
    let response = await fetch(url);
    let res = await response.json();
    return res;
  } catch (error) {
    return error;
  }
}

const wrapper = document.querySelector(".wrapper");
const loader = document.querySelector(".loader");

function CreateCard(product) {
  return ` <div class="information_product information_product_container" data-id="${product.id}">
    <img width="500" height="500" src="${product.image}" alt="picture">
    <div class="info">
        <h1>${product.name}</h1>
        <p>Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии,
            красивые
            формы.</p>
        <p>Подходит для установки на деревянную/межкомнатную дверь.</p>
        <h6>Цена</h6>
        <span>
            <h5 class="new_price">${product.newPrice}₽</h5>
            <h5 class="old_price">${product.oldPrice}₽</h5>
        </span>
        <button class="button">КОРЗИНКА</button>
    </div>

</div>`;
}

function getStoredProducts() {
  let products = localStorage.getItem("products");
  return products ? JSON.parse(products) : [];
}

function saveProductToStorage(product) {
  let products = getStoredProducts();
  let confirmObekt = products.some((el) => el.id === product.id);
  if (!confirmObekt) {
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    alert("Muvaffaqqiyatli saqlandi");
  } else {
    alert("Bunday mahsulotdan mavjud");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let url = window.location.href;
  let id = url.split("id=")[1];
  if (!id) {
    window.location.assign("http://127.0.0.1:5500/#");
    return;
  }

  getUrl(`https://cars-pagination.onrender.com/products/${id}`)
    .then((data) => {
      if (data.id) {
        const card = CreateCard(data);
        wrapper.innerHTML = card;
        loader.style.display = "none";
      } else {
        wrapper.innerHTML = "Bunday mahsulot topilmadi.";
      }
      const button = document.querySelector(".button");
      button.addEventListener("click", function () {
        saveProductToStorage({
          id: data.id,
          name: data.name,
          newPrice: data.newPrice,
          oldPrice: data.oldPrice,
          image: data.image,
          time: Date.now(),
        });
        window.location.assign(`http://127.0.0.1:5500/pages/cart.html`);
      });
    })
    .catch((error) => {
      return error;
    });
});
