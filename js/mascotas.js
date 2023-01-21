if (!localStorage.getItem('userlog')){
    window.location.href = '../index.html'
}
const usuarioLog = JSON.parse(localStorage.getItem('userlog'));

const saludar = () =>{
    const saludo = document.getElementById('saludo');
    saludo.innerHTML = (`Bienvenidx ${usuarioLog.name} ${usuarioLog.apellido}`).toUpperCase();
};
saludar();

const galeriaPerros =  () =>{
    const mascotas = [
        {
            id:1,
            foto: "../img/perro1.jpeg",
            nombre: "Paquito",
            edad: "2 años"
        }, 
        {
            id:2,
            nombre: "Fidel",
            foto: "../img/gato1.jpg",
            edad: "2 años"
        }, 
        {
            id:3,
            foto: "../img/perro2.jpg",
            nombre: "Fatiga",
            edad: "1 año"
        }, 
        {
            id:4,
            foto: "../img/gato2.jpg",
            nombre: "Lolo y Moro",
            edad: "3 años"
        }, 
        {
            id:5,
            foto: "../img/perro3.jpg",
            nombre: "Fermin",
            edad: "1 año"
        }, 
        {
            id:6,
            foto: "../img/gato3.jpg",
            nombre: "Ramon",
            edad: "5 años"
        }, 
        {
            id:7,
            foto: "../img/perro1.jpeg",
            nombre: "chicho",
            edad: "1 año"
        }, 
        {
            id:8,
            foto: "../img/gato1.jpg",
            nombre: "Milo",
            edad: "1 año"
        } 
    ]
    
    let contador = 0
    mascotas.map((mascota) =>{
        contador++
        let contenedor = document.createElement('article');
        const card = 
        `<div class="card d-flex justify-content-center align-items-center">
            <img src="${mascota.foto}" alt="" class="img-fluid p-3">
            <div class="card-body d-flex flex-column justify-content-center align-items-center">
                <h5 class="card-title text-center">${mascota.nombre}</h5>
                <p class="text-center"> ${mascota.edad}</p> 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ullam quisquam veniam iusto qui, praesentium rerum quas id aperiam autem. </p>
            </div>
        </div>`;
        contenedor.innerHTML = card;
        document.querySelector('#conte').appendChild(contenedor);
    })
}  
galeriaPerros()
const cerrarSesion = () => {
    localStorage.removeItem('userlog');
    window.location = '../html/iniciarSesion.html'
};

