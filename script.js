"use strict"

//const btn = document.querySelector("button"); // - выделили первый элемент буттон


//btn.onclick = function() {
//    alert("Click")
//};                              - так делать не надо


//btn.addEventListener("click", () => {
//  alert("Click");
//});

//btn.addEventListener("click", () => {
// alert("Second Click");
//});                            // - события выполняются в порядке очереди

//btn.addEventListener("mouseenter", () => {
// console.log("Mouse!")
//});                              // - mouseenter = когда наводится мышка

//btn.addEventListener("click", (e) => {
//  console.log(e.target); // - target - доступ к элементу
// e.target.remove(); // - с помощью єтой строки удалили кнопку
//console.log("Hover")
// }); 

// - event - событие

// ------------removeEventListener() пример -------------

/*const deleteElement = (e) => {
    e.target.remove();   
};

btn.addEventListener("click", deleteElement); // - удалили кнопку после нажатия
*/

/*let i = 0;
const deleteElement = (e) => {
    console.log(e.target);
    i++;
    if (i == 1) {
        btn.removeEventListener("click", deleteElement);
    }
}; // после первого раза события обработчик удаляется 

btn.addEventListener("click", deleteElement);*/

// ---------------------ВСПЛЫТИЕ СОБЫТИЙ--------------------

const overlay = document.querySelector(".overlay");

/*const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type)
}
btn.addEventListener("click", deleteElement);
overlay.addEventListener("click", deleteElement);*/

// ЭЛЕМЕНТЫ СРАБАТЫВАЮТ СНАЧАЛО НА ВЛОЖЕНОМ ЭЛЕМЕНТЕ И ПОТОМ ВЫШЕ ПО ДОМ ДЕРЕВУ

// ---------------------ОТМЕНА СТАНДАРТНЫХ ПОВЕДЕНИЙ БРАУЗЕРА--------------------

const link = document.querySelector("a");

link.addEventListener("click", (event) => {
    event.preventDefault();

    console.log(event.target);
}); // - сказали браузеру отменить делать стандартные действия (с ютую ссылкой)

// ------------- НАВЕСИТЬ ОДИН ОБРАБОТЧИК СОБЫТИЯ (функцию) НА МНОГО ЭЛЕМЕНТОВ ------------

const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type)
}


/*const btns = document.querySelectorAll("button");
btns.forEach(item => {
    item.addEventListener("click", deleteElement);
});*/

// -------------------ОПЦИИ СОБЫТИЯ -----------------

const btns = document.querySelectorAll("button");
btns.forEach(item => {
    item.addEventListener("click", deleteElement, { once: true });
});

// - В ОБЬЕКТ ONCE + TRUE создает ситуацию когда событие делается один раз






// ---------------ТЕРМИНЫ------------

// EVENT -событие
// target - доступ к элементу
// event.type - тип события