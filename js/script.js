const historiaButton = document.getElementById("historia");
const biografiaText = document.getElementById("biografia2");

// Registra el efecto al hacer clic solo cuando existen ambos elementos.
if (historiaButton && biografiaText) {
    let highlightTimeout;

    historiaButton.addEventListener("click", () => {
        biografiaText.scrollIntoView({ behavior: "smooth", block: "center" });
        biografiaText.classList.add("sombra");

        clearTimeout(highlightTimeout);
        highlightTimeout = setTimeout(() => {
            biografiaText.classList.remove("sombra");
        }, 3000);
    });
}



// let num = 0;
// let num2 = 10.5;//float, double
// let cadena = "Hola mundo";
// let isActive = true;//false

// let array = [1, 2, 3, 4, 5];
// let array2 = ["Hola", "Mundo", "Adios"];
// let array3 = [1, "Hola", true, null, undefined, [1, 2, 3]];

// let persona = {//psuedo objeto
//     nombre: "Oscar",
//     apellido: "William",
//     edad: 30
// }

// //K.I.S.S-- Keep It Simple, Stupid

// console.log(num);
// console.log(num2);
// console.log(cadena);
// console.log(isActive);
// console.log(array);
// console.log(array[0]);

// console.log(array2);
// console.log(array3);
// console.log(array3[5][1]);
// console.log(array3[3]);

// console.log(persona);
// console.log(persona.nombre);

// if (isActive) { }
// else { }

// if (num > 5) { }
// else if (num < 5) { }
// else if (num === 5) { }
// else { }

// switch (num) {
//     case 1:
//         break;
//     case 2:
//         break;
//     default:
//         break;
// }

// if (num >= 5)// <, >, <=, >=, ==, ===, !=, !==
// { }

// if (num > 5 && isActive) //&& and  || or
// //  true && true = true
// { }

// if (num > 5 || isActive && (num < 10 || !isActive)) //&& and  || or
// //  num > 5 || isActive && (true || false) = true
// //  false || true && true = true
// { }

// do {

// } while (num < 5);

// while (num < 5) { }

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

//  array.forEach(
//     (element, index) => {
//     console.log(element);
//      console.log(index);
//  });

// //funciones

// function saludar(nombre, apellido) {
//     console.log("Hola " + nombre + " " + apellido);
//     //return "Hola " + nombre;
// }

// saludar("Oscar", "William");


// let functionSaludar = function (nombre, apellido) {
//     console.log("Hola " + nombre + " " + apellido);
// }

// functionSaludar("Oscar", "Gonzalez");

// let arrowSaludar = (nombre, apellido) => {
//     console.log("Hola " + nombre + " " + apellido);
// }

// arrowSaludar("Oscar", "william");
