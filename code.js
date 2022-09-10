  /* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
  let datosPersona = {
    nombre: "",
    edad: 0,
    ciudad: "",
    interesPorJs: "",
  };
  
  const listado = [{
      imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
      lenguajes: "HTML y CSS",
      bimestre: "1er bimestre",
    },
    {
      imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
      lenguajes: "Javascript",
      bimestre: "2do bimestre",
    },
    {
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
      lenguajes: "React JS",
      bimestre: "3er bimestre",
    },
  ];
  
  const profileBtn = document.querySelector("#completar-perfil");
  const materiasBtn = document.querySelector("#obtener-materias");
  /*const verMasBtn = document.querySelector("#ver-mas");*/ 
  const cambiarTema = document.querySelector('#cambiar-tema');
  
  profileBtn.addEventListener("click", renderizarDatosUsuario);
  materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
  cambiarTema.addEventListener("click", alternarColorTema);
  /* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */
  
  function obtenerDatosDelUsuario() {
    /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
        do {
          datosPersona.nombre= prompt ("Ingresa tu nombre: ");
      } while (datosPersona.nombre =="null" || datosPersona.nombre == "" || datosPersona.nombre.length < 3);
  
        do {
          let anoNacimiento = parseInt ( prompt( "Ingresa tu año de nacimiento: "))
          if (isNaN(anoNacimiento) || anoNacimiento < 1900 || anoNacimiento > 2021){
            alert ("Ingresa un año valido: Entre 1900-2021");
          } else {
            datosPersona.edad = new Date().getFullYear() - anoNacimiento
          }
        } while (datosPersona.edad == " null" || datosPersona.edad == "");
        
        do {
          datosPersona.ciudad = prompt ( "Ingresa la ciudad donde vives: ");
      } while (datosPersona.ciudad =="null" || datosPersona.ciudad =="");

      datosPersona.interesPorJs = confirm("¿Te interesa JavaScript? ");
  
  }
  
  
  function renderizarDatosUsuario() {
    /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
    obtenerDatosDelUsuario();
    /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
    document.getElementById("nombre").innerHTML = datosPersona.nombre;
    document.getElementById("edad").innerHTML = datosPersona.edad;
    document.getElementById("ciudad").innerHTML = datosPersona.ciudad;
    let interesJavascript = datosPersona.interesPorJs === true ? "Si" : "No"; 
    document.getElementById("javascript").innerHTML = interesJavascript; 
  
  }
  
  
  function recorrerListadoYRenderizarTarjetas() {
    /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  
    const divContenedor = document.getElementById ("fila");
  
    if(divContenedor.childElementCount == 0){
  
      listado.forEach(materia => {
  
        divContenedor.innerHTML += 
        `<div class="caja">
        <img src = "${materia.imgUrl}" alt = "${materia.lenguajes}">
        <p>Lenguaje: ${materia.lenguajes}</p>
        <p>Bimestre: ${materia.bimestre}</p>
        </div> `
      });
    }
  }
  
  function alternarColorTema() {
    /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
      const sitio = document.querySelector("#sitio");
      sitio.classList.toggle("dark");
  }
  
  /* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
  
  window.addEventListener("keypress", function (event){
    let textoEscondido = document.getElementById ("sobre-mi");
    if (event.key == "F" || event.key == "f"){
        textoEscondido.classList.remove("oculto");
    }
  })