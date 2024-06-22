var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var regexTelefonoNacional = /^\d{10}$/;

var nombre=document.getElementById("nombre")
var MensajeNombre=document.getElementsByClassName("MensajeNombre")[0];
var tacheNombre=document.getElementsByClassName("tacheNombre")[0];
var buenaNombre=document.getElementsByClassName("buenaNombre")[0];

var celular=document.getElementById("nombre")
var MensajeCelular=document.getElementsByClassName("MensajeNombre")[0];
var tacheCelular=document.getElementsByClassName("tacheCelular")[0];
var buenaCelular=document.getElementsByClassName("buenaCelular")[0];

var correo=document.getElementById("nombre")
var MensajeCorreo=document.getElementsByClassName("MensajeCorreo")[0];
var tacheCorreo=document.getElementsByClassName("tacheCorreo")[0];
var buenaCorrero=document.getElementsByClassName("buenaCorreo")[0];

nombre.addEventListener("blur", ()=>{  
if (!regexNombre.test(nombre.value)) {
      MensajeNombre.classList.remove("ocultar");
      nombre.classList.add("input-tache");
      tacheNombre.classList.remove("ocultar");
      buenaNombre.classList.remove("ocultar");
      nombre.classList.remove("input-buena");
}
else{
    MensajeNombre.classList.add("ocultar");
      nombre.classList.add("input-buena");
      nombre.classList.remove("input-tache");
      tacheNombre.classList.add("ocultar");
      buenaNombre.classList.remove("ocultar");
}
});
nombre.addEventListener("blur", ()=>{  
      if (!regexNombre.test(nombre.value)) {
            MensajeNombre.classList.remove("ocultar");
            nombre.classList.add("input-tache");
            tacheNombre.classList.remove("ocultar");
            buenaNombre.classList.remove("ocultar");
            nombre.classList.remove("input-buena");
      }
      else{
          MensajeNombre.classList.add("ocultar");
            nombre.classList.add("input-buena");
            nombre.classList.remove("input-tache");
            tacheNombre.classList.add("ocultar");
            buenaNombre.classList.remove("ocultar");
      }
      });
      




  