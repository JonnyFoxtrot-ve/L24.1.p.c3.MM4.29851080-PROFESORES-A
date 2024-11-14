const arrayProfesores = [
  { categoria: 1, nombre: "Ana", sexo: "F" },
  { categoria: 3, nombre: "Pedro", sexo: "M" },
  { categoria: 3, nombre: "Maria", sexo: "F" },
  { categoria: 1, nombre: "Luis", sexo: "M" },
  { categoria: 4, nombre: "Andrea", sexo: "F" },
  { categoria: 2, nombre: "Luisa", sexo: "F" },
  { categoria: 2, nombre: "Daniel", sexo: "M" },
  { categoria: 5, nombre: "Ricardo", sexo: "F" },
  { categoria: 4, nombre: "David", sexo: "M" },
  { categoria: 1, nombre: "Luna", sexo: "F" },
];

let profesoresCategoria = (arrayProfesores, categoria) => {
  let array = [];
  arrayProfesores.filter((profesor) => {
    if (profesor.categoria === categoria) {
      array.push(profesor);
    }
  });
  return array;
};

let salida = document.getElementById("salida");
let categoria = parseInt(prompt("Ingrese la categoria:"));
let profesorCategoria = profesoresCategoria(arrayProfesores, categoria);
if (profesorCategoria == 0) {
  alert("No existe un profesor con esa categoria");
} else {
  salida.innerHTML += `Profesores de la categoria ${categoria}:<br>`;
  salida.innerHTML += `${JSON.stringify(profesorCategoria)}`;
}
