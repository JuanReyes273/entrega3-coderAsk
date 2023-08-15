const peliculas = [
    {
      id: 1,
      nombre: "El padrino",
      anioPublicacion: 1972,
      descripcion: "Una película de mafiosos.",
      genero: "Drama",
      precio: 10.99,
      stock: 5,
      img: "/assets/Padrino.jpg",
    },
    {
      id: 2,
      nombre: "Avatar",
      anioPublicacion: 2009,
      descripcion: "Una película de alienigenas genero fantasía.",
      genero: "Fantasia",
      precio: 12.50,
      stock: 7,
      img: "../assets/Avatar.jpeg",
    },
    {
      id: 3,
      nombre: "El senior de los anillos",
      anioPublicacion: 2001,
      descripcion: "Una película épica de fantasía.",
      genero: "Fantasia",
      precio: 11.75,
      stock: 8,
      img: "../assets/Anillos.jpg",
    },
    {
      id: 4,
      nombre: "Titanic",
      anioPublicacion: 1997,
      descripcion: "Una película romántica y dramática.",
      genero: "Romance",
      precio: 9.99,
      stock: 6,
      img: "../assets/Titanic.jpg",
    },
    {
      id: 5,
      nombre: "Jurassic Park",
      anioPublicacion: 1993,
      descripcion: "Una película de aventuras con dinosaurios.",
      genero: "Accion",
      precio: 8.50,
      stock: 3,
      img: "../assets/Jurassic.jpg",
    },
    {
      id: 6,
      nombre: "Inception",
      anioPublicacion: 2010,
      descripcion: "Una película de ciencia ficción y acción.",
      genero: "Accion",
      precio: 11.00,
      stock: 4,
      img: "../assets/Inception.jpg",
    },
    {
      id: 7,
      nombre: "Frozen",
      anioPublicacion: 2013,
      descripcion: "Una película de animación y música.",
      genero: "Animacion",
      precio: 10.25,
      stock: 10,
      img: "../assets/Frozen.jpeg",
    },
    {
      id: 8,
      nombre: "Forrest Gump",
      anioPublicacion: 1994,
      descripcion: "Una película de drama y comedia.",
      genero: "Drama",
      precio: 9.75,
      stock: 9,
      img: "../assets/Forest.jpg",
    },
];

function getPeliculas() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(peliculas);
      }, 2000);
    });
}
  
export function getPeliculaData(idURL) {
    return new Promise((resolve, reject) => {
        const peliculaRequested = peliculas.find((pelicula) => pelicula.id === Number(idURL));

        setTimeout(() => {
            resolve(peliculaRequested);
        }, 2000);
    });
}
  
export function getGeneroPelicula(generoURL) {
    return new Promise((resolve, reject) => {
        const generoRequested = peliculas.filter((pelicula) => {
            return pelicula.genero.toLowerCase() === generoURL.toLowerCase();
        });

        setTimeout(() => {
            resolve(generoRequested);
        }, 2000);
    });
}

export default getPeliculas;