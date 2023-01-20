// !--------------- SELECTORES ----------------- 

// Variables buscador de viajes 
let continent = document.getElementById("continent").value;
let typeTravel = document.getElementById("type-travel").value;
let presupuesto = document.getElementById("presupuesto").value;
let habitat = document.getElementById("habitat").value;

// Empezar de nuevo 
let refresh = document.querySelectorAll('.refresh');

// Main con ambos buscadores
let mainGeneral = document.querySelector(".div2-main");

// Botones de buscar destino y actividad
let buscarDestino = document.getElementById("buscarDestino");
let buscarActividad = document.getElementById("buscarActividad");

// Nav
let buscarViajeNav = document.getElementById("buscarViajeNav");
let buscarActividadNav = document.getElementById("buscarActividadNav");

// Buscar viaje y actividad h2
let buscarViaje_h2 = document.getElementById("buscarViajes_h2");
let buscarActividad_h2 = document.getElementById("buscarActividad_h2");

// Main viajes y main actividades
let buscarViajeMain = document.querySelector(".subdiv-main");
let buscarActividadMain = document.querySelector(".mainActividad");

// Seccion con el carousel clonado
let carouselClon = document.getElementById("carousel-clone");

// Template
let template = document.getElementById("template")

// Carousel
let carousel_div = template.content.getElementById("carousel");

// Div con la imagen del lugar
let lugar_div = template.content.getElementById("lugar");

// Titulo y parrafo de imagenes
let imagenLugar = template.content.getElementById("imagenLugar");

let tituloImagen = template.content.getElementById("tituloimg_h3");
let parrafoImagen = template.content.getElementById("parrafoimg_p");


// !----------- LUGARES -----------------

// Class Ciudad
class Ciudad {
    constructor(nombre, pais, continente, tipo, presupuesto, habitat){
        this.nombre = nombre;
        this.pais = pais;
        this.continente = continente;
        this.tipo = tipo;
        this.presupuesto = presupuesto;
        this.habitat = habitat;
    }
}

// Lugares
let ciudades =[];

// ? ----- America del Sur -----
// Argentina
ciudades.push(new Ciudad("Buenos Aires", "Argentina", 1, 2, 1, 1));
ciudades.push(new Ciudad("Mendoza", "Argentina", 1, 1, 1, 2));
ciudades.push(new Ciudad("Neuquen", "Argentina", 1, 2, 1, 3)); // DESIERTO PATAGONICO
ciudades.push(new Ciudad("Santa Cruz", "Argentina", 1, 1, 1, 4));
ciudades.push(new Ciudad("Mar del Plata", "Argentina", 1, 1, 1, 5));
ciudades.push(new Ciudad("El Bolson", "Argentina", 1, 1, 1, 6)); // El bolson
ciudades.push(new Ciudad("Villa General Belgrano", "Argentina", 1, 2, 1, 2));
ciudades.push(new Ciudad("Cataratas del Iguazú", "Argentina", 1, 1, 1, 6));
ciudades.push(new Ciudad("Dique San Roque", "Argentina", 1, 1, 1, 6));
ciudades.push(new Ciudad("El Aconcagua", "Argentina", 1, 1, 1, 2));
ciudades.push(new Ciudad("Gualeguaychu", "Argentina", 1, 1, 1, 1));
ciudades.push(new Ciudad("Quebrada de Humahuaca", "Argentina", 1, 1, 1, 2));
ciudades.push(new Ciudad("Península Valdés", "Argentina", 1, 1, 1, 6));
ciudades.push(new Ciudad("Rosario", "Argentina", 1, 1, 1, 6));
ciudades.push(new Ciudad("Ruinas Quilmes", "Argentina", 1, 2, 1, 3));
ciudades.push(new Ciudad("Ushuaia", "Argentina", 1, 1, 1, 4));
ciudades.push(new Ciudad("La Boca", "Argentina", 1, 2, 1, 1));
ciudades.push(new Ciudad("La Plata", "Argentina", 1, 2, 1, 1));
ciudades.push(new Ciudad("San Carlos de Bariloche", "Argentina", 1, 2, 1, 1));
ciudades.push(new Ciudad("Parque Nacional Los Alerces", "Argentina", 1, 1, 1, 6));

// Brasil
ciudades.push(new Ciudad("Salvador de Bahía", "Brasil", 1, 1, 2, 5));
ciudades.push(new Ciudad("Río de Janeiro", "Brasil", 1, 1, 2, 5));
ciudades.push(new Ciudad("Buzios", "Brasil", 1, 1, 2, 5));
ciudades.push(new Ciudad("OuroPreto", "Brasil", 1, 2, 2, 1))
ciudades.push(new Ciudad("Brasilia", "Brasil", 1, 2, 2, 1))
ciudades.push(new Ciudad("Manaos", "Brasil", 1, 2, 2, 6))
ciudades.push(new Ciudad("Florianópolis", "Brasil", 1, 1, 2, 5))

// Peru
ciudades.push(new Ciudad("El Cañón del Colca", "Peru", 1, 2, 2, 2))
ciudades.push(new Ciudad("Machu Picchu", "Peru", 1, 2, 2, 2))
ciudades.push(new Ciudad("Lima", "Peru", 1, 2, 2, 1))
ciudades.push(new Ciudad("Iquitos - El Río Amazonas", "Peru", 1, 2, 2, 6))

// Chile 
ciudades.push(new Ciudad("Santiago de Chile", "Chile", 1, 2, 2, 1))
ciudades.push(new Ciudad("La Isla de Pascua", "Chile", 1, 2, 2, 1)) // no es ciudad
ciudades.push(new Ciudad("El Desierto de Atacama", "Chile", 1, 2, 2, 3))
ciudades.push(new Ciudad("Parque Nacional Torres del Paine", "Chile", 1, 2, 2, 2))
ciudades.push(new Ciudad("Valparaíso y Viña del Mar", "Chile", 1, 2, 2, 1))

// Colombia
ciudades.push(new Ciudad("Cartagena", "Colombia", 1, 1, 2, 1))
ciudades.push(new Ciudad("Bogotá", "Colombia", 1, 2, 2, 1))
ciudades.push(new Ciudad("Santa Marta", "Colombia", 1, 2, 2, 5))
ciudades.push(new Ciudad("Desierto de la Tatacoa", "Colombia", 1, 2, 2, 3))
ciudades.push(new Ciudad("Parque Nacional Natural Utría", "Colombia", 1, 2, 2, 1))

// Ecuador 
ciudades.push(new Ciudad("Quito", "Ecuador", 1, 2, 2, 1))
ciudades.push(new Ciudad("Montañita", "Ecuador", 1, 1, 2, 5))
ciudades.push(new Ciudad("Cuenca", "Ecuador", 1, 2, 2, 1))
ciudades.push(new Ciudad("Amazonas", "Ecuador", 1, 2, 2, 2))// bosque

// ? ----- America Central -----
// Costa Rica
ciudades.push(new Ciudad("Parque Nacional Volcán Arenal", "Costa Rica", 2, 2, 0, 2));
ciudades.push(new Ciudad("Parque Nacional Corcovado", "Costa Rica", 2, 1, 0, 5));
ciudades.push(new Ciudad("Reserva Biologica Bosque Nuboso", "Costa Rica", 2, 1, 0, 6)); // bosque
 ciudades.push(new Ciudad("Tamarindo", "Costa Rica", 2, 1, 0, 5)); 

//  Panama 
ciudades.push(new Ciudad("Ciudad de Panamá", "Panamá", 2, 2, 0, 1)); 
ciudades.push(new Ciudad("Bocas del Toro", "Panamá", 2, 1, 0, 5)); 
ciudades.push(new Ciudad("Archipiélago de San Blas", "Panamá", 2, 1, 0, 5)); 

// República Dominicana 
ciudades.push(new Ciudad("Punta Cana", "República Dominicana", 2, 1, 0, 5)); 
ciudades.push(new Ciudad("Santo Domingo", "República Dominicana", 2, 2, 0, 1)); 
ciudades.push(new Ciudad("Bahía de las Águilas", "República Dominicana", 2, 1, 0, 5)); 
ciudades.push(new Ciudad("Dunas de Baní", "República Dominicana", 2, 2, 0, 3)); 
ciudades.push(new Ciudad("Parque Los Haitises", "República Dominicana", 2, 2, 0, 6)); // bosque


// ? ----- America del Norte -----
// Mexico
ciudades.push(new Ciudad("Ciudad de México", "Mexico", 3, 2, 0, 1));
ciudades.push(new Ciudad("Los Cabos", "Mexico", 3, 1, 0, 5));
ciudades.push(new Ciudad("Cancún", "Mexico", 3, 1, 0, 5));
ciudades.push(new Ciudad("Acapulco", "Mexico", 3, 1, 0, 5));
ciudades.push(new Ciudad("Puerto Vallarta", "Mexico", 3, 1, 0, 1));
ciudades.push(new Ciudad("Rivera Maya", "Mexico", 3, 2, 0, 1));
ciudades.push(new Ciudad("Oaxaca de Juárez", "Mexico", 3, 2, 0, 1));
ciudades.push(new Ciudad("Mérida", "Mexico", 3, 2, 0, 1));
ciudades.push(new Ciudad("Guadalajara", "Mexico", 3, 2, 0, 1));
ciudades.push(new Ciudad("Puebla", "Mexico", 3, 2, 0, 1));

// Estados Unidos
ciudades.push(new Ciudad("Nueva York", "Estados Unidos", 3, 2, 0, 1));
ciudades.push(new Ciudad("Chicago", "Estados Unidos", 3, 2, 0, 1));
ciudades.push(new Ciudad("Atlanta", "Estados Unidos", 3, 2, 0, 1));
ciudades.push(new Ciudad("Orlando", "Estados Unidos", 3, 1, 0, 1));
ciudades.push(new Ciudad("Los Ángeles", "Estados Unidos", 3, 1, 0, 1));
ciudades.push(new Ciudad("Las Vegas", "Estados Unidos", 3, 1, 0, 1));
ciudades.push(new Ciudad("San Francisco", "Estados Unidos", 3, 2, 0, 1));
ciudades.push(new Ciudad("Seattle", "Estados Unidos", 3, 2, 0, 1));

// Canada 
ciudades.push(new Ciudad("Ottawa", "Canada", 3, 2, 0, 1));
ciudades.push(new Ciudad("Québec", "Canada", 3, 2, 0, 1));
ciudades.push(new Ciudad("Edmonton", "Canada", 3, 2, 0, 1));
ciudades.push(new Ciudad("Hamilton", "Canada", 3, 2, 0, 1));
ciudades.push(new Ciudad("Vancouver", "Canada", 3, 2, 0, 1));
ciudades.push(new Ciudad("Toronto", "Canada", 3, 2, 0, 1));
ciudades.push(new Ciudad("Saskatoon", "Canada", 3, 2, 0, 1));
ciudades.push(new Ciudad("Kelowna", "Canada", 3, 2, 0, 1));

// ? ----- Europa -----
// España 
ciudades.push(new Ciudad("Madrid", "España", 4, 2, 0, 1));
ciudades.push(new Ciudad("Barcelona", "España", 4, 2, 0, 1));
ciudades.push(new Ciudad("Sevilla", "España", 4, 2, 0, 1));
ciudades.push(new Ciudad("Granada", "España", 4, 2, 0, 1));

// Francia 
ciudades.push(new Ciudad("París", "Francia", 4, 2, 0, 1));
ciudades.push(new Ciudad("Monte Saint-Michel", "Francia", 4, 2, 0, 1));
ciudades.push(new Ciudad("El Palacio de Versalles", "Francia", 4, 2, 0, 1));
ciudades.push(new Ciudad("Alsacia", "Francia", 4, 2, 0, 1));

// Alemania 
ciudades.push(new Ciudad("Quedlinburg", "Alemania", 4, 2, 0, 1));
ciudades.push(new Ciudad("Múnich", "Alemania", 4, 2, 0, 1));
ciudades.push(new Ciudad("Colonia", "Alemania", 4, 2, 0, 1));
ciudades.push(new Ciudad("Berlín", "Alemania", 4, 2, 0, 1));
ciudades.push(new Ciudad("Hamburgo", "Alemania", 4, 2, 0, 1));

// Reino Unido 
ciudades.push(new Ciudad("Londres", "Reino Unido", 4, 2, 0, 1));
ciudades.push(new Ciudad("Liverpool", "Reino Unido", 4, 2, 0, 1));
ciudades.push(new Ciudad("Bath", "Reino Unido", 4, 2, 0, 1));
ciudades.push(new Ciudad("Bristol", "Reino Unido", 4, 2, 0, 1));
ciudades.push(new Ciudad("Chester", "Reino Unido", 4, 2, 0, 1));

// Italia 
ciudades.push(new Ciudad("Roma", "Italia", 4, 2, 0, 1));
ciudades.push(new Ciudad("Venecia", "Italia", 4, 2, 0, 6));
ciudades.push(new Ciudad("Milán", "Italia", 4, 2, 0, 1));
ciudades.push(new Ciudad("Florencia", "Italia", 4, 2, 0, 1));
ciudades.push(new Ciudad("Nápoles", "Italia", 4, 2, 0, 1));

// Suiza 
ciudades.push(new Ciudad("Berna", "Suiza", 4, 2, 0, 1));
ciudades.push(new Ciudad("Lucerna", "Suiza", 4, 2, 0, 1));
ciudades.push(new Ciudad("Friburgo", "Suiza", 4, 2, 0, 2));
ciudades.push(new Ciudad("Zúrich", "Suiza", 4, 2, 0, 1));
ciudades.push(new Ciudad("Basilea", "Suiza", 4, 2, 0, 1));
ciudades.push(new Ciudad("Zermatt", "Suiza", 4, 2, 0, 2));
ciudades.push(new Ciudad("Lugano", "Suiza", 4, 2, 0, 2));

// Austria 
ciudades.push(new Ciudad("Viena", "Austria", 4, 2, 0, 1));
ciudades.push(new Ciudad("Salzburgo", "Austria", 4, 2, 0, 1));
ciudades.push(new Ciudad("Graz", "Austria", 4, 2, 0, 1));
ciudades.push(new Ciudad("Innsbruck", "Austria", 4, 2, 0, 2));

// Grecia 
ciudades.push(new Ciudad("Atenas", "Grecia", 4, 2, 0, 1));
ciudades.push(new Ciudad("El Pireo", "Grecia", 4, 2, 0, 2));
ciudades.push(new Ciudad("Salónica", "Grecia", 4, 2, 0, 6));

// Portugal 
ciudades.push(new Ciudad("Lisboa", "Portugal", 4, 2, 0, 1));
ciudades.push(new Ciudad("Oporto", "Portugal", 4, 2, 0, 6));
ciudades.push(new Ciudad("Sintra", "Portugal", 4, 2, 0, 1));
ciudades.push(new Ciudad("Guimaraes", "Portugal", 4, 2, 0, 2));
ciudades.push(new Ciudad("Braga", "Portugal", 4, 2, 0, 2));
ciudades.push(new Ciudad("Cascais", "Portugal", 4, 2, 0, 6));
ciudades.push(new Ciudad("Tavira", "Portugal", 4, 2, 0, 6));
ciudades.push(new Ciudad("Lagos", "Portugal", 4, 2, 0, 6));


// ? ----- Asia -----
// Japón 
ciudades.push(new Ciudad("Tokio", "Japón", 6, 2, 0, 1));
ciudades.push(new Ciudad("Kioto", "Japón", 6, 2, 0, 1));
ciudades.push(new Ciudad("Jigokudani", "Japón", 6, 2, 0, 3));
ciudades.push(new Ciudad("Sapporo", "Japón", 6, 2, 0, 1));
ciudades.push(new Ciudad("Nagano", "Japón", 6, 2, 0, 1));// bosque
ciudades.push(new Ciudad("Osaka", "Japón", 6, 2, 0, 1));

// China 
ciudades.push(new Ciudad("Beijing", "China", 6, 2, 0, 1));
ciudades.push(new Ciudad("Xi'an", "China", 6, 2, 0, 1));
ciudades.push(new Ciudad("Shanghai", "China", 6, 2, 0, 1));
ciudades.push(new Ciudad("Guilin", "China", 6, 2, 0, 2));
ciudades.push(new Ciudad("Chengdu", "China", 6, 2, 0, 1));
ciudades.push(new Ciudad("Zhangjiajie", "China", 6, 2, 0, 2));
ciudades.push(new Ciudad("Huangshan", "China", 6, 2, 0, 2));
ciudades.push(new Ciudad("Yunnan", "China", 6, 2, 0, 6));
ciudades.push(new Ciudad("Tíbet", "China", 6, 2, 0, 2));
ciudades.push(new Ciudad("Ruta de Seda", "China", 6, 2, 0, 3));

// Turquía 
ciudades.push(new Ciudad("Ankara", "Turquía", 6, 2, 0, 1));
ciudades.push(new Ciudad("Estambul", "Turquía", 6, 2, 0, 1));
ciudades.push(new Ciudad("Antalya", "Turquía", 6, 1, 0, 5));
ciudades.push(new Ciudad("Izmir", "Turquía", 6, 2, 0, 1));
ciudades.push(new Ciudad("Göreme", "Turquía", 6, 2, 0, 2));

// Tailandia
ciudades.push(new Ciudad("Bangkok", "Tailandia", 6, 2, 0, 1));
ciudades.push(new Ciudad("Chiang Mai", "Tailandia", 6, 2, 0, 1));
ciudades.push(new Ciudad("Chiang Rai", "Tailandia", 6, 2, 0, 1));
ciudades.push(new Ciudad("Phuket", "Tailandia", 6, 2, 0, 6));
ciudades.push(new Ciudad("Krabi", "Tailandia", 6, 2, 0, 6));
ciudades.push(new Ciudad("Ayutthaya", "Tailandia", 6, 2, 0, 1));
ciudades.push(new Ciudad("Kanchanaburi", "Tailandia", 6, 2, 0, 1));
ciudades.push(new Ciudad("Pattaya", "Tailandia", 6, 2, 0, 1));

// Malasia
ciudades.push(new Ciudad("Johor Bahru", "Malasia", 6, 2, 0, 1));
ciudades.push(new Ciudad("Sandakan", "Malasia", 6, 2, 0, 6));
ciudades.push(new Ciudad("Semporna", "Malasia", 6, 2, 0, 6));
ciudades.push(new Ciudad("Alor Setar", "Malasia", 6, 2, 0, 1));
ciudades.push(new Ciudad("Putrajaya", "Malasia", 6, 2, 0, 1));

// Rusia 
ciudades.push(new Ciudad("San Petersburgo", "Rusia", 6, 2, 0, 1));
ciudades.push(new Ciudad("Moscú", "Rusia", 6, 2, 0, 1));
ciudades.push(new Ciudad("Samara", "Rusia", 6, 2, 0, 4));
ciudades.push(new Ciudad("Kazán", "Rusia", 6, 2, 0, 1));

// ? ----- Oceania -----
// Australia 
ciudades.push(new Ciudad("Sídney", "Australia", 7, 2, 0, 1));
ciudades.push(new Ciudad("Melbourne", "Australia", 7, 2, 0, 1));
ciudades.push(new Ciudad("Adelaida", "Australia", 7, 2, 0, 1));
ciudades.push(new Ciudad("Cairns", "Australia", 7, 2, 0, 1));

// !----------- BUSCADOR DE VIAJES ----------------

var getDataTravel = function (event) {
    event.preventDefault();

    var continent = document.getElementById("continent").value;
    var typeTravel = document.getElementById("type-travel").value;
    var presupuesto = document.getElementById("presupuesto").value;
    var habitat = document.getElementById("habitat").value;

    // Variables Contradictorias

    if (presupuesto == 1 && (continent > 1 && continent < 8)){
        alert("Sus elecciones se contradicen");
        return;
    }
    if (presupuesto == 2 && (continent > 1 && continent < 8)){
        alert("Sus elecciones se contradicen");
        return;
    }


// FILTRO + MULTIPLICADOR DE DIV CON IMAGEN POR CADA LUGAR

    for (let ciudad of ciudades) {
        if ((ciudad.continente == continent || continent == 0) && (ciudad.tipo ==  typeTravel || typeTravel == 0) && (ciudad.presupuesto == presupuesto || presupuesto == 0) && (ciudad.habitat == habitat || habitat == 0)) {

            let divClonado = lugar_div.cloneNode(lugar_div, true)

            // Inserta titulo y parrafo
            divClonado.children[1].children[0].innerText = ciudad.pais
            divClonado.children[1].children[1].innerText = ciudad.nombre

            // Inserta source a las imagenes
            divClonado.children[0].children[0].src = "./imagenes/lugares/" + ciudad.nombre + ".jpg"

            carousel_div.appendChild(divClonado)
        }
    }
      
    // COPIA TEMPLATE EN SECTION

    carouselClon.appendChild(template.content)

    // BORRAR PRIMER DIV

    lugar_div.remove()

    // ! -------------- CAROUSEL -----------------

    const fila = document.querySelector('.contenedor-carousel');
    const lugares = document.querySelectorAll('.lugar');

    const flechaIzquierda = document.getElementById('flecha-izquierda');
    const flechaDerecha = document.getElementById('flecha-derecha');

    // ? ----- ----- Event Listener para la flecha derecha. ----- -----
    flechaDerecha.addEventListener("click", () => {
        fila.scrollLeft += fila.offsetWidth;

        const indicadorActivo = document.querySelector('.indicadores .activo');
        if(indicadorActivo.nextSibling){
            indicadorActivo.nextSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    });

    // ? ----- ----- Event Listener para la flecha izquierda. ----- -----
    flechaIzquierda.addEventListener('click', () => {
        fila.scrollLeft -= fila.offsetWidth;

        const indicadorActivo = document.querySelector('.indicadores .activo');
        if(indicadorActivo.previousSibling){
            indicadorActivo.previousSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    });

    // ? ----- ----- Paginacion ----- -----
    const numeroPaginas = Math.ceil(lugares.length / 5);
    for(let i = 0; i < numeroPaginas; i++){
        const indicador = document.createElement('button');

        if(i === 0){
            indicador.classList.add('activo');
        }

        document.querySelector('.indicadores').appendChild(indicador);
        indicador.addEventListener('click', (e) => {
            fila.scrollLeft = i * fila.offsetWidth;

            document.querySelector('.indicadores .activo').classList.remove('activo');
            e.target.classList.add('activo');
        });
}

// ? ----- ----- Hover ----- -----
lugares.forEach((lugar) => {
	lugar.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			lugares.forEach(lugar => lugar.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	lugares.forEach(lugar => lugar.classList.remove('hover'));
});
}

buscarDestino.addEventListener("click", getDataTravel);

// !----------- BUSCADOR DE ACTIVIDADES -------------

buscarActividad.addEventListener("click", getDataActivity);

function getDataActivity () {

    let where = document.getElementById("where").value.toUpperCase();
    let actividad = document.getElementById("actividad").value;

    switch (where + actividad) {
        case "BUENOS AIRES0":
            window.open('https://www.tripadvisor.com.ar/Attractions-g312741-Activities-Buenos_Aires_Capital_Federal_District.html');
            break;
        case "BUENOS AIRES1":
            window.open('https://www.buenosairesfreewalks.com/spanish/batips/los-6-mejores-museos-de-buenos-aires/')
            break;
        case "BUENOS AIRES2":
            window.open('https://www.argiesment.com/las-10-discos-boliches-mas-elegidos-capital-federal.html')
            break;
        case "BUENOS AIRES3":
            window.open('https://www.argiesment.com/las-10-discos-boliches-mas-elegidos-capital-federal.html')
            break;
        case "BUENOS AIRES4":
            window.open('https://www.tripadvisor.com.ar/Restaurants-g312741-Buenos_Aires_Capital_Federal_District.html')
            break;
        case "BUENOS AIRES5":
            window.open('https://www.viator.com/es-AR/Buenos-Aires/d901-ttd')
            break;
    }

    console.log(where + actividad)
}

// !----------- Resetear Pagina Con Empezar de Nuevo-----------------

refresh[0].addEventListener("click", () => {
    location.reload();
})
refresh[1].addEventListener("click", () => {
    location.reload();
})

// !----------- CAMBIOS HTML -----------------
// Agranda buscador de viajes

buscarViajeNav.addEventListener('click', deleteActividades);
buscarViaje_h2.addEventListener('click', deleteActividades);

function deleteActividades (event) {
    event.preventDefault();

    if (buscarActividadMain.style.width == "90%") {
        mainGeneral.append(buscarViajeMain);
        buscarActividadMain.remove();
        buscarViajeMain.style.width = '90%';
        buscarViajeMain.style.margin = '10px';
        return;
    }
    else {
        buscarActividadMain.remove();
        buscarViajeMain.style.width = '90%';
        return;
    }
}

// Agranda buscador de Actividades

buscarActividadNav.addEventListener('click', deleteViajes);
buscarActividad_h2.addEventListener('click', deleteViajes);

function deleteViajes (event) {
    event.preventDefault();

    if (buscarViajeMain.style.width == '90%') {
        mainGeneral.appendChild(buscarActividadMain);
        buscarViajeMain.remove();
        buscarActividadMain.style.width = '90%';
        buscarActividadMain.style.margin = '10px';
        return;
    }
    else {
        buscarViajeMain.remove();
        buscarActividadMain.style.width = '90%';
        return;
    }

    // buscarViajeMain.remove();
    // buscarActividadMain.style.width = "90%";
}