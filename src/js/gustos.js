let cards1 = document.getElementsByClassName("card uno");
let cards2 = document.getElementsByClassName("card dos");
let cards3 = document.getElementsByClassName("card tres");
let cards4 = document.getElementsByClassName("card cuatro");
let cards5 = document.getElementsByClassName("card cinco");
let cards6 = document.getElementsByClassName("card seis");
let cards7 = document.getElementsByClassName("card siete");
let cards8 = document.getElementsByClassName("card ocho");

let carta_1_texto = cards1[0];
let carta_2_texto = cards2[0];
let carta_3_texto = cards3[0];
let carta_4_texto = cards4[0];
let carta_5_texto = cards5[0];
let carta_6_texto = cards6[0];
let carta_7_texto = cards7[0];
let carta_8_texto = cards8[0];

let carta_1_imagen = cards1[1];
let carta_2_imagen = cards2[1];
let carta_3_imagen = cards3[1];
let carta_4_imagen = cards4[1];
let carta_5_imagen = cards5[1];
let carta_6_imagen = cards6[1];
let carta_7_imagen = cards7[1];
let carta_8_imagen = cards8[1];

carta_1_texto.addEventListener("click", () => {
    let carta_actual = document.getElementsByClassName("card uno");
    carta_actual[0].className = carta_1_texto.className;
    carta_1_texto.className = "card uno";
    carta_actual[1].className = carta_1_imagen.className;
    carta_1_imagen.className = "card uno";
});

carta_2_texto.addEventListener("click", () => {
    let carta_actual = document.getElementsByClassName("card uno");
    carta_actual[0].className = carta_2_texto.className;
    carta_2_texto.className = "card uno";
    carta_actual[1].className = carta_2_imagen.className;
    carta_2_imagen.className = "card uno";
});

carta_3_texto.addEventListener("click", () => {
    let carta_actual = document.getElementsByClassName("card uno");
    carta_actual[0].className = carta_3_texto.className;
    carta_3_texto.className = "card uno";
    carta_actual[1].className = carta_3_imagen.className;
    carta_3_imagen.className = "card uno";
});

carta_4_texto.addEventListener("click", () => {
    let carta_actual = document.getElementsByClassName("card uno");
    carta_actual[0].className = carta_4_texto.className;
    carta_4_texto.className = "card uno";
    carta_actual[1].className = carta_4_imagen.className;
    carta_4_imagen.className = "card uno";
});

carta_5_texto.addEventListener("click", () => {
    let carta_actual = document.getElementsByClassName("card uno");
    carta_actual[0].className = carta_5_texto.className;
    carta_5_texto.className = "card uno";
    carta_actual[1].className = carta_5_imagen.className;
    carta_5_imagen.className = "card uno";
});

carta_6_texto.addEventListener("click", () => {
    let carta_actual = document.getElementsByClassName("card uno");
    carta_actual[0].className = carta_6_texto.className;
    carta_6_texto.className = "card uno";
    carta_actual[1].className = carta_6_imagen.className;
    carta_6_imagen.className = "card uno";
});

carta_7_texto.addEventListener("click", () => {
    let carta_actual = document.getElementsByClassName("card uno");
    carta_actual[0].className = carta_7_texto.className;
    carta_7_texto.className = "card uno";
    carta_actual[1].className = carta_7_imagen.className;
    carta_7_imagen.className = "card uno";
});

carta_8_texto.addEventListener("click", () => {
    let carta_actual = document.getElementsByClassName("card uno");
    carta_actual[0].className = carta_8_texto.className;
    carta_8_texto.className = "card uno";
    carta_actual[1].className = carta_8_imagen.className;
    carta_8_imagen.className = "card uno";
});