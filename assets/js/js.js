        const productos = {
            producto1: {
                titulo: "Motores",
                descripcion: "Ofrecemos todo tipo de motores que se adaptan para el óptimo funcionamiento de cada Cortina Metálica. Motores Trasversales, tubulares, Vivaldi, etc.",
                imagenes: [
                    "assets/multimedia/motor-1.webp",
                    "assets/multimedia/motor-2.jpg",
                    "assets/multimedia/motor-3.webp",
                    "assets/multimedia/motor-4.jpg",
                    "assets/multimedia/motor-5.webp",
                    "assets/multimedia/motor-6.jpg",
                    "assets/multimedia/motor-7.webp"
                ]
            },
            producto2: {
                titulo: "Repuestos",
                descripcion: "En Cortinas Metálicas Ya ofrecemos una gran variedad de materiales y repuestos para la instalación y reparación de Cortinas Metálicas.",
                imagenes: [
                    "assets/multimedia/repuesto-1.jpg",
                    "assets/multimedia/repuesto-2.jpg",
                    "assets/multimedia/repuesto-3.jpeg",
                    "assets/multimedia/repuesto-4.jpeg",
                    "assets/multimedia/repuesto-5.webp",
                    "assets/multimedia/repuesto-6.jpg",
                    "assets/multimedia/repuesto-7.jpg",
                    "assets/multimedia/repuesto-8.webp",
                    "assets/multimedia/repuesto-9.webp"
                ]
            },
            producto3: {
                titulo: "Portones automatizados",
                descripcion: "En Cortinas Metálicas ya tenemos materiales de alta calidad para la instalación y mantenimiento de tu portón automatizado.",
                imagenes: [
                    "assets/multimedia/porton-1.jpg",
                    "assets/multimedia/porton-2.jpg",
                    "assets/multimedia/porton-3.jpg",
                    "assets/multimedia/porton-4.jpg",
                    "assets/multimedia/porton-5.jpg"
                ]
            }
        };


        const videos = [
          {
            url: "https://www.youtube.com/embed/GSmgFN0Wgv0"
          },
          {
            url: "https://www.youtube.com/embed/_t8gywa7fsQ"
          },
          {
            url: "https://www.youtube.com/embed/HwExpvchyqY"
          },
          {
            url: "https://www.youtube.com/embed/IXiWdpv0tns"
          },
          {
            url: "https://www.youtube.com/embed/weUgYwFFvUo"
          },
          {
            url: "https://www.youtube.com/embed/qXPcsk4glE0"
          },
          {
            url: "https://www.youtube.com/embed/74THwcPOdK4"
          },
          {
            url: "https://www.youtube.com/embed/AWWpk4Kp0z4"
          },
          {
            url: "https://www.youtube.com/embed/wW5FJcLG944"
          },
          {
            url: "https://www.youtube.com/embed/Pv8WjJXnQMY"
          },
          {
            url: "https://www.youtube.com/embed/U8AQ5shL5c8"
          },
          {
            url: "https://www.youtube.com/embed/lsODo-LigKY"
          },
          {
            url: "https://www.youtube.com/embed/RsqYNoQB9yI"
          },
          {
            url: "https://www.youtube.com/embed/FAp-Lkiv2Fg"
          },
          {
            url: "https://www.youtube.com/embed/4iMqqpwVHJQ"
          },
          {
            url: "https://www.youtube.com/embed/y4FxtryYE1E"
          },
          {
            url: "https://www.youtube.com/embed/Vt0AKNguaMU"
          }
        ];
        
          
        const contenedorProductos = document.getElementById("productos-container");

        for (let key in productos) {
            // Crea contenedor para el producto
            const productoContainer = document.createElement("div");
            productoContainer.classList.add("producto");
        
            // Crea contenedor de imágenes chiquitas
            const contenedorImagenes = document.createElement("div");
            contenedorImagenes.classList.add("contenedor-imagenes");
        
            // Crea contenedor para la imagen grande
            const contenedorImagen = document.createElement("div");
            contenedorImagen.classList.add("contenedor-imagen");
        
            // Crea imagen grande inicial
            const imgGrande = document.createElement("img");
            imgGrande.setAttribute("src", productos[key].imagenes[0]);
            imgGrande.setAttribute("alt", productos[key].titulo);
            /*imgGrande.style.width = "24.2em"; // Tamaño fijo 
            imgGrande.style.height = "20em";*/
            contenedorImagen.appendChild(imgGrande);
            
        
            // Detecta si es mobile o desktop
            const esMobile = window.innerWidth < 768;
        
            // variables para manejar el espacio de las miniaturas
            const cantidadImagenes = productos[key].imagenes.length;
            const padding = 10;
            const miniaturaSize = 70; // Tamaño fijo para las miniaturas (en px)
            const espacioDisponible = 300 - padding * (cantidadImagenes - 1); // Espacio para miniaturas
        
            //si el espacio disponible no es suficiente, agrega un botón de "+X"
            const maxVisibleImages = Math.floor(espacioDisponible / miniaturaSize);
            const excedente = cantidadImagenes - maxVisibleImages;
        
            //crea las miniaturas
            const imagenesVisibles = productos[key].imagenes.slice(0, maxVisibleImages);
            imagenesVisibles.forEach((imgSrc, index) => {
                const imgPequena = document.createElement("img");
                imgPequena.setAttribute("src", imgSrc);
                imgPequena.setAttribute("alt", `${productos[key].titulo} - Imagen ${index + 1}`);
                imgPequena.style.cursor = "pointer";
                imgPequena.style.width = `${miniaturaSize}px`;
                imgPequena.style.height = `${miniaturaSize}px`;
        
                //Cambia imagen grande al hacer click
                imgPequena.addEventListener("click", () => {
                    imgGrande.src = imgSrc;
                });
        
                contenedorImagenes.appendChild(imgPequena);
            });
        
            // Si hay más imágenes de las que se pueden mostrar, muestra un botón "+X"
            if (excedente > 0) {
                const botonMas = document.createElement("button");
                botonMas.textContent = `+${excedente}`;
                botonMas.classList.add("ver-mas");
                botonMas.addEventListener("click", () => {
                    mostrarImagenesPantallaGrande(productos[key].imagenes.slice(maxVisibleImages));
                });
                contenedorImagenes.appendChild(botonMas);
            }
        
            // Crear contenedor de título y descripción
            const productoInfo = document.createElement("div");
            productoInfo.classList.add("producto-info");
        
            const titulo = document.createElement("h3");
            titulo.textContent = productos[key].titulo;
        
            const descripcion = document.createElement("p");
            descripcion.textContent = productos[key].descripcion;
        
            productoInfo.appendChild(titulo);
            productoInfo.appendChild(descripcion);
        
            // anade todo al contenedor del producto
            productoContainer.appendChild(contenedorImagen);
            productoContainer.appendChild(contenedorImagenes);
            productoContainer.appendChild(productoInfo);
        
            // anade producto al contenedor general
            contenedorProductos.appendChild(productoContainer);
        }
        
        // Función para mostrar las imágenes en pantalla grande con navegación
        function mostrarImagenesPantallaGrande(imagenes) {
            const ventanaEmergente = document.createElement("div");
            ventanaEmergente.classList.add("ventana-emergente");
        
            // Crea contenedor para la imagen en pantalla grande
            const contenedorImagenGrande = document.createElement("div");
            contenedorImagenGrande.classList.add("contenedor-imagen-grande");
        
            // Imagen inicial grande
            const imgGrande = document.createElement("img");
            imgGrande.setAttribute("src", imagenes[0]);
            imgGrande.setAttribute("alt", "Imagen grande");
            imgGrande.classList.add("imagen-grande");
            contenedorImagenGrande.appendChild(imgGrande);
        
            // Funciones para navegar entre las imágenes
            let imagenActual = 0;
        
            const mostrarImagen = (indice) => {
                imgGrande.src = imagenes[indice];
                imagenActual = indice;
            };
        
            const siguienteImagen = () => {
                if (imagenActual < imagenes.length - 1) {
                    mostrarImagen(imagenActual + 1);
                }
            };
        
            const anteriorImagen = () => {
                if (imagenActual > 0) {
                    mostrarImagen(imagenActual - 1);
                }
            };
        
            // Crea botones de flecha para navegar entre las imágenes
            const flechaIzquierda = document.createElement("button");
            flechaIzquierda.textContent = "‹";
            flechaIzquierda.classList.add("flecha-izquierda");
            flechaIzquierda.addEventListener("click", anteriorImagen);
        
            const flechaDerecha = document.createElement("button");
            flechaDerecha.textContent = "›";
            flechaDerecha.classList.add("flecha-derecha");
            flechaDerecha.addEventListener("click", siguienteImagen);
        
            // Crea botón de cerrar con "X"
            const botonCerrar = document.createElement("button");
            botonCerrar.textContent = "X";
            botonCerrar.classList.add("cerrar");
            botonCerrar.addEventListener("click", () => {
                ventanaEmergente.remove();
            });
        
            ventanaEmergente.appendChild(contenedorImagenGrande);
            ventanaEmergente.appendChild(flechaIzquierda);
            ventanaEmergente.appendChild(flechaDerecha);
            ventanaEmergente.appendChild(botonCerrar);
        
            // anade ventana emergente al body
            document.body.appendChild(ventanaEmergente);
        }
        
const contenedorVideos = document.getElementById("carouselContent");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Variable para almacenar el video actualmente en reproducción
let videoActivo = null;

// Crea los videos dentro del carrousel
videos.forEach((video) => {
    const videoContainer = document.createElement("div");
    videoContainer.classList.add("video");

    const videoElement = document.createElement("iframe");
    videoElement.setAttribute("src", video.url);
    videoElement.setAttribute("frameborder", "0");
    videoElement.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
    videoElement.setAttribute("allowfullscreen", "");
    videoElement.classList.add("video-element");

    const titulo = document.createElement("h4");
    titulo.textContent = video.titulo;

    const descripcion = document.createElement("p");
    descripcion.textContent = video.descripcion;

    videoContainer.appendChild(videoElement);
    videoContainer.appendChild(titulo);
    videoContainer.appendChild(descripcion);

    contenedorVideos.appendChild(videoContainer);
});

// logica para la reproducción de un solo video
contenedorVideos.addEventListener("click", (event) => {
    const clickedVideo = event.target.closest(".video");
    if (!clickedVideo) return;

    const iframe = clickedVideo.querySelector("iframe");

    if (videoActivo && videoActivo !== iframe) {
        videoActivo.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    }

    videoActivo = iframe;
    iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
});

// Funcionalidad de las flechas para navegar
prevBtn.addEventListener("click", () => {
    contenedorVideos.scrollBy({
        left: -300, // Desplazamiento a la izquierda
        behavior: "smooth"
    });
});

nextBtn.addEventListener("click", () => {
    contenedorVideos.scrollBy({
        left: 300, // Desplazamiento a la derecha
        behavior: "smooth"
    });
});


document.getElementById("consulta-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // obtiene los valores de los campos
    const nombre = document.getElementById("nombre").value;
    const consulta = document.getElementById("consulta").value;
    const telefono = document.getElementById("telefono").value;
    const gmail = document.getElementById("gmail").value;

    // Crea el mensaje de WhatsApp con los datos del formulario
    const mensaje = encodeURIComponent(
        `Nombre: ${nombre}\nConsulta: ${consulta}\nTeléfono: ${telefono}\nGmail: ${gmail}`
    );

    // nro de WhatsApp
    const numeroWhatsApp = "+54 9 1126811283";

    // enlace para enviar el mensaje a través de wsp
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    // Redirige a la url de wsp
    window.open(urlWhatsApp, "_blank");
});
