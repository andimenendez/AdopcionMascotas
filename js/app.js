const btnInicio = document.getElementById("btnI");
const btnCerrar = document.getElementById("btnC");
const btnRegistro = document.getElementById("btnR");


if (localStorage.getItem('users')){
  btnCerrar.hidden=true;
}
if (localStorage.getItem('userlog')){
  btnInicio.hidden=true;
  btnRegistro.hidden=true;
  btnCerrar.hidden=false;
}
if(!localStorage.getItem('userlog')){
  btnCerrar.hidden=true;
}

const user = [];
const registro = () =>{
  let usuarios = {
      apellido: document.getElementById('ape').value,
      name: document.getElementById('nom').value,
      email: document.getElementById('correo1').value,
      contraseña:document.getElementById('contra1').value
  }

    if(usuarios.apellido==="" || usuarios.name === "" || usuarios.contraseña=== "" || usuarios.email == ""){
      alert('Complete todos los campos');
      return
    }

    const validarEmail = /^(([^<>()\[\] \\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@( (\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}] )|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    if(!validarEmail.test(usuarios.email)){
      alert('email no tiene formato correcto');
      return;
    }

    user.push(usuarios)
    const userJson = JSON.stringify(user);
    window.localStorage.setItem('users',userJson);

    if (localStorage.getItem('users')){
      alert('Registro exitoso');
      window.location= '../html/iniciarSesion.html'
    } 
    document.getElementById("correo").focus()    
  }

const inicio = () =>{
  const email = document.getElementById('correo').value.toLowerCase();
  const contra = document.getElementById('contra').value;
  const validarEmail = /^(([^<>()\[\] \\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@( (\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}] )|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  if(!validarEmail.test(email)){
    alert('email no tiene formato correcto');
    return;
  }

  const usuario = JSON.parse(localStorage.getItem('users'));
  let bandera;
  let usuarioLog;

  usuario.map((user) =>{
    if(email===user.email.toLowerCase() && contra===user.contraseña){
      bandera=true;}
      usuarioLog = user
    })
    
    if(bandera){
      alert('sesion iniciada correctamente')
      delete usuarioLog.contraseña;
      localStorage.setItem('userlog',JSON.stringify(usuarioLog));
      window.location = '../html/mascotas.html';      
    }
    else{
      alert('Usuario o contraseña incorrecto');
    }
}

const volverPag = () =>{
  if (localStorage.getItem('userlog')){
    window.location= '../html/mascotas.html'
    
  }else{
    window.location= '../html/iniciarSesion.html'
  }
}

const cerrarSesion = () => {
  localStorage.removeItem('userlog');
  window.location = '../html/iniciarSesion.html'
};

document.oncontextmenu = function (){
  return false
} //PARA NO PODER USAR EL CLICK DERECHO