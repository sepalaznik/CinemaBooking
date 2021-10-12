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
function getValueCinemas() {
    let selectCinemas = document.querySelector(".select-cinemas");
    let cinemasTitle = selectCinemas.value;
    return cinemasTitle;
};
function getValueTime() {
    let selectTime = document.querySelector(".select-time");
    let sessionTime = selectTime.value;
    return sessionTime;
};
function getValueDate() {
    let sessionMonth = document.querySelector(".selected").children[0].textContent.toLowerCase();
    let sessionDay = document.querySelector(".selected").children[1].textContent;
    let sessionDate = sessionDay + " " + sessionMonth;
    return sessionDate;
};
payOrder.addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll(".active");
    let movieTitle = document.querySelector(".movie-title-ru").textContent;
    let order = {
        movie: movieTitle,
        cinemas: getValueCinemas(),
        day: getValueDate(),
        time: getValueTime(),
        tickets: ticketCount.textContent,
        payment: priceCount.textContent
    }
    
    alert(" Фильм: " + order.movie + ". \n Кинотеатр: " + order.cinemas + ". \n Сеанс: " + order.day + ", " + order.time + ". \n Куплено билетов: " + order.tickets + ". \n Сумма оплаты: " + order.payment + " рублей. \n Оплата прошла успешно");
    
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
