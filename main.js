const formulario=document.getElementById('formulario_inicioAPL');
const inputs=document.querySelectorAll('#formulario_inicioAPL input');//arreglo de todos los inputs, el numeral es porque es un ID

const expresiones = {//objeto
	
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    empresa: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    empleados: /^\d{1,5}$/, // 7 a 14 numeros.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
let nombres=['nombre','apellido','empresa','empleados','correo','telefono']//vectores 

let grup=['grupo__nombre','grupo__apellido','grupo__empresa','grupo__empleados','grupo__telefono','grupo__correo']


const campos={//objeto en donde todas sus variables se encuentran el false

    nombre:false,
    apellido:false,
    empresa:false,
    empleados:false,
    correo:false,
    telefono:false
}
const validarFormulario=(e)=>{//funcion de tipo flecha que es evaluada con keyup
    switch(e.target.name) {//Evalua el name del input
       
        case "nombre":
            validarInformacion(expresiones.nombre.test(e.target.value),'grupo__nombre','nombre') 
        break;

        case "apellido":
            validarInformacion(expresiones.apellido.test(e.target.value),'grupo__apellido','apellido') 
        break;

        case "empresa":
            validarInformacion(expresiones.empresa.test(e.target.value), 'grupo__empresa','empresa')
            
        break;

        case "empleados":
            validarInformacion(expresiones.empleados.test(e.target.value), 'grupo__empleados','empleados')
            
        break;

        case "correo":
            validarInformacion(expresiones.correo.test(e.target.value), 'grupo__correo','correo')
            
        break;

        case "telefono":

            validarInformacion(expresiones.telefono.test(e.target.value), 'grupo__telefono','telefono')
        break;
    }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);    
});
var btn=document.querySelector('.fomulario__btn')
    btn.addEventListener('click',(e)=>{
    e.preventDefault();//previene que sea enviado
    console.log('hola');

    if(campos.nombre && campos.apellido && campos.empresa && campos.empleados && campos.correo && campos.telefono)
    {
        formulario.reset();// se reinician todos los campos del formulario
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono)=>{
            icono.classList.remove('formulario__grupo-correcto');//borra los iconos 
        });

        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo')
        //document.getElementById('nombre').classList.add('formulario__input-correcto')
        
    }
    else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
    
        for (var i = 0; i < 6; i++) {
            var y=document.getElementById(nombres[i]);
            if(y.value==""){
                validarInfo2(grup[i],nombres[i])
            }
            y="";
        }
    }
})

function validarInformacion(campoAValidar, grupoAValidar,variable){

    var x=document.getElementById(variable);

    if(x.value==""){
        
        document.getElementById(grupoAValidar).classList.add('formulario__grupo-incorrecto')

        document.getElementById(grupoAValidar).classList.remove('formulario__grupo-correcto')

        document.querySelector('#'+grupoAValidar+' i').classList.add('fa-times-circle');
        document.querySelector('#'+grupoAValidar+' i').classList.remove('fa-check-circle');
        
        document.querySelector('#'+grupoAValidar+ ' .formulario__input-errorn').classList.add('formulario__input-error-activo');
        document.querySelector('#'+grupoAValidar+ ' .formulario__input-error').classList.remove('formulario__input-error-activo');
        campos[variable]=false;
    }

    if(x.value!=""){
        console.log(x);
        document.getElementById(grupoAValidar).classList.add('formulario__grupo-incorrecto')

        document.getElementById(grupoAValidar).classList.remove('formulario__grupo-correcto')

        document.querySelector('#'+grupoAValidar+' i').classList.add('fa-times-circle');
        document.querySelector('#'+grupoAValidar+' i').classList.remove('fa-check-circle');
        document.querySelector('#'+grupoAValidar+ ' .formulario__input-error').classList.add('formulario__input-error-activo');
        document.querySelector('#'+grupoAValidar+ ' .formulario__input-errorn').classList.remove('formulario__input-error-activo');
        
        campos[variable]=false;}
    
    if(campoAValidar){//se accede a el valor en el input 
        document.getElementById(grupoAValidar).classList.remove('formulario__grupo-incorrecto')

        document.getElementById(grupoAValidar).classList.add('formulario__grupo-correcto')

        document.querySelector('#'+grupoAValidar+' i').classList.add('fa-check-circle');
        document.querySelector('#'+grupoAValidar+' i').classList.remove('fa-times-circle');
        document.querySelector('#'+grupoAValidar+ ' .formulario__input-error').classList.remove('formulario__input-error-activo');
        document.querySelector('#'+grupoAValidar+ ' .formulario__input-errorn').classList.remove('formulario__input-error-activo');
        campos[variable]=true;

    }
}   
function validarInfo2(grupoAValidar,variable)  {
    document.getElementById(grupoAValidar).classList.add('formulario__grupo-incorrecto')

        document.getElementById(grupoAValidar).classList.remove('formulario__grupo-correcto')

        document.querySelector('#'+grupoAValidar+' i').classList.add('fa-times-circle');
        document.querySelector('#'+grupoAValidar+' i').classList.remove('fa-check-circle');
        
        document.querySelector('#'+grupoAValidar+ ' .formulario__input-errorn').classList.add('formulario__input-error-activo');
        document.querySelector('#'+grupoAValidar+ ' .formulario__input-error').classList.remove('formulario__input-error-activo');
        campos[variable]=false;
}
