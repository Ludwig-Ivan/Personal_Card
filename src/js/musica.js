import { recursos_extra } from '../js/links.js'

const { pause_img, play_img } = recursos_extra

const backward = document.getElementById("backward");
const forward = document.getElementById("forward");
const play_pause = document.getElementById("play/pause");
const title = document.getElementById("song_name");
let song_name = [
    "Smells Like Teen Spirit - Nirvana",
    "La Cancion - Bad Bunny, J Balvin",
    "Chica Paranormal - Paulo Londra",
    "Do I Wanna Know - Artic Monkey",
    "Let It Happen - Tame Impala",
    "Lil Fish, Big Pond - Tobe Nwigwe",
    "Love Is a Bitch - Two Feet",
    "Redbone - Childish Gambino",
    "Six Days - Tokyo Drift",
    "Daddy Issues - The Neighbourhood",
];
let cont = 0;
title.innerText = song_name[cont];

let ban = false;
let vinilo = document.getElementsByClassName("vinilo")[0];
let play_btn = document.getElementById("play/pause");
let audio = document
    .querySelector(".contenedor_vinilo")
    .querySelector(".vinilo")
    .querySelector("audio");

//Funcion encargada del reacomodo de clases
function Reacomodo() {
    let vinilos = document.querySelectorAll(".contenedor_vinilo");
    for (let index = 0; index < vinilos.length; index++) {
        vinilos[index].className =
            "contenedor_vinilo " +
            [
                "uno",
                "dos",
                "tres",
                "cuatro",
                "cinco",
                "seis",
                "siete",
                "ocho",
                "nueve",
                "diez",
            ][index];
    }
}

//Funcion encargada del cambio de clase siguiente
const Cambio_Next = () => {
    let vinilos = document.querySelectorAll(".contenedor_vinilo");
    let vinilo_act = [...vinilos];
    let pila_vinilos = document.querySelector(".pila_vinilos");

    pila_vinilos.removeChild;

    vinilo_act.push(vinilo_act.shift());

    vinilo_act.forEach((vinilo) => {
        pila_vinilos.appendChild(vinilo);
    });

    Reacomodo();
};

//Funcion encargada del cambio de clase anterior
const Cambio_Back = () => {
    let vinilos = document.querySelectorAll(".contenedor_vinilo");
    let vinilo_act = [...vinilos];
    let pila_vinilos = document.querySelector(".pila_vinilos");

    pila_vinilos.removeChild;

    vinilo_act.unshift(vinilo_act.pop());

    vinilo_act.forEach((vinilo) => {
        pila_vinilos.appendChild(vinilo);
    });

    Reacomodo();
};

//Evento encargado de pausar o activar la cancion
play_pause.addEventListener("click", () => {
    vinilo = document.querySelector(".contenedor_vinilo");
    if (!ban) {
        play_btn.src = pause_img;
        vinilo.querySelector(".vinilo").querySelector("audio").play();
        ban = true;
    } else {
        play_btn.src = play_img;
        vinilo.querySelector(".vinilo").querySelector("audio").pause();
        ban = false;
    }
    audio = document
        .querySelector(".contenedor_vinilo")
        .querySelector(".vinilo")
        .querySelector("audio");

    audio.addEventListener("ended", () => {
        play_btn.src = play_img;

        //Lanzo el evento click para forward
        const next = new Event("click");
        forward.dispatchEvent(next);
    });
});
//Evento encargado de retroceder a la anterior cancion
forward.addEventListener("click", () => {
    if (cont < 9) {
        const vinilo_animated =
            document.querySelector(".contenedor_vinilo");
        vinilo_animated.style.visibility = "hidden";

        cont++;
        title.innerText = song_name[cont];
        if (!vinilo.getElementsByTagName("audio")[0].paused)
            vinilo.getElementsByTagName("audio")[0].pause();
        play_btn.src = play_img;
        ban = false;

        Cambio_Next();

        const play = new Event("click");
        play_pause.dispatchEvent(play);
    }
});
//Evento encargado de pasar a la siguiente cancion
backward.addEventListener("click", () => {
    if (cont > 0) {
        cont--;
        title.innerText = song_name[cont];
        if (!vinilo.getElementsByTagName("audio")[0].paused)
            vinilo.getElementsByTagName("audio")[0].pause();
        play_btn.src = play_img;
        ban = false;
        Cambio_Back();
        const play = new Event("click");
        play_pause.dispatchEvent(play);
    }

    const vinilo_animated =
        document.querySelector(".contenedor_vinilo");
    vinilo_animated.style.visibility = "visible";
});