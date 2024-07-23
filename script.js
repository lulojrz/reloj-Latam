const paises = [
    {
        pais: "Argentina",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.png",
        diferencia: 0,
        ciudad: "Buenos Aires",
    },
    {
        pais: "Uruguay",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/1280px-Flag_of_Uruguay.svg.png",
        diferencia: 0,
        ciudad: "Montevideo",
    },
    {
        pais: "Chile",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXF9w1KWeBq9d3R2IHFmXKhJJidR_Ech5oQ&s", 
        diferencia: 1,
        ciudad: "Santiago",
    },
    {
        pais: "Paraguay",
        img: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg", 
        diferencia: 1,
        ciudad: "Asuncion",
    },
    {
        pais: "Bolivia",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-H5r3xJyGV54y38s4q1ncKHO9DsCyQ1IRNg&s", 
        diferencia: 1,
        ciudad: "La Paz",
    },
    {
        pais: "Peru",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/800px-Flag_of_Peru.svg.png", 
        diferencia: 2,
        ciudad: "Lima",
    },
    {
        pais: "Ecuador",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/800px-Flag_of_Ecuador.svg.png", 
        diferencia: 2,
        ciudad: "Quito",
    },
    {
        pais: "Colombia",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkEykUxRE925pjOTXd6s7Dy3e0QS9lbnFhw&s", 
        diferencia: 2,
        ciudad: "Bogota",
    },
    {
        pais: "Venezuela",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/1200px-Flag_of_Venezuela.svg.png", 
        diferencia: 1,
        ciudad: "Caracas",
    },
    {
        pais: "Brasil",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png", 
        diferencia: 0,
        ciudad: "Brasilia",
    }
];

const container = document.getElementById("container");
let contenidoHTML = "";

function actualizarHora(array) {
    function hora(diferencia) {
        let fecha = new Date();
        let horas = fecha.getHours(); 
        let minutos = fecha.getMinutes();
        let segundos = fecha.getSeconds();

        horas = horas - diferencia; 

        horas = horas >= 24 ? horas - 24 : horas;
        horas = horas < 0 ? horas + 24 : horas;

        horas = (horas < 10) ? "0" + horas : horas;
        minutos = (minutos < 10) ? "0" + minutos : minutos;
        segundos= (segundos < 10) ? "0" + segundos : segundos;

        let tiempo = horas + ":" + minutos + ":" + segundos;
        return tiempo;
    }

    array.forEach((x) => {
        const tiempo = hora(x.diferencia);

        contenidoHTML += `
            <div class="reloj">
                <div class="bandera">
                    <img src="${x.img}" alt="">
                </div>
                <div class="hora">
                    <h1>${tiempo}</h1>
                    <span>${x.ciudad}</span>
                </div>
            </div>
        `;
    });

    container.innerHTML = contenidoHTML;
}

actualizarHora(paises);

setInterval(() => {
    contenidoHTML = ""; 
    actualizarHora(paises); 
}, 1000);
