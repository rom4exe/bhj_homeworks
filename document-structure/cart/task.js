const quantityControl_d = document.querySelectorAll(
  ".product__quantity-control_dec"
);
const quantityControl_i = document.querySelectorAll(
  ".product__quantity-control_inc"
);
const buttons = document.querySelectorAll(".product__add");
let quantityValue;

//действие на убавить к-во
function dec(control) {
  quantityValue = control.parentElement.querySelector(
    ".product__quantity-value"
  );
  let currentValue = parseInt(quantityValue.textContent);
  if (currentValue > 1) {
    quantityValue.textContent = currentValue - 1;
  }
}

//действие на прибавить к-во
function inc(control) {
  quantityValue = control.parentElement.querySelector(
    ".product__quantity-value"
  );
  let currentValue = parseInt(quantityValue.textContent);
  quantityValue.textContent = currentValue + 1;
}

// действие на кнопку
function addCart(button) {
  const productElement = button.closest(".product");
  const productId = productElement.getAttribute("data-id");
  const productImage = productElement.querySelector(".product__image").src;
  const productQuantity = parseInt(
    productElement.querySelector(".product__quantity-value").textContent
  );

  const cartProduct = document.querySelector(
    `.cart__product[data-id="${productId}"]`
  );

  if (cartProduct) {
    //  увеличиваем количество если товар уже есть
    const cartProductCount = cartProduct.querySelector(".cart__product-count");
    cartProductCount.textContent =
      parseInt(cartProductCount.textContent) + productQuantity;
  } else {
    // Добавляем новый товар в корзину

    // const cartProducts = document.querySelector(".cart__products");
    // const cartProduct = document.createElement("div");
    // cartProduct.classList.add("cart__product");
    // cartProduct.setAttribute("data-id", productId);
    // cartProduct.innerHTML = `<img class="cart__product-image" src="${productImage}" alt=""><div class="cart__product-count">${productQuantity}</div>`;
    // cartProducts.appendChild(cartProduct);
    // // Добавляем крестик для удаления
    // const cartRemove = document.createElement("a");
    // cartRemove.href = "#";
    // cartRemove.className = "cart__product_remove";
    // cartRemove.innerHTML = "&times;";
    // cartProduct.appendChild(cartRemove);
    // // обработчик удаления для крестика
    // cartRemove.addEventListener("click", (e) => {
    //   e.preventDefault();
    //   cartProduct.remove();
    // });

    const cartProducts = document.querySelector(".cart__products");
    cartProducts.insertAdjacentHTML(
      "beforeend",
      `
      <div class="cart__product" data-id = ${productId}>
      <img class="cart__product-image" src="${productImage}" alt="">
        <div class="cart__product-count">${productQuantity}</div>
        <a href="#" class="cart__product_remove">&times;</a>
        </div>
      </div>
      `
    );

    cartsRemove = document.querySelectorAll(".cart__product_remove");
    cartsRemove.forEach((cartRemove) => {
      cartRemove.addEventListener("click", () => {
        cartRemove.parentElement.remove();
      });
    });
  }
}

//обработчик -
quantityControl_d.forEach((control) => {
  control.addEventListener("click", () => dec(control));
});
//обработчик +
quantityControl_i.forEach((control) => {
  control.addEventListener("click", () => inc(control));
});
//обработчик кнопки
buttons.forEach((button) => {
  button.addEventListener("click", () => addCart(button));
});
