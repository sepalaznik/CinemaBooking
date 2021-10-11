// выбор места:
const schemeSvg = document.querySelector(".scheme-svg");
const priceCount = document.querySelector(".price-count");
const ticketCount = document.querySelector(".ticket-count");
let TICKET_COST = 800;
let totalCount = 0;

schemeSvg.addEventListener("click", (event) => {
    if (!event.target.classList.contains("booked")) {
        event.target.classList.toggle("active");
        let selectedSeats = schemeSvg.querySelectorAll(".active").length;
        ticketCount.textContent = selectedSeats;
        totalPrice = selectedSeats * TICKET_COST;
        priceCount.textContent = totalPrice;
    }
});


// выбор даты:
const selectDate = document.querySelectorAll(".session-date-item");

selectDate.forEach((item) => {
    item.addEventListener("click", (event) => {
        selectDate.forEach((element) => {
            element.classList.remove("selected")
        })
        event.currentTarget.classList.toggle("selected");
    })
});

// минимизация меню:
const menuButton = document.querySelector(".m-menu");
const menuMini = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    menuMini.classList.toggle("is-open");
});

// виртуальный чек оплаты и очистка формы:
const payOrder = document.querySelector(".button-pay");

payOrder.addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll(".active");

    alert("Куплено билетов: " + ticketCount.textContent + ". Сумма оплаты: " + priceCount.textContent + " рублей. Оплата прошла успешно");
    selectedSeats.forEach((seat) => {
        seat.classList.remove("active");
        seat.classList.add("booked");
        selectDate.forEach((element) => {
            element.classList.remove("selected")
        });
        priceCount.textContent = 0;
        ticketCount.textContent = 0;
    })

});
