const wrapper = document.querySelector(".wrapper");

function CreateCard(product) {
  return ` <div class="cart">
    <div class="nav_cart">
        <h2>Корзина</h2>
        <i class="fa-regular fa-x"></i>
    </div>

    <div class="hr_cart"></div>
    <div class="cart_info">
        <img width="136" height="120" src="${product.image}" alt="picture">
        <span class="c">
            <h4>${product.name}</h4>
            <h5>+ Подарок: <a href="#">“Приложение к замкам Golden Service”</a></h5>
            <select id="count" >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
            </select>
        </span>
        <h class="deletes" data-id="${product.id}">
            <i class="fa-regular fa-trash-can" style="color: #74C0FC;"></i>
            <p>Удалить</p>
        </h>
    </div>
    <span id="price">
        <p>Итого:</p>
        <h4>${product.newPrice}</h4>
    </span>
    <span class="buttons">
        <button class="button">Оформить заказ</button>
        <button>Продолжить покупки</button>
    </span>
</div>`;
}

function save(products) {
  const cart = {
    id: products.id,
    time: products.time,
    newPrice: products.newPrice,
    oldPrice: products.oldPrice,
    name: products.name,
  };

  let data = [];
  if (localStorage.getItem("products")) {
    data = JSON.parse(localStorage.getItem("products"));
  }

  data.push(cart);
  localStorage.setItem("products", JSON.stringify(data));

  const card = CreateCard(cart);
  console.log(card);
  wrap.innerHTML += card;
}

document.addEventListener("DOMContentLoaded", function () {
  let data = [];
  if (localStorage.getItem("products")) {
    data = JSON.parse(localStorage.getItem("products"));
  }

  if (data.length > 0) {
    data.forEach((value) => {
      const cart = CreateCard(value);
      wrapper.innerHTML += cart;
    });
  }

  const deletes = document.querySelectorAll(".deletes");

  deletes &&
    deletes.forEach((value) => {
      value.addEventListener("click", function () {
        let isDelete = confirm("rostdan ham o'chirmoqchimisiz");

        if (isDelete) {
          let copied = JSON.parse(JSON.stringify(data));
          let deleteId = this.getAttribute("data-id");
          console.log(deleteId);
          copied = copied.filter((el) => {
            return el.id != deleteId;
          });
          localStorage.setItem("products", JSON.stringify(copied));
          window.location.reload();
        }
      });
    });
});
